import React, { useState } from 'react'

const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const passRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
export default function UseForm() {

    const [form, setForm] = useState({})

    const [error, setError] = useState({})

    const rules = {}

    const _onChange = (name) => (ev) =>{
        ev.preventDefault()
        setForm({...form,
            [name] : ev.currentTarget.value})
    }

    const register = (name, rule = {}) => {
        rules[name] = rule
        return{
            name,
            onChange : _onChange(name),
            value : form[name]
        }
    }

    // const validate = () => {
    //     let errorObj = {}

    //     setError(errorObj)

    // }

    return {
        
    }
}


