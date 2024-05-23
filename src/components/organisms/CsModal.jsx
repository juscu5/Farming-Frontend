import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import DatePicker1 from '../atoms/YearPick';
import { useDispatch, useSelector } from 'react-redux';
import { addCs } from '../../redux/costsavings/effects';
import { selectSitesList } from '../../redux/submitform/selectors';
import { selectEmployee } from '../../redux/auth/selectors';
import { toast } from 'react-toastify';
import moment from 'moment';
import './CsModal.scss';

const CsModal = (props) => {
  const handleCloseConfirm = () => setShowConfirm(false);
  const { refetchCsData } = props;
  const sites = useSelector(selectSitesList);
  const login_name = useSelector(selectEmployee)
  const dispatch = useDispatch();

  const onClose = () => {
    props.close(true)
  }

  const callbackCs = (status, message) => {
    if (status === 200) {
      toast.success("Success Add Cost Savings", {
        position: "bottom-right"
      });
    } else {
      toast.error(message || "An error occurred", {
        position: "bottom-right"
      });
    }
  };

  const handleAddCs = (data) => {
    const date = new Date(data.year);
    const year = date.getFullYear();
    const finalData = {
      account_name: data.account,
      cost_saved: data.amount,
      quarter: data.quarter,
      site: data.site,
      year: year,
      last_updated_by: login_name 
    }
    console.log(finalData)
    dispatch(addCs(finalData, callbackCs));
    refetchCsData();
    props.close(true);
  }

  const csSchema = yup.object().shape({
    site: yup.string().required("Please Select Site"),
    quarter: yup.string().required("Please Select Quarter"),
    account: yup.string().required("Please Input Account"),
    amount: yup.string().required("Please Input Amount"),
  });

  return (
    <div>
        <Modal show={props.show} onHide={props.close}>
        <Formik
            validationSchema={csSchema}
            initialValues={{
                site: props.toggle === true ? props.data?.site : "",
                year: props.toggle === true ? moment(props.data?.year, 'YYYY').toDate() : new Date(),
                quarter: props.toggle === true ? props.data?.quarter : "",
                account: '',
                amount: ''
            }}
            onSubmit={handleAddCs}
          >
          {({ handleSubmit, handleChange, values, touched, errors }) =>
          <Form onSubmit={handleSubmit}>

            <Modal.Header closeButton>
                <Modal.Title>Add Account</Modal.Title>
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
                          <option value="">Select Site</option>
                          {
                            sites?.map((obj) => {
                              return(
                                <option value={obj.site_name}>{obj.site_name}</option>
                              )
                            })
                          }
                        </select>
                        <ErrorMessage name="site" component="div" className="text-danger" />
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
                          <DatePicker1 name="year" className="date"/>
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
                          <option value="">Select Quarter</option>
                          <option value="Q1">Q1</option>
                          <option value="Q2">Q2</option>
                          <option value="Q3">Q3</option>
                          <option value="Q4">Q4</option>
                        </select>
                        <ErrorMessage name="quarter" component="div" className="text-danger" />
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
                <Button variant="secondary" onClick={()=>onClose()}>
                    Cancel
                </Button>
                <Button type="submit" className='btn-color' variant="primary">
                    Add
                </Button>
            </Modal.Footer>
        </Form>
        }
        </Formik>

        </Modal>
    </div>
  )
}

export default CsModal