import React, { useEffect, useState } from 'react'
import './Modal.scss'
import Filtering from './DataTable';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Modal from 'react-bootstrap/Modal';
import { EmployeeColumns, employeeItems} from '../../util'
import { getEmployee, clearEmployee } from '../../redux/user/effects';
import { selectEmployeeList } from '../../redux/user/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import AddUserConfirm from './AddUserConfirm';
import { debounce } from 'lodash';

const AddUserModal = (props) => {
  const dispatch = useDispatch();
  const selectUser = useSelector(selectEmployeeList)
  const { refetchUserData } = props;

  const [ idState, setIdState ] = useState([]);
  const [ employeeState, setEmployeeState ] = useState([]);
  const [ showConfirmModal, setShowConfirmModal ] = useState(false);
  const [ selectedRow, setSelectedRow ] = useState('');

  const handleCloseModal = () => setShowConfirmModal(false);

  const searchIni = {
    search: ""
  }

  const callbackSearch = (err) => {
    if (err) {
      const errorMessage = err?.error || err;
      toast.error(errorMessage, {
        position: "bottom-right"
      });
    }
  };

  const delayedEmployee = debounce((values) => {
    dispatch(getEmployee(values, callbackSearch));
  }, 300);

  const searchData = (values) => {
    delayedEmployee(values);
  }

  const searchSchema = yup.object().shape({
    search: yup.string().required("Empty Value is Invalid"),
  });

  const onClose = () => {
    dispatch(clearEmployee());
    props.close();
  };
  

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setShowConfirmModal(true);

    setIdState([
      {
        employee_ident: row.employee_ident
      }
    ])

    setEmployeeState([
      {
        employee_common_name: row.employee_common_name,
        login_id: row.login_id,
        email1: row.email1,
      },
    ])
  }
  
  return(
    <div className='modal'>
      <Modal show={props.show} onHide={onClose} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>Please Select User to Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {/* Search Form */}
          <Formik
            onSubmit={searchData}
            initialValues={searchIni}
            validationSchema={searchSchema}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Form.Group as={Col} md={4}>
                    <Form.Control
                      type="text"
                      name="search"
                      placeholder="Search Employee to Add"
                      value={values.search}
                      onChange={handleChange}
                      isInvalid={!!errors.search}
                    />
                    <ErrorMessage name="search" component="div" className="text-danger" />
                  </Form.Group>
                  <Form.Group as={Col} md={1}>
                    <Button type="submit">Search</Button>
                  </Form.Group>
                </Row>
              </Form>
            )}
          </Formik>

          <br/>

          {/* Filtering Form */}
          <Filtering 
            columns={EmployeeColumns} 
            data={selectUser} 
            filterItems={employeeItems} 
            handleRowClick={handleRowClick}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      <AddUserConfirm
          show={showConfirmModal}
          close={handleCloseModal}
          idState={idState}
          onClose={onClose}
          employeeState={employeeState}
          refetchUserData={refetchUserData}
      />
    </div>
  )
}

export default AddUserModal