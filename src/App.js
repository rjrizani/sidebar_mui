import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Drawer from "./Drawer"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
})

export default function App() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <BrowserRouter>
      <Drawer/>
        <Switch>
          <Route exact from="/" render={props => <Home {...props}/>} />
          <Route exact path="/contact" render={props => <Contact {...props}/>} />
          <Route exact path="/about" render={props => <About {...props}/>} /> 
        </Switch>
      </BrowserRouter>
    </div>
  )
}
