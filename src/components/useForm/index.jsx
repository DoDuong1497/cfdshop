import React, { useState } from 'react'

const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const passRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export default function useForm() {

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

    const validate = () => {
        let errorObj = {}
        if(Object.keys(rules).length > 0){
        for(let i in rules){
                const r = rules[i]
    
                if(r.required && !form[i]){
                    errorObj[i] = `${i} không được bỏ trống`
                    continue
                }

                if(r.pattern){
                    let pattern = r.pattern
                    if(pattern === 'email'){
                        pattern = emailRegexp
                    }

                    if(!pattern.test(form[i])){
                        errorObj[i] = `${i} không đúng định dạng`
                    }
                }
            }
        }
        setError(errorObj)
        return errorObj

    }

    const handleSubmit = (submitFunc)=>{
        return (ev) =>{
            ev.preventDefault()
            const errorObj = validate()
            if(Object.keys(errorObj).length === 0){
                submitFunc(form)
            }
    } 
    }

    return {
        register,
        handleSubmit,
        error,
        form,
        setForm,
        validate
    }
}


