import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function TextWork(props) {
    const {name, label, value, onChange} = props;
    return (
        <TextField 
            type="text"
            name= {name}
            label= {label}
            value= {value}
            onChange= {onChange}
        />
    )
}
