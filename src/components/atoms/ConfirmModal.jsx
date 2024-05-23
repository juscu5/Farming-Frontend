import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTracker } from '../../redux/tracker/effects';
import { toast } from 'react-toastify';

const ConfirmModal = (props) => {
  const dispatch = useDispatch();
  const { refetchTrackerData } = props;

  const callbackAuth = (status, message) => {
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
  
  const editedData = (values) => {
    dispatch(editTracker(values, callbackAuth));
    refetchTrackerData();
    props.closeConfirm(true);
    props.closeEdit(true);
    props.close(true);
  }

  return (
    <>
    <Modal show={props.showConfirm} centered>
      <Modal.Header>
        Confirmation
      </Modal.Header>
      <Modal.Body>
        Do you want to apply changes?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeConfirm}>
          Cancel
        </Button>
        <Button className='btn-color' variant="primary" onClick={() => editedData(props.editData)}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default ConfirmModal