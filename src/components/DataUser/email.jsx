import React from 'react' 
//Material-ui
import { TextField } from '@material-ui/core'

const DataEmail = () => {
    return(
        <TextField 
            id="email" 
            label="email" 
            type="email"
            
            //Styles
            variant="outlined"
            margin="normal"
            fullWidth
            
            />
    )
}

export default DataEmail