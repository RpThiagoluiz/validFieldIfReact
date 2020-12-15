import React from 'react' 
//material-ui
import { TextField } from '@material-ui/core';

const DeliveryCity = ({value, onChange}) => {
    return(
        <TextField 
            value={value}
            onChange={onChange}
            id="city"
            label="Cidade"
            type="text"
            required
            //styles
            variant="outlined"
            margin="normal"
        />

    )
}
export default DeliveryCity