import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { PurpleTextField } from './styles';

interface InputProps extends Omit<TextFieldProps, 'value' | 'onChange'> {
  label: string;
  name: string;
  control: Control<FieldValues, any>;
  required?: boolean;
  value?: string; // New prop for initial value
}

export const Input = (props: InputProps) => {
  const { ...rest } = props;
  return (
    <>
      <Controller
        name={props.name}
        control={props.control}
        defaultValue={props.value || ''} // Use the value prop as defaultValue
        rules={props.required ? { required: `${props.label} required` } : {}}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <PurpleTextField
            {...rest}
            label={props.label}
            margin="dense"
            autoComplete="off"
            variant="outlined"
            size="small"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
    </>
  );
};

Input.displayName = 'Input';
