import React, { useEffect, useState } from 'react'
import Filtering from '../../components/organisms/DataTable'
import './Client.scss'
import { Row, Button } from 'react-bootstrap'
import { ClientColumns, clientItems} from '../../util'
import { useDispatch, useSelector } from 'react-redux'
import { selectClient } from '../../redux/client/selectors'
import { getClient } from '../../redux/client/effects'

import EditClientModal from '../../components/organisms/EditClientModal'
import AddModal from '../../components/organisms/AddModal'
import { selectEmployee } from '../../redux/auth/selectors'

import { toast } from 'react-toastify';

import { getCsrf } from '../../redux/auth/effects'
import { debounce } from 'lodash';
import moment from 'moment'

const Client = () => {
  const [ showModal, setShowModal ] = useState(false);
  const [ selectedRow, setSelectedRow ] = useState('');

  const [ showAddModal, setShowAddModal ] = useState(false);
  
  const [ clientState, setClientState ] = useState([]);
  const [ idState, setIdState ] = useState([]);

  const handleCloseModal = () => setShowModal(false);
  const handleCloseAddModal = () => setShowAddModal(false);

  const login_name = useSelector(selectEmployee)

  const dispatch = useDispatch();
  const client = useSelector(selectClient);

  const delayedCsrf = debounce(() => {
    dispatch(getCsrf());
  }, 300);

  const delayedClient = debounce(() => {
    dispatch(getClient());
  }, 300);

  useEffect(() => {
    dispatch(getClient(callbackClient));
    delayedCsrf();
    return () => {
      delayedCsrf.cancel();
    };
  }, []);

  const callbackClient = (err) => {
    if (err) {
      toast.error(err?.error, {
        position: "bottom-right"
      })
    }
  };

  const modal_name = "Client"

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setShowModal(true);

    setIdState([
      {
      'client_id': row.client_id
      }
    ])

    setClientState([
      {
        "client_name": row.client_name,
        "status": row.is_active
        
      },
    ])
  }

  const refetchClientData = () => {
    delayedClient();
  };

  return (
    <div className="client">
      {/* <h4>Workload</h4> */}
      <Button className='btn-color' onClick={() => setShowAddModal(true)}>Add Client</Button>
      <Row className="mb-4"/>
      <Filtering 
        columns={ClientColumns} 
        data={client} 
        filterItems={clientItems} 
        handleRowClick={handleRowClick}
      />
      <AddModal 
        show={showAddModal} 
        close={handleCloseAddModal} 
        refetchClientData={refetchClientData}
      />
      <EditClientModal 
        show={showModal} 
        close={handleCloseModal} 
        modalName={modal_name} 
        clientState={clientState}
        idState={idState} 
        refetchClientData={refetchClientData}
      />
    </div>
  )
}

export default Client