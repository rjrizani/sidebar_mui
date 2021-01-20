import React from 'react'
import ListCard from './components/ListCard'
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import { Grid } from "@material-ui/core";

const theme = createMuiTheme();

theme.typography.h5 = {
  fontSize: '1.2rem',
  padding: "5px",
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

export default function Dashboard() {
    return (
        <Grid
          container
          spacing={4}
          justify="center"
        >
        <Grid item xs={12} > 
            <ThemeProvider theme={theme}>
                <Typography variant="h5" color="textPrimary">
                    Dashboard
                </Typography>
            </ThemeProvider>
        </Grid>
        <Grid item xs={12} > 
            <ListCard/>
        </Grid>
        <Grid item xs={12} sm={6} >
            <BarChart/>
        </Grid>
        <Grid item xs={12} sm={6} >
            <PieChart/>
        </Grid>
      </Grid>
    )
}
