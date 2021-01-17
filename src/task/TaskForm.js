import React from 'react'
import Controls from "../components/controls/Controls";
import { useForm, Form} from "../components/useForm";
import { DropzoneAreaBase } from 'material-ui-dropzone';

const initialFvalues = {
    tanggal: new Date(),
    jam: new Date(),
    pekerjaan: '',
    laporan:[],
    upload:[]
}

export default function TaskForm() {
    return (
        <>
        <h1>Task</h1>
        <Form>
            <h1>Add Task</h1>
            <Controls.DatePicker
                name="tanggal"
                label="Tanggal"
                value={initialFvalues.tanggal}
                //onChange={handleInputChange}
            />  
            <Controls.TimePickers 
                name="jam"
                label="Jam"
                value={initialFvalues.jam}
            />
            <Controls.TextWork
                name="pekerjaan"
                label="Pekerjaan"
                value={initialFvalues.pekerjaan}
            />
            <DropzoneAreaBase
                onAdd={(fileObjs) => console.log('Added Files:', fileObjs)}
                onDelete={(fileObj) => console.log('Removed File:', fileObj)}
                onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
            />
        </Form>
        </>
    )
}
