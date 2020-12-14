import React from 'react' 
//Material-ui
import { TextField } from '@material-ui/core';

const DataPass = () => {
    return (
        <>
        <TextField 
            id="passaword" 
            label="senha" 
            type="password"
            
            variant="outlined"
            margin="normal"
            fullWidth
            />

            <TextField 
            id="Confirm-passaword" 
            label="Confirmar senha" 
            type="password"
            
            variant="outlined"
            margin="normal"
            fullWidth
            />
        </>
    )
}
export default DataPass