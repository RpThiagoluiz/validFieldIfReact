import React from 'react'
//Material-ui
import { TextField } from '@material-ui/core'


const DeliveryUf = ({value, onChange}) => {
    return(
        <TextField 
            value={value}
            onChange={onChange}
            id="uf"
            label="Estado"
            type="text"
            required
            //styles
            variant="outlined"
            margin="normal"
        />
    )
}

export default DeliveryUf