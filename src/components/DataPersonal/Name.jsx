import React from 'react'
//Material-ui
import { TextField } from '@material-ui/core'



const Name = ({onChange, value,helperText,error,onBlur}) => {
  
  

  return(
    <TextField
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    helperText={helperText}
    error={error}
    id="nome"
    label="Nome"
    required
    //styles
    variant="outlined"
    fullWidth
    margin="normal"
    //onlyLetters
    inputProps={{pattern: "[a-z]{1,15}" }}
  />
  )
}
  
    


export default Name