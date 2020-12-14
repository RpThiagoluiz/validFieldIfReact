import React from 'react'
//Material-ui
import { TextField } from '@material-ui/core';



const DeliveryCEP = () => {
    return (
        <TextField
            id="cep"
            label="CEP"
            type="number"
            variant="outlined"
            margin="normal"
            fullWidth
        />
    )
}
export default DeliveryCEP