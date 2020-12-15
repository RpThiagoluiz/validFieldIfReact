import React from 'react' 
//Material-ui
import { TextField } from '@material-ui/core'

const DataEmail = ({value,onChange}) => {
    return(
        <TextField 
            id="email" 
            label="email" 
            type="email"
            required
            value={value}
            onChange={onChange}
            
            //Styles
            variant="outlined"
            margin="normal"
            fullWidth
            
            />
    )
}

export default DataEmail