import React from 'react' 

//Material-ui
import { TextField } from '@material-ui/core'

const AdressNumber = ()=> {
    return(
        <TextField 
        id="adressNum"
        label="Numero"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
        />
    )
}
export default AdressNumber