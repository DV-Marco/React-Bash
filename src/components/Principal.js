import React, { Component } from "react";
import Datos from "./Datos";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import data from "./../assets/data.json";
import { GridList, withStyles, Button } from "@material-ui/core";
import "./../styles/personas.css";

const styles = (theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
});

export class Personas extends Component {
  state = {
    name: "Marcos",
    nombre: []
  };

  myArray = [
    {
      nombre: "Marcos"
    },
    {
      nombre: "Diana"
    },
    {
      nombre: "Richard"
    }
  ];

  datos = (event) => {
    this.setState({
      nombre: event.target.value
    });
    data.pagina.map((title) => (title.titulo = this.state.nombre));
  };

  change = () => {
    this.setState({
      nombre: this.nombreRef.current.value
    });
    console.log(this.state.nombre);
  };

  nombreRef = React.createRef();

  changeInput = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div id="root">
        <h1>{this.state.nombre}</h1>
        <h1>{this.state.name}</h1>
        <Button color="primary" variant="outlined" onClick={this.arraysEj}>
          Click Me
        </Button>
        <Input
          onChange={this.datos}
          inputRef={this.nombreRef}
          className={classes.margin}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
        <br />
        <Button
          className={classes.margin}
          variant="contained"
          color="secondary"
          onClick={this.change}
        >
          Cambiar
        </Button>
        <GridList>
          {data.pagina.map((lenguajes) => (
            <Datos
              className={classes.margin}
              key={lenguajes.id}
              title={lenguajes.titulo}
              content={lenguajes.contenido}
              click={this.datos}
            />
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(Personas);
