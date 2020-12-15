import React from "react";
//Material-ui
import { TextField } from "@material-ui/core";

const LastName = ({ onChange, value }) => (
  <TextField
    onChange={onChange}
    value={value}
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
