import React, { Component } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  withStyles
} from "@material-ui/core";
import data from "./../assets/data.json";
import "./../styles/datos.css";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const useStyles = (theme) => ({
  flota: {
    float: theme.left
  }
});

export class Datos extends Component {
  hola = () => {
    console.log("hola mundo");
  };

  render() {
    return (
      <div class="list" id="container">
        <h1 className="tipografia">
          {this.props.title}
          <p>&nbsp;</p>
          <Fab
            className="icons"
            size="small"
            color="primary"
            aria-label="edit"
            onClick={this.props.click}
          >
            <EditIcon />
          </Fab>
        </h1>
        <Card>
          <CardContent>
            <Typography variant="h6" component="h2">
              {this.props.content}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Datos;
