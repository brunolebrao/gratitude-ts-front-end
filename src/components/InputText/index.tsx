import React from 'react';
import {FieldProps} from 'formik';
import {TextField} from '@material-ui/core';
import {TextFieldProps} from '@material-ui/core/TextField';

export const InputText: React.FC<FieldProps & TextFieldProps> = ({
  placeholder,
  type,
  label,
  field,
  form: {touched, errors},
}) => {
  return (
    <>
      <TextField
        type={type}
        label={label}
        placeholder={placeholder}
        variant="outlined"
        {...field}
      />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </>
  );
};
