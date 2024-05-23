import React, { useEffect, useState } from 'react'
import Filtering from '../../components/organisms/DataTable'
import { Row, Button } from 'react-bootstrap'
import { UserColumns, userItems} from '../../util'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/user/selectors'
import { getUser } from '../../redux/user/effects'
import EditUserModal from '../../components/organisms/EditUserModal'
import AddUserModal from '../../components/organisms/AddUserModal'
import { toast } from 'react-toastify';
import './User.scss'

import { getCsrf } from '../../redux/auth/effects'
import { debounce } from 'lodash';

const User = () => {
  const [ showModal, setShowModal ] = useState(false);
  const [ showUserModal, setShowUserModal ] = useState(false);
  const [ selectedRow, setSelectedRow ] = useState('');

  const handleCloseModal = () => setShowModal(false);
  const handleCloseUserModal = () => setShowUserModal(false);
  
  const [ userState, setUserState ] = useState([]);
  const [ idState, setIdState ] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const delayedCsrf = debounce(() => {
    dispatch(getCsrf());
  }, 300);

  const delayedUser = debounce(() => {
    dispatch(getUser());
  }, 300);

  useEffect(() => {
    dispatch(getUser(callbackUser));
    delayedCsrf();
    return () => {
      delayedCsrf.cancel();
    };
  }, []);

  const callbackUser = (err) => {
    if (err) {
      toast.error(err?.error, {
        position: "bottom-right"
      })
    }
  };

  const modal_name = "User"

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setShowModal(true);

    setIdState([
      {
      'id': row.id
      }
    ])

    setUserState([
      {
        'login_id': row.login_id,
        'ccms_id': row.ccms_id,
        'employee_full_name': row.employee_full_name,
        'email': row.email,
        'user_role': row.user_role,
        'status': row.status
      },
    ])
  }

  const refetchUserData = () => {
    delayedUser();
  };

  return (
    <div className="user">
      {/* <h4>Workload</h4> */}
      <Button className='btn-color' onClick={()=>setShowUserModal(true)}>Add User</Button>
      <Row className="mb-4"/>
      <Filtering 
        columns={UserColumns} 
        data={user} 
        filterItems={userItems} 
        handleRowClick={handleRowClick}
      />
      <AddUserModal
        show={showUserModal} 
        close={handleCloseUserModal} 
        refetchUserData={refetchUserData}
      />
      <EditUserModal 
        show={showModal} 
        close={handleCloseModal} 
        modalName={modal_name} 
        userState={userState}
        idState={idState} 
        refetchUserData={refetchUserData}
      />
    </div>
  )
}

export default User