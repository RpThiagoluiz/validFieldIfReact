import React from 'react'

//Material-ui
import { Switch, FormControlLabel } from '@material-ui/core'



const SwitchNews = ({onChange,checked}) => {
    return (
        <FormControlLabel
        label="novidades"
        control={<Switch 
          checked={checked}
          onChange={onChange} 
          name="novidades" 
          color="primary" 
        />}
      />
    )
}

export default SwitchNews