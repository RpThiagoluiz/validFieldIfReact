import React from 'react' 

//Material-ui
import { TextField } from '@material-ui/core';

const DataConfirmPass = ({value, onChange,error,helperText,onBlur}) => {
    return(
        <TextField 
        id="Confirm-passaword" 
        label="Confirmar senha" 
        type="password"
        required

        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
        onBlur={onBlur}
        
        variant="outlined"
        margin="normal"
        fullWidth
        />
    )
}
export default DataConfirmPass