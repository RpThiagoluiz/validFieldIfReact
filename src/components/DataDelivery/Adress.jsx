import React from 'react' 
//Material-ui
import { TextField } from '@material-ui/core'

const Adress = () => {
    return (
        <TextField 
            id="adress"
            label="Endereco"
            type="text"
            variant="outlined"
            margin="normal"
            fullWidth
        />
    )
}
export default Adress