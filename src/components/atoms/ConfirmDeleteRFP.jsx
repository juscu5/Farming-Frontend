import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRfp1 } from '../../redux/rfp/effects';
import { toast } from 'react-toastify';
import { selectEmployee } from '../../redux/auth/selectors';

const ConfirmDeleteRFP = (props) => {
    const dispatch = useDispatch();
    const { refetchRfpData } = props;

    const login_name = useSelector(selectEmployee);

    const callbackDelete = (status, message) => {
      if (status === 200) {
        toast.success("Success Edit Changes", {
          position: "bottom-right"
        });
      } else {
        toast.error(message || "An error occurred", {
          position: "bottom-right"
        });
      }
    };

    const deleteRfp = (values) => {
        const data = {
          farming_ident: values[0]['RFP ID'],
          last_updated_by: login_name,
        }
        dispatch(deleteRfp1(data, callbackDelete))
        refetchRfpData();
        props.closeConfirm();
        props.close(true);
      }

  return (
    <Modal show={props.showConfirm} centered>
      <Modal.Header>
        Confirmation
      </Modal.Header>
      <Modal.Body>
        Do you want to delete this ID?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeConfirm}>
          Cancel
        </Button>
        <Button className='btn-color' variant="primary" onClick={() => deleteRfp(props.identity)}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmDeleteRFP