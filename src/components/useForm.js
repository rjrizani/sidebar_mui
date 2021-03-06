import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'

export function useForm(initialFValues, validateOnChange=false, validate) {
    
    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    //untuk menampilkan input yang dipilih
    const handleInputChange = e=>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
        if(validateOnChange)
        validate({[name]:value})
    }



    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
    }
}

//spacing(1) = 8
const useStyles = makeStyles(theme =>({
    root: {
        '& .MuiFormControl-root ': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

export function Form(props) {

    const classes = useStyles();
    const {children, ...other} = props;
    return (
        <div className={classes.root} autoComplete="off" {...other}>
             {props.children}
        </div>
    )
}
