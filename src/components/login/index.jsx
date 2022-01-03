import React from 'react'
import Button from '../button'
import Input from '../input'
import useForm from '../useForm'

export default function Login() {
    const {register, error, validate, form} = useForm()
    const submit = (ev) => {
        ev.preventDefault()
        validate()
    }
    return (
        <div className='container'>
            <form>
            <Input valid={register('username', {required : true})} error={error.username} placeholder='username' label='username' size='medium'/>
            <Input valid={register('password', {required : true})} error={error.password} placeholder='password' label='password' size='medium'/>
            <Button onclick={submit} color='colored'>Login</Button>
            </form>
        </div>
    )
}
