import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { authlogout } from '../../redux/auth/effects';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogoutModal = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(['sessionid']);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const callback = (err) => {
    if (!err) {
      removeCookie('sessionid', { path: '/' });
      localStorage.removeItem('lastPath');
      navigate('/ph-farming/login');
      // toast.success("Logout Successful", {
      //   position: "bottom-right"
      // })
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } else {
      console.log(err);
    }
  };

  const handleClick = () => {
    dispatch(authlogout(callback))
  }

  return (
    <>
    <Modal show={props.show} centered>
      <Modal.Header>
        Confirmation
      </Modal.Header>
      <Modal.Body>
        Do you want to Logout?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.close}>
          Cancel
        </Button>
        <Button className='btn-color' variant="primary" onClick={handleClick}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
    <ToastContainer/>
    </>
  )
}

export default LogoutModal