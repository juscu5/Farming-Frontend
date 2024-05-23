import React from 'react'
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './DatePick.scss';

const DatePick = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      className='date'
      placeholderText="mm/dd/yyyy"
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
        setFieldValue(field.name, val);
      }}
    />
  );
}

export default DatePick