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
  card1: {backgroundColor: "#4791db"},
  card2: {backgroundColor: "#ffcd38"},
  card3: {backgroundColor: "#4caf50"},
  card4: {backgroundColor: "#ff4569"},
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
        <Card name="Do" task="15" className={classes.card1} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card name="Progress" task="20" className={classes.card2}/>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card name="Done" task="250" className={classes.card3}/>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card name="Cancel" task="50" className={classes.card4}/>
      </Grid>
    </Grid>
  );
}
