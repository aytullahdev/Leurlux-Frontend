import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })
    const { firstName, lastName, email, phone, message } = contact;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = () => {
        // console.log(contact)

        if (!message || !firstName || !lastName || !phone || !email) {
            toast.error("Please fillup the form correctly");
            return
        }
        const data = {
            "data": {
                "name": `${firstName} ${lastName}`,
                "email": email,
                "phone": phone,
                "request": message,

            }
        }
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/customers-requests`;
        const token = `${process.env.NEXT_PUBLIC_API_TOKEN}`;
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios.post(apiUrl, data, { headers })
            .then((response) => {
                // Handle the response data here
                // console.log(response.data)
                if (response.data.data.id) {
                    toast.success("Request Submited")
                    setContact({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        message: ''
                    })

                } else {
                    toast.error("Please try again!")
                }
            })
            .catch((error) => {
                // Handle any errors here
                console.error(error);
            });
    }
    return (
        <div className='px-10 py-20 w-full' id='contact'>
            <div className='text-center'>
                <h1 className='text-xl lg:text-6xl text-center font-italian'>Don’t settle for anything less

                    <br /> than exceptional.</h1>
                <p className='text-xs lg:text-base py-5'>Fill out the form and let us help you create a luxury experience that

                    <br /> is truly unforgettable.</p>

            </div>
            <div className='flex flex-col gap-5 justify-center items-center w-full'>
                <div className='grid grid-cols-2 gap-4'>
                    <input className='px-3 py-3 outline-none  border-b border-gray-500' onChange={handleChange} name='firstName' value={firstName} placeholder='First Name' />
                    <input className='px-3 py-3 outline-none  border-b border-gray-500' onChange={handleChange} name='lastName' value={lastName} placeholder='Last Name' />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <input type='email' className='px-3 py-3 outline-none  border-b border-gray-500' onChange={handleChange} name='email' value={email} placeholder='Email..' />
                    <input type='text' className='px-3 py-3 outline-none  border-b border-gray-500' onChange={handleChange} name='phone' value={phone} placeholder='Phone..' />

                </div>
                <div>
                    <textarea className='px-3  py-3 outline-none lg:w-[350px] border-b border-gray-500' onChange={handleChange} name='message' value={message} placeholder='How can we help you?' />
                </div>
                <div>
                    <button onClick={() => handleSubmit()} className='block mx-auto bg-black text-white px-10 font-italian text-xl py-1 rounded-lg'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;