import React, { useEffect, useState } from 'react'
import Filtering from '../../components/organisms/DataTable'
import { Row } from 'react-bootstrap'
import { TrackerColumns, trackerItems} from '../../util'
import { useDispatch, useSelector } from 'react-redux'
import { selectTracker } from '../../redux/tracker/selectors'
import { getTracker } from '../../redux/tracker/effects'
import DetailsModal from '../../components/organisms/DetailsModal'
import { toast } from 'react-toastify';
import moment from 'moment'

import { getCsrf } from '../../redux/auth/effects'
import { debounce } from 'lodash';

const Tracker = () => {
  const [ showModal, setShowModal ] = useState(false);
  const [ selectedRow, setSelectedRow ] = useState('');
  
  const [ reference, setReference ] = useState([]);
  const [ identity, setIdentity ] = useState([]);
  
  const [ data, setData ] = useState([]);
  const [ data1, setData1 ] = useState([]);
  const [ textArea, setTextArea ] = useState([]);

  const dispatch = useDispatch();
  const tracker = useSelector(selectTracker);

  const delayedCsrf = debounce(() => {
    dispatch(getCsrf());
  }, 300);

  const delayedTracker = debounce(() => {
    dispatch(getTracker());
  }, 300);

  useEffect(() => {
    dispatch(getTracker(callbackTrack));
    delayedCsrf();
    return () => {
      delayedCsrf.cancel();
    };
  }, []);

  const callbackTrack = (err) => {
    if (err) {
      toast.error(err?.error, {
        position: "bottom-right"
      })
    }
  };

  const modal_name = "Tracker"

  const handleCloseModal = () => setShowModal(false);

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setShowModal(true);

    setReference([
      {
      'user_ref': row.user_ref.user_id,
      'client_ref': row.client_ref.client_id,
      'site_ref': row.sites_ref.site_id,
      'type_ref': row.type_ref.type_id,
      }
    ])

    setIdentity([
      {
      'Tracking ID': row.farming_ident
      }
    ])

    setData([
      {
        'Status': row.status,
        'Client': row.client_ref.client_name,
        'Site': row.sites_ref.site_name,
        'Seating Requirement': row.seat_req,
        'Type': row.type_ref.type_name,
      },
    ])

    setData1([
      {
        'Owner': row.user_ref.last_name,
        'Requested Date': moment(row.requested_date).isValid() ? moment(row.requested_date).format("l") : row.requested_date || "N/A",
        'Target Date': moment(row.target_date).isValid() ? moment(row.target_date).format("l") : row.target_date || "N/A",
      },
    ])

    setTextArea([
      {
        'Remarks': row.remarks,
        'Solution': row.solution,
        'Email Trail': row.email_trail
      },
    ])
  }

  const refetchTrackerData = () => {
    delayedTracker();
  };

  return (
    <div className="tracker">
      {/* <h4>Tracker</h4> */}
      <Row className="mb-4"/>
      <Filtering 
        columns={TrackerColumns} 
        data={tracker} 
        filterItems={trackerItems} 
        handleRowClick={handleRowClick}
      />
      <DetailsModal 
        show={showModal} 
        close={handleCloseModal} 
        modalName={modal_name} 
        reference={reference}
        identity={identity} 
        data={data} 
        data1={data1}
        textArea={textArea}
        refetchTrackerData={refetchTrackerData}
      />
    </div>
  )
}

export default Tracker