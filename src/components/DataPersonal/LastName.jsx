import React from "react";
//Material-ui
import { TextField } from "@material-ui/core";

const LastName = ({ onChange, value,helperText,error,onBlur }) => (
  <TextField
    onChange={onChange}
    value={value}
    helperText={helperText}
    error={error}
    onBlur={onBlur}
    id="sobrenome"
    label="Sobrenome"
    required
    //styles
    variant="outlined"
    fullWidth
    margin="normal"
  />
);
export default LastName;
