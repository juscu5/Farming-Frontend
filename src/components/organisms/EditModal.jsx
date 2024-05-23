import React, { useEffect, useState } from 'react'
import './Modal.scss'
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import DatePicker1 from '../atoms/DatePick';
import Modal from 'react-bootstrap/Modal';
import ConfirmModal from '../atoms/ConfirmModal';
import ConfirmModalRFP from '../atoms/ConfirmModalRFP';

import { getTypes, getClients, getSites } from '../../redux/submitform/effects';
import { useDispatch, useSelector } from 'react-redux';
import { selectTypesList, selectClientsList, selectSitesList } from '../../redux/submitform/selectors';

const EditModal = (props) => {
  const [ showConfirm, setShowConfirm ] = useState(false);
  const [ editData, setEditData ] = useState();
  const handleCloseConfirm = () => setShowConfirm(false);
  
    const dispatch = useDispatch();
    const types = useSelector(selectTypesList);
    const clients = useSelector(selectClientsList);
    const sites = useSelector(selectSitesList);
  
    useEffect(() => {
      dispatch(getTypes());
      dispatch(getClients());
      dispatch(getSites());
    }, []);

    const editFormData = (values) => {
      setEditData(values)
    }

    const saveConfirm = "Do you want to save changes?";
  
    const trackingIni = {
      'User': props.reference && props.reference.length > 0 ? props.reference[0]['user_ref'] : "",
      'Tracking ID': props.identity && props.identity.length > 0 ? props.identity[0]['Tracking ID'] : "",
      'Site': props.reference && props.reference.length > 0 ? props.reference[0]['site_ref'] : "",
      'Owner': props.data1 && props.data1.length > 0 ? props.data1[0]['Owner'] : "",
      'Client': props.reference && props.reference.length > 0 ? props.reference[0]['client_ref'] : "",
      'Seating Requirement': props.data && props.data.length > 0 ? props.data[0]['Seating Requirement'] : "",
      'Type': props.reference && props.reference.length > 0 ? props.reference[0]['type_ref'] : "",
      'Status': props.data && props.data.length > 0 ? props.data[0]['Status'] : "",
      'Requested Date': props.data1 && props.data1.length > 0 ? props.data1[0]['Requested Date'] : "",
      'Target Date': props.data1 && props.data1.length > 0 ? props.data1[0]['Target Date'] : "",
      'Resolved Date': props.data1 && props.data1.length > 0 ? props.data1[0]['Resolved Date'] : "",
      'Remarks': props.textArea && props.textArea.length > 0 ? props.textArea[0]['Remarks'] : "",
      'Solution': props.textArea && props.textArea.length > 0 ? props.textArea[0]['Solution'] : "",
      'Email Trail': props.textArea && props.textArea.length > 0 ? props.textArea[0]['Email Trail'] : "",
      'N/A': "",
    };
  
    const rfpIni = {
      'User': props.reference && props.reference.length > 0 ? props.reference[0]['user_ref'] : "",
      'RFP ID': props.identity && props.identity.length > 0 ? props.identity[0]['RFP ID'] : "",
      'Site': props.reference && props.reference.length > 0 ? props.reference[0]['site_ref'] : "",
      'Requestor': props.data1 && props.data1.length > 0 ? props.data1[0]['Requestor'] : "",
      'Client': props.reference && props.reference.length > 0 ? props.reference[0]['client_ref'] : "",
      'Type': props.reference && props.reference.length > 0 ? props.reference[0]['type_ref'] : "",
      'Requested Date': props.data1 && props.data1.length > 0 ? props.data1[0]['Requested Date'] : "",
      'Target Date': props.data1 && props.data1.length > 0 ? props.data1[0]['Target Date'] : "",
      'Remarks': props.textArea && props.textArea.length > 0 ? props.textArea[0]['Remarks'] : "",
      'Email Trail': props.textArea && props.textArea.length > 0 ? props.textArea[0]['Email Trail'] : "",
      'N/A': "",
    };
    
    return(
      <div className='modal'>
        <Modal show={props.showEdit} size='xl'>
          <Formik
            initialValues={props.modalName === "Tracker" ? 
              trackingIni : props.modalName === "RFP" ? rfpIni : ''}
            onSubmit={editFormData}
          >
          {({ handleSubmit, handleChange, values, touched, errors }) =>
          <Form onSubmit={handleSubmit}>
            <Modal.Header>
              <Modal.Title>Edit {props.modalName} ID# {props.modalName === "Tracker" ? props.identity[0]['Tracking ID'] 
                : props.modalName === "RFP" ? props.identity[0]['RFP ID'] : ''}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
    
            {/* ID
            <Row className="mb-3">
              <Col md="3">
                <div className="strong">{props.modalName} ID:</div>
              </Col>
              <Col md="5">
                <div className="strong">
                  
                </div>
              </Col>
            </Row> */}

            <Row className="mb-3">
              <Col md="6">
              {/* Status */}
              {props.modalName === "Tracker" ? 
              <Row className="mb-3">
                  <Col md="5">
                    <div className="strong">Status:</div>
                  </Col>
                  <Col md="6">
                    <div>
                    <Form.Group>
                      <InputGroup>
                          <select className="form-select" name="Status" value={values.Status} onChange={handleChange}>
                            <option value="In Progress">In Progress</option>
                            <option value="Resolve">Resolve</option>
                          </select>
                      </InputGroup>
                    </Form.Group>
                    </div>
                  </Col>
                </Row>
                : <></>}

                { props.modalName === "RFP" ?
                <Row className="mb-3">
                  <Col md="5">
                    <div className="strong">Requestor</div>
                  </Col>
                  <Col md="6">
                    <div>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          name="Requestor"
                          placeholder="Requestor"
                          value={values.Requestor}
                          onChange={handleChange}
                          isValid={!!touched.Requestor && !errors.Requestor}
                          isInvalid={!!errors.Requestor}
                        />
                      </Form.Group>
                    </div>
                  </Col>
                </Row> : ''
                }              

                {/* Client */}
                <Row className="mb-3">
                  <Col md="5">
                    <div className="strong">Client:</div>
                  </Col>
                  <Col md="6">
                    <div>
                    <Form.Group>
                        <select className="form-select" name="Client" value={values.Client} onChange={handleChange}>
                          {
                            clients?.map((obj) => {
                              return(
                                <option value={obj.client_id}>{obj.client_name}</option>
                              )
                            })
                          }
                        </select>
                      </Form.Group>
                    </div>
                  </Col>
                </Row>
      
                {/* Site */}
                <Row className="mb-3">
                  <Col md="5">
                    <div className="strong">Site:</div>
                  </Col>
                  <Col md="6">
                    <div>
                      <Form.Group>
                        <select className="form-select" name="Site" value={values.Site} onChange={handleChange}>
                          {
                            sites?.map((obj) => {
                              return(
                                <option value={obj.site_id}>{obj.site_name}</option>
                              )
                            })
                          }
                        </select>
                      </Form.Group>
                    </div>
                  </Col>
                </Row>
                
                {/* Seat Req */}
                { props.modalName === "Tracker" ?
                <Row className="mb-3">
                  <Col md="5">
                    <div className="strong">Seating Requirement:</div>
                  </Col>
                  <Col md="6  ">
                    <div>
                      <Form.Group>
                          <select className="form-select" name="Seating Requirement" value={values['Seating Requirement']} onChange={handleChange}>
                            <option value="Dedicated">Dedicated</option>
                            <option value="Dedicated/Sharing">Dedicated/Sharing</option>
                            <option value="Lockdown">Lockdown</option>
                            <option value="Sharing">Sharing</option>
                          </select>
                      </Form.Group>
                    </div>
                  </Col>
                </Row>: ''
                }
                </Col>

                <Col md="6">
                {/* Type */}
                <Row className="mb-3">
                  <Col md="5">
                    <div className="strong">Type:</div>
                  </Col>
                  <Col md="6">
                    <div>
                    <Form.Group>
                      <select className="form-select" name="Type" value={values.Type} onChange={handleChange}>
                        {
                          types?.map((obj) => {
                            return(
                              <option value={obj.type_id}>{obj.type_name}</option>
                            )
                          })
                        }
                      </select>
                    </Form.Group>
                    </div>
                  </Col>
                </Row>
      
                {/* Requested Date */}
                <Row className="mb-3">
                  <Col md="5">
                    <div className="strong">Requested Date:</div>
                  </Col>
                  <Col md="6">
                    <div>
                      <Form.Group>
                        <InputGroup>
                          <DatePicker1 name="Requested Date" className="date"/>
                        </InputGroup>
                      </Form.Group>
                    </div>
                  </Col>
                </Row>
      
                {/* Target Date */}
                <Row className="mb-3">
                  <Col md="5">
                    <div className="strong">Target Date:</div>
                  </Col>
                  <Col md="6">
                    <div>
                      <Form.Group>
                        <InputGroup>
                          <DatePicker1 name={props.data1.some(item => item['Target Date'] === 'N/A') ? "N/A" : "Target Date"} className="date"/>
                        </InputGroup>
                      </Form.Group>
                    </div>
                  </Col>
                </Row>
      
                {/* Resolved Date */}
                { props.modalName === "Tracker" ?
                <Row className="mb-3">
                  <Col md="5">
                    <div className="strong">Resolved Date:</div>
                  </Col>
                  <Col md="6">
                    <div>
                      <Form.Group>
                        <InputGroup>
                          <DatePicker1 name={props.data1.some(item => item['Resolved Date'] === 'N/A') ? "N/A" : 'Resolved Date'} className="date"/>
                        </InputGroup>
                      </Form.Group>
                    </div>
                  </Col>
                </Row> : ''
                }                
                </Col>
              </Row>

              <hr/>

              {/* Remarks */}
              <Row className="mb-3">
                <Col md="3">
                  <div className="strong">Remarks:</div>
                </Col>
                <Col md="9">
                  <div>
                    <Form.Group>
                      <Form.Control
                        as="textarea"
                        name="Remarks"
                        rows="4"
                        className='noresize'
                        placeholder="Remarks"
                        value={values.Remarks}
                        onChange={handleChange}
                      />
                      </Form.Group>
                  </div>
                </Col>
              </Row>
              
            {/* Solution */}
            { props.modalName === "Tracker" ?
            <Row className="mb-3">
                <Col md="3">
                  <div className="strong">Solution:</div>
                </Col>
                <Col md="9">
                  <div>
                    <Form.Group>
                      <Form.Control
                        as="textarea"
                        name="Solution"
                        rows="4"
                        className='noresize'
                        placeholder="Remarks"
                        value={values.Solution}
                        onChange={handleChange}
                      />
                      </Form.Group>
                  </div>
                </Col>
              </Row> : ''
              }
    
              {/* Email Trail */}
              <Row className="mb-3">
                <Col md="3">
                  <div className="strong">Email Trail:</div>
                </Col>
                <Col md="9">
                  <div>
                    <Form.Group>
                      <Form.Control
                        as="textarea"
                        name="Email Trail"
                        rows="4"
                        className='noresize'
                        placeholder="Remarks"
                        value={values['Email Trail']}
                        onChange={handleChange}
                      />
                      </Form.Group>
                  </div>
                </Col>
              </Row>
              
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.closeEdit}>
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
        { props.modalName === "Tracker" ? <ConfirmModal editData={editData} modalBody={saveConfirm} showConfirm={showConfirm} closeConfirm={handleCloseConfirm} {...props}/> : '' }
        { props.modalName === "RFP" ? <ConfirmModalRFP editData={editData} modalBody={saveConfirm} showConfirm={showConfirm} closeConfirm={handleCloseConfirm} {...props}/> : '' }
      </div>
    )
}

export default EditModal