import { useState } from 'react';
import './FormSection.css';

import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

export default function FormSection() {
const { register, handleSubmit, formState: { errors } } = useForm()
const [firstName,setFirstName] = useState();
const [lastName,setLastName] = useState();
const [email,setEmail] = useState();
const [phone,setPhone] = useState();

const onSubmit = (data, e) => {
    console.log(data)
    e.preventDefault()
    alert(`
    ${firstName},
    ${lastName},
    ${email},
    ${phone}
    `)
}
return (
<>
    <div className='FormSection'>
        <h2>Leave a Message</h2>
    </div>

    <form method='get' className="py-3 formSec" 
        onSubmit={handleSubmit(onSubmit)}
    >

        <Row>
        <Col>
        <input placeholder='first Name' minLength={5} {...register("firstName", 
            { required: "this is required" })} 
            onChange={(event)=>{setFirstName(event.target.value)}}
        />
        {errors.firstName && <p className='error'>This field is required !</p>}
        </Col>

        <Col>
        <input placeholder='Last Name' minLength={5} {...register("LastName", 
        { required: "this is required" })} 
        onChange={(event)=>{setLastName(event.target.value)}}
        />
        {errors.LastName && <p className='error'>This field is required !</p>}
        </Col>
        </Row>

        <Row>
        <Col>
        <input placeholder='Email Address' minLength={20} {...register("EmailAddress", 
        {required: "this is required"})} 
        onChange={(event)=>{setEmail(event.target.value)}}
        />
        {errors.EmailAddress && <p className='error'>This field is required !</p>}
        </Col>

        <Col>
        <input placeholder='Phone Number' type='number' maxLength={15} {...register("PhoneNumber", 
        {required: "this is required"})} 
        onChange={(event)=>{setPhone(event.target.value)}}
        />
        {errors.PhoneNumber && <p className='error'>This field is required !</p>}
        </Col>
        </Row>

        <textarea rows={7} className='d-block textarea' placeholder='Massage' {...register("Massage")} />

        <input type="submit" className='d-block btn-offer btn-valid' />

    </form>
</>
)
}