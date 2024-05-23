import React, { useEffect, useState } from 'react'
import Filtering from '../../components/organisms/DataTable'
import { Row } from 'react-bootstrap'
import { WorkloadColumns, workloadItems} from '../../util'
import { useDispatch, useSelector } from 'react-redux'
import { selectWorkload } from '../../redux/workload/selectors'
import { getWorkload } from '../../redux/workload/effects'
import PieChart from '../../components/organisms/PieChart'
import CommentModal from '../../components/organisms/CommentModal'
import { toast } from 'react-toastify';
import moment from 'moment'

import { getCsrf } from '../../redux/auth/effects'
import { debounce } from 'lodash';

const Dashboard = () => {
  const [ showModal, setShowModal ] = useState(false);
  const [ selectedRow, setSelectedRow ] = useState('');
  
  const [ identity, setIdentity ] = useState([]);
  const [ textArea, setTextArea ] = useState([]);

  const dispatch = useDispatch();
  const workload = useSelector(selectWorkload);


  function countLastNames(workload) {
    const lastNameCounts = {};
    workload.forEach((item) => {
        const lastName = item.user_ref.last_name;
        if (!lastNameCounts[lastName]) {
            lastNameCounts[lastName] = 0;
        }
        lastNameCounts[lastName] += 1;
    });
    return lastNameCounts;
  }
  const lastNameCounts = countLastNames(workload);


  const delayedCsrf = debounce(() => {
    dispatch(getCsrf());
  }, 300);

  const delayedWorkload = debounce(() => {
    dispatch(getWorkload());
  }, 300);

  useEffect(() => {
    dispatch(getWorkload(callbackWork));
    delayedCsrf();
    return () => {
      delayedCsrf.cancel();
    };
  }, []);

  const callbackWork = (err) => {
    if (err) {
      toast.error(err?.error, {
        position: "bottom-right"
      })
    }
  };

  const handleCloseModal = () => setShowModal(false);

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setShowModal(true);

    setIdentity([
      {
        'Tracking ID': row.farming_ident
      }
    ])

    setTextArea([
      {
        'Comments': row.comments_progress,
      },
    ])
  }

  const refetchWorkloadData = () => {
    delayedWorkload();
  };

  return (
    <div className="workload">
      {/* <h4>Workload</h4> */}
      <PieChart count={lastNameCounts}/>
      <Row className="mb-4"/>
      <Filtering 
        columns={WorkloadColumns} 
        data={workload} 
        filterItems={workloadItems} 
        handleRowClick={handleRowClick}
      />
      <CommentModal 
        show={showModal} 
        close={handleCloseModal} 
        identity={identity} 
        textArea={textArea}
        refetchTrackerData={refetchWorkloadData}
      />
    </div>
  )
}

export default Dashboard