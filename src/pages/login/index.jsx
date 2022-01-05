import React from 'react'
import Button from '../../components/button'
import Input from '../../components/input'
import useForm from '../../components/useForm'
import AuthService from '../../services/AuthService'

export default function Login() {
    const {register, error, validate, form} = useForm()

    const submit = (ev) => {
        ev.preventDefault()
        validate()
        AuthService.login(form)
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
