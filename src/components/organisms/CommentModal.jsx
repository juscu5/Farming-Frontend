import React from 'react'
import './Modal.scss'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { editWorkload } from '../../redux/workload/effects';
import { useDispatch } from 'react-redux';

const EditModal = (props) => {
  const { refetchTrackerData } = props;
  const dispatch = useDispatch();

  const callbackWork = (status, message) => {
    if (status === 200) {
      toast.success("Comment Added!", {
        position: "bottom-right"
      });
    } else {
      toast.error(message || "An error occurred", {
        position: "bottom-right"
      });
    }
  };

    const editFormData = (values) => {
      dispatch(editWorkload(values, callbackWork));
      refetchTrackerData();
      props.close(true);
    }
  
    const iniVal = {
      'Tracker ID': props.identity && props.identity.length > 0 ? props.identity[0]['Tracking ID'] : "",
      'Comments': props.textArea && props.textArea.length > 0 ? props.textArea[0]['Comments'] : "",
    };
    
    return(
      <div className='modal'>
        <Modal show={props.show} size='xs'>
          <Formik
            initialValues={iniVal}
            onSubmit={editFormData}
          >
          {({ handleSubmit, handleChange, values }) =>
          <Form onSubmit={handleSubmit}>
            <Modal.Header>
              <Modal.Title>Edit Comment on Tracker ID# {props.identity[0]['Tracking ID']}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
    
              {/* Comments */}
              <Row className="mb-3">
                <Col md="3">
                  <div className="strong">Comment:</div>
                </Col>
                <Col md="9">
                  <div>
                    <Form.Group>
                      <Form.Control
                        as="textarea"
                        name="Comments"
                        rows="4"
                        className='noresize'
                        placeholder="Add Comment"
                        value={values['Comments'] === null ? "N/A" : values['Comments']}
                        onChange={handleChange}
                      />
                      </Form.Group>
                  </div>
                </Col>
              </Row>
              
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.close}>
                Cancel
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

export default EditModal