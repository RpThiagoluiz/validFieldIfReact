import React from 'react' 
//Material-ui
import { TextField } from '@material-ui/core';

const DataPass = ({value, onChange,error,helperText,onBlur}) => {
    return (
        <>
        <TextField 
            id="passaword" 
            label="senha" 
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

           
        </>
    )
}
export default DataPass