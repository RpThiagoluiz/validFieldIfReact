import React from 'react' 

//Material-ui
import { TextField } from '@material-ui/core';

const ConfirmPass = ({value, onChange}) => {
    return(
        <TextField 
        id="Confirm-passaword" 
        label="Confirmar senha" 
        type="password"
        required

        value={value}
        onChange={onChange}
        
        variant="outlined"
        margin="normal"
        fullWidth
        />
    )
}
export default ConfirmPass