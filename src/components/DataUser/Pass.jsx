import React from 'react' 
//Material-ui
import { TextField } from '@material-ui/core';

const DataPass = ({value, onChange}) => {
    return (
        <>
        <TextField 
            id="passaword" 
            label="senha" 
            type="password"
            required

            value={value}
            onChange={onChange}

            variant="outlined"
            margin="normal"
            fullWidth
            />

           
        </>
    )
}
export default DataPass