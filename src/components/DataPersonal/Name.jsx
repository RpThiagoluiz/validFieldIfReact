import React from 'react'
//Material-ui
import { TextField } from '@material-ui/core'



const Name = ({onChange, value,error, helperText,onBlur}) => {
  
  

  return(
    <TextField
    value={value}
    onChange={onChange}
    error={error}
    helperText={helperText}
    onBlur={onBlur}
    
    id="name"
    label="Nome"
    required
    //styles
    variant="outlined"
    fullWidth
    margin="normal"
    //onlyLetters -notWorking
    inputProps={{pattern: "[a-z]{1,15}" }}
  />
  )
}
  
    


export default Name