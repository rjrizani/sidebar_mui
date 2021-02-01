import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
});

export default function SimpleCard(props) {
  const {name, task, className, ...others} = props; 
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={clsx(classes.root, className)} {...others}>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
         {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {task} Task
        </Typography>
      </CardContent>
    </Card>
  );
}
