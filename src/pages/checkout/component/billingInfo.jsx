import React from 'react'
import Button from '../../../components/button'
import Checkbox from '../../../components/checkbox'
import Input from '../../../components/input'
import Select from '../../../components/select'
import useForm from '../../../components/useForm'
import UseForm from '../../../components/useForm'
import BillingHeader from './billingHeader'
import './billingInfo.scss'

export default function BillingInfo() {
    const {register, handleSubmit, error, form, setForm} = useForm()
    handleSubmit()
    const submit = () =>{
        console.log('aaa')
    }
    return (
        <div className='billing__info mr-bt'>
            <BillingHeader header='Billing Info' desc='Please enter your billing info' paging='1'/>
            <form onSubmit={handleSubmit(submit)}>
            <div className="billing__info-wrap">
                <div className="billing__info-left">
                    <Input valid={register('firstname', {required : true})} label='First Name' placeholder='First name' size='medium'/>
                    <Input label='Email address' placeholder='Email address' size='medium'/>
                    <Input label='Address' placeholder='Address' size='medium'/>
                    <Select label='State / Country' placeholder='State / Country'/>
                    <Checkbox text='Ship to a different address?' />
                </div>
                <div className="billing__info-right">
                    <Input label='Last Name' placeholder='Last name' size='medium'/>
                    <Input label='Phone number' placeholder='Phone number' size='medium'/>
                    <Input label='Town / City' placeholder='Town city' size='medium'/>
                    <Input label='ZIP/Postal code' placeholder='Postal code or ZIP' size='medium'/>
                </div>
            </div>
            <Button type='submit' color='colored' size='small'>Submit</Button>
            </form>

        </div>
    )
}
