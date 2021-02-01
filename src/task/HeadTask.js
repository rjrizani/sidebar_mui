import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    root: {
        display: "flex",
        position: "static",
        alignItems: "center",
        marginTop: "2%",
        marginBottom: "2%",
        paddingTop: "1%",
        paddingBottom:" 2%",
      },

})

export default function HeadTask() {
    const classes = useStyles();
    return (
            <AppBar className={classes.root}>

                    <Typography variant="h6" component="div">
                        Add Task
                    </Typography>

            </AppBar>

    )
}
