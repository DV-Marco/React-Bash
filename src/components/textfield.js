import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1)
  }
}));

export default function MultilineTextFields(props) {
  const classes = useStyles();

  return (
    <div>
      <Input
        inputRef={props.reference}
        onChange={props.change}
        className={classes.root}
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
      />
    </div>
  );
}
