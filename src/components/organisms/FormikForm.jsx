import React, { useEffect } from 'react';
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { Card } from 'react-bootstrap';

import DatePicker1 from '../atoms/DatePick';
import "react-datepicker/dist/react-datepicker.css";

import './FormikForm.scss'

import { selectEmployee } from '../../redux/auth/selectors';
import { getTypes, getClients, getSites } from '../../redux/submitform/effects';
import { useDispatch, useSelector } from 'react-redux';

import { selectTypesList, selectClientsList, selectSitesList } from '../../redux/submitform/selectors';

const FormikForm = (props) => {

  const dispatch = useDispatch();
  const types = useSelector(selectTypesList);
  const clients = useSelector(selectClientsList);
  const sites = useSelector(selectSitesList);
  const login_name = useSelector(selectEmployee)

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getClients());
    dispatch(getSites());
  }, []);
  
  const FormData = (values, {resetForm}) => {
    const data = {
      type_ref: values.type,
      sites_ref: values.site,
      client_ref: values.client,
      user_ref: 1,
      seat_req: values.seat,
      need: values.need,
      count: 1,
      requested_date: values.requested_date,
      target_date: values.target_date,
      resolved_date: values.resolve_date === '' ? null : values.resolve_date,
      resolved_days: null,
      critical_item: "Low",
      requestor: values.requestor,
      status: values.status,
      remarks: values.remarks,
      solution: values.solution,
      email_trail: values.email_trail,
      created_dt_utc: new Date(),
      updated_dt_utc: null,
      is_active: true,
      last_updated_by: login_name
    }
    props.formdata(data);
    resetForm();
  }

  const IPschema = yup.object().shape({
    type: yup.string().required("Please Select Type"),
    site: yup.string().required("Please Select Site"),
    client: yup.string().required("Please Select Client"),
    need: yup.string().required("Please Add Need"),
    status: yup.string().required("Please Select Status"),
    seat: yup.string().when("status", {
      is: "In Progress",
      then: () => yup.string().required("Please Select Seat"),
      otherwise: () => yup.string().notRequired(),
    }),
    requestor: yup.string().when("status", {
      is: "RFP",
      then: () => yup.string().required("Please Add Requestor"),
      otherwise: () => yup.string().notRequired(),
    }),
  });
  
  return (
    <Formik
      validationSchema={IPschema}
      onSubmit={FormData}
      initialValues={{
        type: '',
        site: '',
        client: '',
        seat: '',
        need: '',
        requestor: '',
        requested_date: new Date(),
        target_date: '',
        resolve_date: '',
        status: "In Progress",
        remarks: '',
        solution: '',
        email_trail: '',
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form onSubmit={handleSubmit}>
          <Card>
            <Card.Header as="h4">
              Submit Form
            </Card.Header>
            <Card.Body>
              {/* 4 */}
              <Row className="mb-3">
                <Form.Group as={Col} md="5">
                  <Form.Label>Status</Form.Label>
                  <InputGroup hasValidation>
                      <select className="form-select" name="status" onChange={handleChange}>
                        <option value="In Progress">In Progress</option>
                        <option value="RFP">RFP</option>
                      </select>
                  </InputGroup>
                  <ErrorMessage name="status" component="div" className="text-danger" />
                </Form.Group>
                <Form.Group as={Col} md={ values.status === "In Progress" ? "1" : "3" }/>
                <Form.Group as={Col} md="2">
                  <Form.Label>Requested Date</Form.Label>
                  <InputGroup hasValidation>
                    <DatePicker1 name="requested_date" className="date"/>
                    <Form.Control.Feedback type="invalid">
                      {errors.requested_date}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                { values.status === "RFP" ? 
                  <Form.Group as={Col} md={2}>
                    <Form.Label>Target Date</Form.Label>
                    <Form.Control
                      type="text"
                      name="target_date"
                      placeholder="Target Date"
                      value={values.target_date}
                      onChange={handleChange}
                      isValid={!!touched.target_date && !errors.target_date}
                      isInvalid={!!errors.target_date}
                    />
                    <ErrorMessage name="target_date" component="div" className="text-danger" />
                  </Form.Group>
                : values.status === "In Progress" ?
                  <>
                    <Form.Group as={Col} md="2">
                      <Form.Label>Target Date</Form.Label>
                      <InputGroup hasValidation>
                        <DatePicker1 name="target_date" className="date"/>
                        <Form.Control.Feedback type="invalid">
                          {errors.target_date}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="2">
                      <Form.Label>Resolve Date</Form.Label>
                      <InputGroup hasValidation>
                        <DatePicker1 name="resolve_date" className="date"/>
                        <Form.Control.Feedback type="invalid">
                          {errors.resolve_date}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </>
                  : <></>
                }
              </Row>

            {/* 1 */}
            { 
              values.status === "RFP" || values.status === "In Progress" ?
              <>
            <Row className="mb-5"/>
              <Row className="mb-3">
                <Form.Group as={Col} md={4}>
                  <Form.Label>Type</Form.Label>
                    <select className="form-select" name="type" onChange={handleChange}>
                      <option value="">Select Type</option>
                      {
                        types?.map((obj) => {
                          return(
                            <option value={obj.type_id}>{obj.type_name}</option>
                          )
                        })
                      }
                    </select>
                    <ErrorMessage name="type" component="div" className="text-danger" />
                </Form.Group>

                {
                  values.status === "In Progress" ?
                    <Form.Group as={Col} md="4">
                      <Form.Label>Seating Requirement</Form.Label>
                        <select className="form-select" name="seat" onChange={handleChange}>
                          <option value="">Select Seating Requirement</option>
                          <option value="Dedicated">Dedicated</option>
                          <option value="Dedicated/Sharing">Dedicated/Sharing</option>
                          <option value="Lockdown">Lockdown</option>
                          <option value="Sharing">Sharing</option>
                        </select>
                      <ErrorMessage name="seat" component="div" className="text-danger" />
                    </Form.Group>
                  : <></>
                }

                {
                  values.status === "RFP" ?
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Requestor</Form.Label>
                    <Form.Control
                      type="text"
                      name="requestor"
                      placeholder="Requestor"
                      value={values.requestor}
                      onChange={handleChange}
                      isValid={!!touched.requestor && !errors.requestor}
                      isInvalid={!!errors.requestor}
                    />
                    <ErrorMessage name="requestor" component="div" className="text-danger" />
                  </Form.Group>
                  : <></>
                }

                <Form.Group as={Col} md={4}>
                  <Form.Label>Need</Form.Label>
                  <Form.Control
                    type="number"
                    name="need"
                    placeholder="Need"
                    value={values.need}
                    onChange={handleChange}
                    isValid={!!touched.need && !errors.need}
                    isInvalid={!!errors.need}
                  />
                  <ErrorMessage name="need" component="div" className="text-danger" />
                </Form.Group>
              </Row>

              {/* 2 */}
              <Row className="mb-3">
                <Form.Group as={Col} md={4}>
                  <Form.Label>Site</Form.Label>
                    <select className="form-select" name="site" onChange={handleChange}>
                      <option value="">Select Site</option>
                      {
                        sites?.map((obj) => {
                          return(
                            <option value={obj.site_id}>{obj.site_name}</option>
                          )
                        })
                      }
                    </select>
                  <ErrorMessage name="site" component="div" className="text-danger" />
                </Form.Group>
                <Form.Group as={Col} md={4}>
                  <Form.Label>Client</Form.Label>
                  <select className="form-select" name="client" onChange={handleChange}>
                    <option value="">Select Clients</option>
                    {
                        clients?.filter((obj) => obj.is_active)
                        .map((obj) => {
                            return (
                                <option key={obj.client_id} value={obj.client_id}>
                                    {obj.client_name}
                                </option>
                            );
                        })
                    }
                  </select>
                  <ErrorMessage name="client" component="div" className="text-danger" />
                </Form.Group>
              </Row>

              <Row className="mb-5"/>

              <Row className="mb-3">
                <Form.Group as={Col} md={ values.status === "In Progress" ? "4" : "6" }>
                  <Form.Label>Remarks</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="remarks"
                    rows="4"
                    className='noresize'
                    placeholder="Remarks"
                    value={values.remarks}
                    onChange={handleChange}
                    isValid={touched.remarks && !errors.remarks}
                  />
                </Form.Group>

                {
                  values.status === "In Progress" ?
                  <Form.Group as={Col} md="4">
                    <Form.Label>Solution</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="4" 
                      name="solution"
                      className='noresize'
                      placeholder="Solution"
                      value={values.solution}
                      onChange={handleChange}
                      isValid={touched.solution && !errors.solution}
                    />  
                  </Form.Group>
                  : <></>
                }

                <Form.Group as={Col} md={ values.status === "In Progress" ? "4" : "6" }>
                  <Form.Label>Email Trail</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="email_trail"
                    rows="4"
                    className='noresize'
                    placeholder="Email Trail"
                    value={values.email_trail}
                    onChange={handleChange}
                    isValid={touched.email_trail && !errors.email_trail}
                  />
                </Form.Group>
              </Row>
              </> : <></>
              }
            </Card.Body>
            { values.status === "RFP" || values.status === "In Progress" ? 
                <>
                 <Card.Footer className="text-center">
                      <Button className='btn-primary' size="lg" type="submit">Submit form</Button>
                  </Card.Footer>
                </>
                : <></>
              }
          </Card>
        </Form>
      )}
    </Formik>
  )
}

export default FormikForm