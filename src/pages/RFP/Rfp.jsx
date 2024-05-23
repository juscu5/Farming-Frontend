import React, { useEffect, useState } from 'react'
import Filtering from '../../components/organisms/DataTable'
import { Row } from 'react-bootstrap'
import { RfpColumns, rfpItems } from '../../util'
import { useDispatch, useSelector } from 'react-redux'
import { selectRfp } from '../../redux/rfp/selectors'
import { getRfp } from '../../redux/rfp/effects'
import DetailsModal from '../../components/organisms/DetailsModal'
import moment from 'moment'

import { getCsrf } from '../../redux/auth/effects'
import { debounce } from 'lodash';

const Rfp = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState('');
  
  const [ reference, setReference ] = useState([])
  const [ identity, setIdentity ] = useState([]);

  const [ data, setData ] = useState([]);
  const [ data1, setData1 ] = useState([]);
  const [ textArea, setTextArea ] = useState([]);

  const dispatch = useDispatch();
  const rfp = useSelector(selectRfp)

  const delayedCsrf = debounce(() => {
    dispatch(getCsrf());
  }, 300);

  const delayedRfp = debounce(() => {
    dispatch(getRfp());
  }, 300);

  useEffect(() => {
    dispatch(getRfp(callbackRfp));
    delayedCsrf();
    return () => {
      delayedCsrf.cancel();
    };
  }, []);

  const callbackRfp = (err) => {
    if (err) {
      toast.error(err?.error, {
        position: "bottom-right"
      })
    }
  };

  const modal_name = "RFP"

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
        'RFP ID': row.farming_ident
      }
    ])

    setData([
      {
        'Client': row.client_ref.client_name,
        'Site': row.sites_ref.site_name,
        'Type': row.type_ref.type_name,
      },
    ])

    setData1([
      {
        'Requestor': row.requestor === null ? "N/A" : row.requestor,
        'Requested Date': moment(row.requested_date).isValid() ? moment(row.requested_date).format("l") : row.requested_date || "N/A",
        'Target Date': moment(row.target_date).isValid() ? moment(row.target_date).format("l") : row.target_date || "N/A",
      },
    ])

    setTextArea([
      {
        'Remarks': row.remarks,
        'Email Trail': row.email_trail
      },
    ])
  };

  const refetchRfpData = () => {
    delayedRfp();
  };

  return (
    <div className="rfp">
      {/* <h4>RFP</h4> */}
      <Row className="mb-4"/>
      <Filtering 
        columns={RfpColumns} 
        data={rfp} 
        filterItems={rfpItems} 
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
        refetchRfpData={refetchRfpData}
      />
    </div>
  )
}

export default Rfp