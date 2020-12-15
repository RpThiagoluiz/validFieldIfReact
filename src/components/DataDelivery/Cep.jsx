import React from 'react'
//Material-ui
import { TextField } from '@material-ui/core';



const DeliveryCEP = ({value, onChange}) => {
    return (
        <TextField
            value={value}
            onChange={onChange}
            id="cep"
            label="CEP"
            type="number"
            required
            //styles
            variant="outlined"
            margin="normal"
            fullWidth
        />
    )
}
export default DeliveryCEP