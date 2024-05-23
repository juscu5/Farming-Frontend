import React, { useState } from 'react'
import './Modal.scss'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Formik, ErrorMessage} from 'formik';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';

import { addClient } from '../../redux/client/effects';
import { selectEmployee } from '../../redux/auth/selectors';
import moment from 'moment';

const AddModal = (props) => {
  const { refetchClientData } = props;
  const dispatch = useDispatch();

  const selectName = useSelector(selectEmployee);

  const callbackAdd = (status, message) => {
    if (status === 200) {
      toast.success("Client Added!", {
        position: "bottom-right"
      });
    } else {
      toast.error(message || "An error occurred", {
        position: "bottom-right"
      });
    }
  };

    const addClientData = (values) => {
        const clientData = {
            client_name: values.client_name,
            created_dt_utc: moment(new Date()).format(),
            last_updated_by: selectName
        }
        dispatch(addClient(clientData, callbackAdd));
        refetchClientData();
        props.close(true);
    } 

    const clientSchema = yup.object().shape({
        client_name: yup.string().required("Please Enter Client Name"),
    });
  
    return(
      <div className='modal'>
        <Modal show={props.show} onHide={props.close} size='xs'>
          <Formik
            validationSchema={clientSchema}
            initialValues={{
                client_name: ""
            }}
            onSubmit={addClientData}
          >
          {({ handleSubmit, handleChange, touched, errors }) =>
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Add Client</Modal.Title>
            </Modal.Header>
            <Modal.Body>
    
            {/* Client */}
            <Row className="mb-3">
                <div>
                    <Form.Group>
                        <Form.Control 
                            placeholder="Enter Client Name" 
                            name="client_name"
                            onChange={handleChange}
                            isValid={!!touched.client_name && !errors.client_name}
                            isInvalid={!!errors.client_name}
                        />  
                        <ErrorMessage name="client_name" component="div" className="text-danger" />
                    </Form.Group>
                </div>
            </Row>
              
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.close}>
                Cancel
              </Button>
              <Button type="submit" className='btn-color' variant="primary" onClick={()=>setShowConfirm(true)}>
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

export default AddModal