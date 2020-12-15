import React from 'react' 

//Material-ui
import { TextField } from '@material-ui/core'

const AdressNumber = ({value, onChange})=> {
    return(
        <TextField 
        value={value}
        onChange={onChange}
        id="adressNum"
        label="Numero"
        type="number"
        required
        //styles
        variant="outlined"
        margin="normal"
        fullWidth
        />
    )
}
export default AdressNumber