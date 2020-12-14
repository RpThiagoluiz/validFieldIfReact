import React from "react";
//Material-ui
import { TextField } from "@material-ui/core";

const LastName = ({ onChange, value,helperText,error,onBlur }) => (
  <TextField
    onChange={onChange}
    value={value}
    id="sobrenome"
    label="Sobrenome"
    variant="outlined"
    fullWidth
    margin="normal"
    helperText={helperText}
    error={error}
    onBlur={onBlur}
  />
);
export default LastName;
