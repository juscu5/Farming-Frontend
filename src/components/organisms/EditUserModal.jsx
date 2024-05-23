import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { editUser, freezeUser } from '../../redux/user/effects';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';

const EditUserModal = (props) => {
    const dispatch = useDispatch();
    const { refetchUserData } = props;
    const handleCloseConfirm = () => setShowConfirm(false);

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

    const editUserData = (values) => {
        const userData = {
            login_id: props.userState[0].login_id,
            user_role: values.user_role,
        }
        dispatch(editUser(userData, callbackUser));
        refetchUserData();
        props.close(true);
    }

    const freezeUserData = () => {
        const userData = {
            login_id: props.userState[0].login_id,
            status: props.userState[0].status,
        }
        dispatch(freezeUser(userData, callbackUser));
        refetchUserData();
        props.close(true);
    }

  return (
    <div>
        <Modal show={props.show} onHide={props.close} size='xm'>

        <Formik
            initialValues={{
                user_role: props.userState && props.userState.length > 0 ? props.userState[0]['user_role'] : "",
            }}
            onSubmit={editUserData}
          >
          {({ handleSubmit, handleChange, values }) =>
          <Form onSubmit={handleSubmit}>

            <Modal.Header closeButton>
                <Modal.Title>Edit Account #{props.idState[0].id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="mb-3">
                  <Col md="3">
                    <div className="strong">NT Login:</div>
                  </Col>
                  <Col md="8">
                    <div>
                    <Form.Group>
                        <div>{props.userState[0].login_id}</div>
                    </Form.Group>
                    </div>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md="3">
                    <div className="strong">CCMS ID:</div>
                  </Col>
                  <Col md="8">
                    <div>
                        <Form.Group>
                            <div>{props.userState[0].ccms_id}</div>
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
                            <div>{props.userState[0].employee_full_name}</div>
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
                            <div>{props.userState[0].email}</div>
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
                        <select className="form-select" name="user_role" value={values.user_role} onChange={handleChange}>
                          <option value="ADMIN">ADMIN</option>
                          <option value="OWNER">OWNER</option>
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
                            <div>{props.userState[0].status === "active" ? "ACTIVE" : "INACTIVE"}</div>
                        </Form.Group>
                    </div>
                  </Col>
                </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.close}>
                    Cancel
                </Button>
                <Button variant={props.userState[0].status === "active" ? "danger" : "success"} onClick={() => freezeUserData()}>
                    {props.userState[0].status === "active" ? "Inactive" : "Active"}
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

export default EditUserModal