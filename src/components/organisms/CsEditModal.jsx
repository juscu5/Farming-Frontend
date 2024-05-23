import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { editCs } from '../../redux/costsavings/effects';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectSitesList } from '../../redux/submitform/selectors';
import DatePicker1 from '../atoms/YearPick';
import moment from 'moment';
import './CsModal.scss';

const CsEditModal = (props) => {
  const handleCloseConfirm = () => setShowConfirm(false);
  const { refetchCsData } = props;
  const dispatch = useDispatch();
  const sites = useSelector(selectSitesList);

  const callbackCs = (status, message) => {
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

  const handleEditCs = (editData) => {
    const date = new Date(editData.year);
    const year = date.getFullYear();
    const finalData = {
      account_name: editData.account,
      cost_saved: editData.amount,
      quarter: editData.quarter,
      site: editData.site,
      year: year,
      cost_id: editData.cost_id
    }
    dispatch(editCs(finalData, callbackCs));
    refetchCsData();
    props.close(true);
  }

  const csSchema = yup.object().shape({
    account: yup.string().required("Please Input Account"),
    amount: yup.string().required("Please Input Amount"),
  });

  return (
    <div>
        <Modal show={props.show} onHide={props.close}>
        <Formik
            validationSchema={csSchema}
            initialValues={{
                site: props.data?.site,
                year: moment(props.data?.year, 'YYYY').toDate(),
                quarter: props.data?.quarter,
                cost_id: props.data?.cost_id,
                account: props.data?.account,
                amount: props.data?.amount
            }}
            onSubmit={handleEditCs}
          >
          {({ handleSubmit, handleChange, values, touched, errors }) =>
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="mb-3">
                  <Col md="5">
                    <div className="strong">Site:</div>
                  </Col>
                  <Col md="6">
                    <div>
                    <Form.Group>
                      <select className="form-select" name="site" value={values.site} onChange={handleChange}>
                        {
                          sites?.map((obj) => {
                            return(
                              <option value={obj.site_name}>{obj.site_name}</option>
                            )
                          })
                        }
                      </select>
                    </Form.Group>
                    </div>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md="5">
                    <div className="strong">Year:</div>
                  </Col>
                  <Col md="6">
                    <div>
                      <Form.Group>
                        <InputGroup>
                          <DatePicker1 name="year" className="date"/>
                        </InputGroup>
                      </Form.Group>
                    </div>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md="5">
                    <div className="strong">Quarter:</div>
                  </Col>
                  <Col md="6">
                    <div>
                    <Form.Group>
                        <select className="form-select" name="quarter" value={values.quarter} onChange={handleChange}>
                          <option value="Q1">Q1</option>
                          <option value="Q2">Q2</option>
                          <option value="Q3">Q3</option>
                          <option value="Q4">Q4</option>
                        </select>
                      </Form.Group>
                    </div>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md="5">
                    <div className="strong">Account:</div>
                  </Col>
                  <Col md="6">
                    <div>
                    <Form.Group>
                        <Form.Control 
                          placeholder="Enter Account" 
                          name="account"
                          value={values.account}
                          onChange={handleChange}
                          isValid={!!touched.account && !errors.account}
                          isInvalid={!!errors.account}
                        />
                        <ErrorMessage name="account" component="div" className="text-danger" />
                    </Form.Group>
                    </div>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md="5">
                    <div className="strong">Amount:</div>
                  </Col>
                  <Col md="6">
                    <div>
                    <Form.Group>
                        <Form.Control 
                          placeholder="Enter Amount" 
                          name="amount"
                          type="number"
                          value={values.amount}
                          onChange={handleChange}
                          isValid={!!touched.amount && !errors.amount}
                          isInvalid={!!errors.amount}
                        />  
                        <ErrorMessage name="amount" component="div" className="text-danger" />
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

export default CsEditModal