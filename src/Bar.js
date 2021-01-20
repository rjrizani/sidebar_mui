import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: "blue",

  }
}));

function Bar() {
  const classes = useStyles();

  return (
    <div className={classes.bar}>
      <AppBar position="static">
          <Toolbar>
            <Typography></Typography>
          </Toolbar>
      </AppBar>
    </div>
  );
}

export default Bar;