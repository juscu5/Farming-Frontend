import React from 'react'
import FormikForm from '../../components/organisms/FormikForm'
import { useDispatch, useSelector } from 'react-redux';
import { addForm } from '../../redux/submitform/effects';

const SubmitForm = () => {

  const dispatch = useDispatch();

  const postData = (form_data) => {
    dispatch(addForm(form_data))
  }

  return (
    <div className='sub-form'>
      <FormikForm formdata={postData}/>
    </div>
  )
}

export default SubmitForm