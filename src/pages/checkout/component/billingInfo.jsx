import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import Button from '../../../components/button'
import Checkbox from '../../../components/checkbox'
import Input from '../../../components/input'
import Select from '../../../components/select'
import useForm from '../../../components/useForm'
import BillingHeader from './billingHeader'
import './billingInfo.scss'

export const BillingInfo = forwardRef((props, ref) => {
    
    const {register, error, validate, form} = useForm()
    useImperativeHandle(ref, () => {
        return {
            validate,
            form
        }
    }, [validate, form])
    
    return (
        <div className='billing__info mr-bt'>
            <BillingHeader header='Billing Info' desc='Please enter your billing info' paging='1'/>
            <form>
            <div className="billing__info-wrap">
                <div className="billing__info-left">
                    <Input valid={register('firstname', {required : true})} error={error.firstname} label='First Name' placeholder='First name' size='medium'/>
                    <Input valid={register('email', {required : true, pattern : 'email'})} error={error.email} label='Email address' placeholder='Email address' size='medium'/>
                    <Input valid={register('address', {required : true})} error={error.address} label='Address' placeholder='Address' size='medium'/>
                    <Select label='State / Country' placeholder='State / Country'/>
                    <Checkbox text='Ship to a different address?' />
                </div>
                <div className="billing__info-right">
                    <Input valid={register('lastname', {required : true})} error={error.lastname} label='Last Name' placeholder='Last name' size='medium'/>
                    <Input valid={register('phone', {required : true})} error={error.phone} label='Phone number' placeholder='Phone number' size='medium'/>
                    <Input valid={register('city', {required : true})} error={error.city} label='Town / City' placeholder='Town city' size='medium'/>
                    <Input valid={register('zip', {required : true})} error={error.zip} label='ZIP/Postal code' placeholder='Postal code or ZIP' size='medium'/>
                </div>
            </div>
            </form>

        </div>
    )
})

// export default function BillingInfo() {
//     const {register, handleSubmit, error, form, setForm} = useForm()
    
//     return (
//         <div className='billing__info mr-bt'>
//             <BillingHeader header='Billing Info' desc='Please enter your billing info' paging='1'/>
//             <form>
//             <div className="billing__info-wrap">
//                 <div className="billing__info-left">
//                     <Input valid={register('firstname', {required : true})} error={error.firstname} label='First Name' placeholder='First name' size='medium'/>
//                     <Input valid={register('email', {required : true, pattern : 'email'})} error={error.email} label='Email address' placeholder='Email address' size='medium'/>
//                     <Input valid={register('address', {required : true})} error={error.address} label='Address' placeholder='Address' size='medium'/>
//                     <Select label='State / Country' placeholder='State / Country'/>
//                     <Checkbox text='Ship to a different address?' />
//                 </div>
//                 <div className="billing__info-right">
//                     <Input label='Last Name' placeholder='Last name' size='medium'/>
//                     <Input label='Phone number' placeholder='Phone number' size='medium'/>
//                     <Input label='Town / City' placeholder='Town city' size='medium'/>
//                     <Input label='ZIP/Postal code' placeholder='Postal code or ZIP' size='medium'/>
//                 </div>
//             </div>
//             <Button color='colored' size='small'>Submit</Button>
//             </form>

//         </div>
//     )
// }
