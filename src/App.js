import Dashboard from "./Dashboard";
import TaskBoard from "./TaskBoard";
import Drawer from "./Drawer";
import Bar from "./Bar";
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
          <Route exact from="/" render={props => <Dashboard {...props}/>} />
          <Route exact path="/task" render={props => <TaskBoard {...props}/>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
