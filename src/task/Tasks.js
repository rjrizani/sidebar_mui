import React, {useState} from 'react'
import TaskForm from "./TaskForm";
import useTable from "../components/useTable"
import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
import Controls from "../components/controls/Controls";
import * as taskService from "../services/taskService";
import AddIcon from '@material-ui/icons/Add';
import Notification from "../components/Notification";

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    newButton: {
        position:'absolute',
        right:'10px'
    }
}))

const headCells = [
    {id: 'tanggal', label: 'Tanggal'},
    {id: 'jam', label: 'Jam'},
    {id: 'pekerjaan', label: 'Pekerjaan'},
    {id: 'upload', label: 'Upload'},
    {id: 'actions', label: 'Actions', disableSorting: true}
]

export default function Tasks() {
    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(taskService.getAllTask())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [notify, setNotify] = useState({isOpen:false, message:'', type:''})
       //distruction component/index
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    }=useTable(records, headCells, filterFn);

    const add = (task) => {
        if (task.id == 0)
            taskService.insertTask(task)
        else
            taskService.updateTask(task)
    
        setRecordForEdit(null)
 //       setOpenPopup(false)
        setRecords(taskService.getAllTask())
        setNotify({
            isOpen: true,
            message: 'Submitted Successfully',
            type: 'success'
        })
    }

    return (
        <Paper className={classes.pageContent}>
            <TaskForm
                recordForEdit={recordForEdit}
                add={add}
            />
        <Toolbar>
            <Controls.Button 
            text = "Add New"
            variant = "outlined"
            startIcon = {<AddIcon/>}
            className = {classes.newButton}
           // onClick = {()=> {setOpenPopup(true); setRecordForEdit(null);}}
            />
        </Toolbar>
        <TblContainer>
        <TblHead />
            <TableBody>
                  {
                //    recordsAfterPagingAndSorting().map(item => (
                //         <TableRow key={item.id}>
                //             <TableCell>dd{item.fullName}</TableCell>
                //             <TableCell>dd{item.email}</TableCell>
                //             <TableCell>{item.mobile}</TableCell>
                //             <TableCell>{item.department}</TableCell>
   
                //         </TableRow>
                //     ))
                 }
            </TableBody>
        </TblContainer>     
        </Paper>
    )
}
