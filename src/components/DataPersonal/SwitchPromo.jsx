import React from "react"

//Material-ui
import { Switch, FormControlLabel } from "@material-ui/core"

const SwitchPromo = ({onChange,checked}) => {
  return (
    <FormControlLabel
      label="Promo"
      control={
        <Switch
          checked={checked}
          onChange={onChange}
          name="promocoes"
          color="primary"
        />
      }
    />
  )
}

export default SwitchPromo
