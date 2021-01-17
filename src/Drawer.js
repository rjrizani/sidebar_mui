import React from 'react'
import {Drawer as MUIDrawer,
        ListItem,
        List,
        ListItemIcon,
        ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "190px"
  }
})

const Drawer = (props) => {
    const {history} = props;
    const classes = useStyles();
    const itemList = [{ text: "Dashboard", 
                        icon: <InboxIcon/>,
                        onClick: ()=> history.push('/')
                      }, 
                      {
                        text: "Task", 
                        icon: <MailIcon/>,
                        onClick: ()=> history.push("/task")}
                    ];
    return (
        <MUIDrawer variant="permanent" className={classes.drawer}>
            <List>
            {itemList.map((item, index) => {
              const {text, icon, onClick} = item; 
              return (
                <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
               {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary={text} />
                </ListItem>
            )})}
            </List>
        </MUIDrawer>
    )
}

export default withRouter(Drawer)



