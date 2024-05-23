import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePick.scss';

const DatePick = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  const renderYearContent = (year) => {
    const tooltipText = `Tooltip for year: ${year}`;
    return <span title={tooltipText}>{year}</span>;
  };

  const handleKeyDown = (event) => {
    event.preventDefault();
  };

  return (
    <DatePicker
      {...field}
      {...props}
      className='date'
      placeholderText="Enter Year"
      renderYearContent={renderYearContent}
      showYearPicker
      dateFormat="yyyy"
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
        setFieldValue(field.name, val);
      }}
      onKeyDown={handleKeyDown} // Add the onKeyDown event handler to prevent keyboard input
    />
  );
};

export default DatePick;
