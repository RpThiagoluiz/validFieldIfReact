import React from 'react'
//Material-Ui
import { TextField } from '@material-ui/core';

const Cpf = ({onChange,value,error,helperText,onBlur}) => (
    <TextField

    onChange={onChange}
    value={value}
    error={error}
    helperText={helperText}
    onBlur={onBlur}
    id="cpf"
    label="CPF"
    variant="outlined"
    fullWidth
    margin="normal"
  />
)
export default Cpf