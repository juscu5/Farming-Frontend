import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { editClient, freezeClient } from '../../redux/client/effects';
import { toast } from 'react-toastify';
import moment from 'moment';

import { useDispatch, useSelector } from 'react-redux';
import { selectEmployee } from '../../redux/auth/selectors';

const EditClientModal = (props) => {
    const dispatch = useDispatch();
    const { refetchClientData } = props;
    const handleCloseConfirm = () => setShowConfirm(false);

    const login_name = useSelector(selectEmployee)

    const callbackUser = (status, message) => {
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

    const editClientData = (values) => {
        const clientData = {
            client_id: props.idState[0].client_id,
            client_name: values.client_name,
            owner: login_name,
            last_updated_by: login_name,
            updated_dt_utc: moment(new Date()).format()
        }
        dispatch(editClient(clientData, callbackUser));
        refetchClientData();
        props.close(true);
    }

    const freezeClientData = () => {
        const clientData = {
            client_id: props.idState[0].client_id,
            last_updated_by: login_name,
        }
        dispatch(freezeClient(clientData, callbackUser));
        refetchClientData();
        props.close(true);
    }

  return (
    <div>
        <Modal show={props.show} onHide={props.close} size='xm'>

        <Formik
            initialValues={{
                client_name: props.clientState && props.clientState.length > 0 ? props.clientState[0]['client_name'] : "",
            }}
            onSubmit={editClientData}
          >
          {({ handleSubmit, handleChange, values }) =>
          <Form onSubmit={handleSubmit}>

            <Modal.Header closeButton>
                <Modal.Title>Edit Client #{props.idState[0].client_id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Client */}
            <Row className="mb-3">
                <div>
                    <Form.Group>
                        <div className="strong">Client Name:</div>
                        <Form.Control 
                            placeholder="Enter Client Name" 
                            name="client_name"
                            onChange={handleChange}
                            value={values.client_name}
                        />  
                    </Form.Group>
                </div>
            </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.close}>
                    Cancel
                </Button>
                <Button variant={props.clientState[0].status === true ? "danger" : "success"} onClick={() => freezeClientData()}>
                    {props.clientState[0].status === false ? "Active" : "Inactive"}
                </Button>
                
                <Button type="submit" className='btn-color' variant="primary">
                    Save
                </Button>
            </Modal.Footer>
        </Form>
        }
        </Formik>

        </Modal>
    </div>
  )
}

export default EditClientModal