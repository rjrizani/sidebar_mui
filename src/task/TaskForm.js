import React,{useEffect} from 'react'
import Controls from "../components/controls/Controls";
import { useForm, Form} from "../components/useForm";
import { DropzoneAreaBase } from 'material-ui-dropzone';
import HeadTask from "./HeadTask";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        flexDirection: "row",
    }
}) 

const initialFValues = {
    tanggal: new Date(),
    jam: '',
    pekerjaan: '',
    upload:'',
}

export default function TaskForm(props) {

    const {add, recordForEdit} = props;

    const  classes = useStyles()

    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if ('pekerjaan' in fieldValues)
        temp.pekerjaan = fieldValues.pekerjaan.length != 0 ?"":"this field is required."
        setErrors({
            ...temp
        })
        if (fieldValues == values)
        //return booland value
        return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
    }=useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            add(values);
        }
    }

    useEffect(() => {
        if(recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    return (
        <div className={classes.container} >
        
        <div onSubmit={handleSubmit} >
            <HeadTask/>
            <Controls.DatePicker
                name="tanggal"
                label="Tanggal"
                value={values.tanggal}
                onChange={handleInputChange}
            />  
            <Controls.TimePickers 
                name="jam"
                label="Jam"
                value={values.jam}
                onChange={handleInputChange}
            />
            <Controls.TextWork
                name="pekerjaan"
                label="Pekerjaan"
                value={values.pekerjaan}
                onChange={handleInputChange}
            />
            <DropzoneAreaBase
                onAdd={(fileObjs) => console.log('Added Files:', fileObjs)}
                onDelete={(fileObj) => console.log('Removed File:', fileObj)}
                onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
            />
   
            <Controls.Button
                type="submit"
                text="Tambahkan" 
            />
 
        </div>
        </div>
    )
}
