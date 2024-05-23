import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { addUser } from '../../redux/user/effects';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';

const AddUserConfirm = (props) => {
    const dispatch = useDispatch();
    const { refetchUserData } = props;
    const handleCloseConfirm = () => setShowConfirm(false);

    const callbackUser = (status) => {
        if (status === 200) {
          toast.success("Success Add Employee", {
            position: "bottom-right"
          });
        } else {
          toast.error(status, {
            position: "bottom-right"
          });
        }
      };

    const addUserData = (values) => {
      const userData = {
          login_id: props.employeeState[0].login_id,
          username: props.employeeState[0].login_id,
          ccms_id: props.idState[0].employee_ident,
          email: props.employeeState[0].email1, 
          employee_full_name: props.employeeState[0].employee_common_name,
          user_role: values.user_role,
          status: values.status,
      }

      dispatch(addUser(userData, callbackUser));
      refetchUserData();
      props.close(true);
      props.onClose();
    }

  return (
    <div>
        <Modal show={props.show} onHide={props.close} size='xm'>

        <Formik
            initialValues={{
                user_role: "OWNER",
                status: "active",
            }}
            onSubmit={addUserData}
          >
          {({ handleSubmit, handleChange, values }) =>
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Add this Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Row className="mb-3">
                  <Col md="3">
                    <div className="strong">CCMS ID:</div>
                  </Col>
                  <Col md="8">
                    <div>
                        <Form.Group>
                            <div>{props.idState[0].employee_ident}</div>
                        </Form.Group>
                    </div>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md="3">
                    <div className="strong">NT Login:</div>
                  </Col>
                  <Col md="8">
                    <div>
                    <Form.Group>
                        <div>{props.employeeState[0].login_id}</div>
                    </Form.Group>
                    </div>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md="3">
                    <div className="strong">Full Name:</div>
                  </Col>
                  <Col md="8">
                    <div>
                        <Form.Group>
                            <div>{props.employeeState[0].employee_common_name}</div>
                        </Form.Group>
                    </div>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md="3">
                    <div className="strong">Email:</div>
                  </Col>
                  <Col md="8">
                    <div>
                        <Form.Group>
                            <div>{props.employeeState[0].email1}</div>
                        </Form.Group>
                    </div>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md="3">
                    <div className="strong">Role:</div>
                  </Col>
                  <Col md="8">
                    <div>
                      <Form.Group>
                        <select className="form-select" value={values.user_role} name="user_role" onChange={handleChange}>
                          <option value="OWNER">OWNER</option>
                          <option value="ADMIN">ADMIN</option>
                        </select>
                      </Form.Group>
                    </div>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md="3">
                    <div className="strong">Status:</div>
                  </Col>
                  <Col md="8">
                    <div>
                      <Form.Group>
                        <select className="form-select" value={values.status} name="status" onChange={handleChange}>
                          <option value="active">ACTIVE</option>
                          <option value="inactive">INACTIVE</option>
                        </select>
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

export default AddUserConfirm