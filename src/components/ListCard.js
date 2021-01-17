import React from "react";
//import "./styles.css";
import Card from "./Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px"
  },
  textColor: {
    color: "white"
  },
 // card1: {backgroundColor: "#4791db","#ffeb3b","#76ff03","#ff1744"}
});

export default function ListCard() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >
      <Grid item xs={12} sm={6} md={3}>
        <Card name="Do" task="15"/>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card name="Progress" task="20"/>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card name="Done" task="250" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card name="Cancel" task="50"/>
      </Grid>
    </Grid>
  );
}
