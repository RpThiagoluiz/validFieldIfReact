import React from 'react'
//Material-ui
import { TextField } from '@material-ui/core';




const Name = ({onChange, value,helperText,error,onBlur}) => {
  

  return(
    <TextField
    value={value}
    onChange={onChange}
    id="nome"
    label="Nome"
    variant="outlined"
    fullWidth
    margin="normal"
    onBlur={onBlur}
    helperText={helperText}
    error={error}
  />
  )
}
  
    


export default Name