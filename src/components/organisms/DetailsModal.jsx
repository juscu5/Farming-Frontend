import React, { useState } from 'react'
import './Modal.scss';
import { ListGroup, Row, Col } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditModal from './EditModal';
import ConfirmModal from '../atoms/ConfirmModal';
import ConfirmDelete from '../atoms/ConfirmDelete';
import ConfirmDeleteRFP from '../atoms/ConfirmDeleteRFP';

const DetailsModal = (props) => {
  const [ showModal, setShowModal ] = useState(false);
  const [ showConfirm, setShowConfirm ] = useState(false);
  const handleCloseConfirm = () => setShowConfirm(false);
  const handleCloseModal = () => setShowModal(false);
  
  return (
    <div className='modal'>
      <Modal show={props.show} onHide={props.close} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>{props.modalName} Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
          {props.identity?.map((obj, idx) => (
            <>
              {Object.keys(obj).map((key) => (
                <Row className="mb-3">
                  <Col md="2">
                    <div className="strong">{key}:</div>
                  </Col>
                  <Col md="5">
                    <div className="strong">{obj[key]}</div>
                  </Col>
                </Row>
              ))}
            </>
          ))}
          <hr/>
          <Row className="mb-3">
            <Col md="5">
            {props.data?.map((obj, idx) => (
              <>
                {Object.keys(obj).map((key) => (
                  <Row className="mb-3">
                    <Col md="5">
                      <div className="strong">{key}:</div>
                    </Col>
                    <Col md="7">
                      <div>{obj[key]}</div>
                    </Col>
                  </Row>
                ))}
              </>
            ))}
            </Col>
            <Col md="5">
            {props.data1?.map((obj, idx) => (
              <>
                {Object.keys(obj).map((key) => (
                  <Row className="mb-3">
                    <Col md="5">
                      <div className="strong">{key}:</div>
                    </Col>
                    <Col md="7">
                      <div>{obj[key]}</div>
                    </Col>
                  </Row>
                ))}
              </>
            ))}
            </Col>
          </Row>
          <hr/>
          <Row className="mb-3">
            {props.textArea?.map((obj, idx) => (
              <>
                {Object.keys(obj).map((key) => (
                  <Col md={props.modalName === "RFP" ? "5" : "4"}>
                    <Col md="10">
                      <div className="strong">{key}:</div>
                    </Col>
                    <Col md="10">
                      <div>{obj[key]}</div>
                    </Col>
                  </Col>
                ))}
              </>
            ))}
          </Row>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={()=>setShowConfirm(true)}>
            Delete
          </Button>
          <Button className='btn-color' variant="primary" onClick={()=>setShowModal(true)}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
      <EditModal showEdit={showModal} closeEdit={handleCloseModal} {...props}/>
      <ConfirmModal showConfirm={showConfirm} closeConfirm={handleCloseConfirm} {...props}/>
      { props.modalName === "Tracker" ? <ConfirmDelete showConfirm={showConfirm} closeConfirm={handleCloseConfirm} {...props}/> : ''}
      { props.modalName === "RFP" ? <ConfirmDeleteRFP showConfirm={showConfirm} closeConfirm={handleCloseConfirm} {...props}/> : ''}
    </div>
  )
}

export default DetailsModal