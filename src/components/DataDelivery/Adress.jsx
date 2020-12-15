import React from 'react' 
//Material-ui
import { TextField } from '@material-ui/core'

const Adress = ({value, onChange}) => {
    return (
        <TextField
            value={value}
            onChange={onChange}
            
            id="adress"
            label="Endereco"
            type="text"
            required
            //styles
            variant="outlined"
            margin="normal"
            fullWidth
        />
    )
}
export default Adress