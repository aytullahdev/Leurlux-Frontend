'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ArrowDown from '@/components/resueable/ArrowDown';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'sonner';
import axios from 'axios';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';


const BookingFormFor = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        service: 'Private Runner',
        bookdate: '',
        email: '',
        phone: '',
        request: '',
        fullname: '',
        whattodo: ''
    });
    const [date, setDate] = useState({
        'arrival': new Date(),
        'departure': new Date(),
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { service, fullname, phone, email, whattodo, bookdate, request } = formData
        const { arrival, departure } = date
        if (!fullname || !phone || !email || !arrival || !whattodo) {

            toast.error("Please fillup all data")
            return
        }
        const data = {
            "data": {
                "service": service,
                "pickupdate": arrival,
                "name": fullname,
                "email": email,
                "phone": phone,
                "whattodo": whattodo,
                "otherrequest": request,

            }
        }
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/private-runners`;
        const token = `${process.env.NEXT_PUBLIC_API_TOKEN}`;

        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios.post(apiUrl, data, { headers })
            .then((response) => {
                // Handle the response data here
                //console.log(response.data)
                if (response.data.data.id) {

                    toast.success("Thank you for booking")

                    setFormData({
                        service: 'Private Runner',
                        bookdate: '',
                        email: '',
                        phone: '',
                        request: '',
                        fullname: '',
                        whattodo: ''
                    })
                    router.push(`/success`)

                } else {
                    toast.error("Please try again!")

                }
            })
            .catch((error) => {
                // Handle any errors here
                toast.error("Please try again!")
                console.error(error);
            });
        // Handle the form submission here, e.g., send the data to your server
        // console.log('Form Data:', formData);
    };
    return (
        <div className="bg-white rounded-lg p-6 mb-6 font-italian">
            <h2 className="text-3xl font-italian font-bold mb-4">Booking Form</h2>
            <form onSubmit={handleSubmit} >
                <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">
                    <label className='font-italian'>Service Name</label>
                    <input
                        type="text"
                        name="service"
                        value={formData.service}
                        readOnly
                        className="mt-1 p-2  font-thin  w-full border rounded-md outline-black"
                    />
                </div>

                <div className='grid grid-cols-1 gap-5'>
                    <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">
                        <label className='font-italian'>Pickup Time</label>
                        {/* <input
                            type="datetime-local"
                            name="bookdate"
                            value={formData.bookdate}
                            onChange={handleInputChange}
                            required
                            className="mt-1 p-2  bg-white font-thin  w-full border rounded-md outline-black"
                        /> */}
                        <DatePicker
                            className='border  w-full p-2 rounded-lg'
                            selected={date.arrival}
                            onChange={(data) => setDate((prev) => ({ ...prev, 'arrival': data }))}
                            showTimeSelect
                            timeFormat="p"
                            timeIntervals={30}
                            dateFormat="Pp"
                        />
                    </div>

                </div>
                <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">
                    <label className='font-italian'>What to do?</label>
                    <textarea

                        name="whattodo"
                        value={formData.whotodo}
                        onChange={handleInputChange}
                        placeholder='Describe what to do...'
                        required
                        className="mt-1 p-2  font-thin  w-full border rounded-md outline-black"

                    />
                </div>
                <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">

                    <label className="font-italian">Full Name</label>
                    <input
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleInputChange}
                        placeholder='Full Name...'
                        className="mt-1 p-2  font-thin  w-full border rounded-md outline-black"
                        required
                    />
                </div>
                <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">

                    <label className="font-italian">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder='Email...'
                        className="mt-1 p-2  font-thin  w-full border rounded-md outline-black"
                        required
                    />
                </div>
                <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">
                    <label className='font-italian'>Phone</label>
                    {/* <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder='Phone...'
                        className="mt-1 p-2  font-thin  w-full border rounded-md outline-black"
                        required
                    /> */}
                    <div className="mt-1 p-2  font-thin  w-full border rounded-md outline-black">
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={formData.phone}

                            onChange={(data) => {
                                setFormData((prev) => ({ ...prev, 'phone': data }))
                            }} />
                    </div>

                </div>
                <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">
                    <label className='font-italian'>Other Requests</label>
                    <textarea

                        name="request"
                        value={formData.request}
                        onChange={handleInputChange}
                        placeholder='Other request...'
                        className="mt-1 p-2  font-thin  w-full border rounded-md outline-black"

                    />
                </div>

                <div className='flex flex-row gap-5 items-center justify-center'>
                    <button
                        type="submit"
                        className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-md"
                    >
                        Request
                    </button>
                    <Link href="/lifestyle" className='mx-5  block underline text-base font-italian'>Back</Link>
                </div>
            </form>
        </div>
    );
};
const PrivateRunner = () => {


    return (
        <div className='py-1'>

            <BookingFormFor />
        </div>
    )
}
const PrivateRunnerHeroSection = () => {
    return (
        <div className='lg:py-2'>

            <div className='relative w-full '>
                <div className="relative h-[500px] lg:h-screen">
                    <div className="w-full h-full object-cover">
                        {/* <source src="./yacht.mp4" type="video/mp4" /> */}
                        <img src='/privaterunner.webp' className='w-full h-full' />

                    </div>
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-5 lg:px-10 py-5">

                        <div>
                            <h1 className='font-italian text-4xl lg:text-6xl xl:text-8xl lg:py-2 '>
                                Introducing <span style={{ color: 'rgb(193, 182, 134)' }}>LEURLUX</span> Private Runner

                            </h1>
                            <p className='py-5 text-xl font-italian lg:text-4xl '>
                                {`At LeurLux, we take pride in setting new standards in concierge services right here in Marbella. We are excited to introduce a unique offering exclusively for our esteemed clients, The LeurLux Private Runner.`}
                            </p>
                            {/* <p className='text-3xl lg:text-4xl xl:text-5xl py-5 lg:py-10 font-italian text-center'>
                                MARBELLA
                            </p> */}
                            {/* <div className='my-10'>
                                <div class="animate-bounce flex justify-center items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                    </svg>
                                </div>
                            </div> */}
                        </div>
                        <Link href="#privaterunner">
                            <ArrowDown />
                        </Link>

                    </div>
                </div>
            </div>

            <div id='privaterunner' className='grid grid-cols-1 lg:grid-cols-1'>
                <div className='flex flex-col  text-justify ' >
                    <p className='lg:text-3xl p-5 lg:p-10 font-italian bg-white shadow-sm border'>
                        {` Our Private Runner service empowers our clients with unparalleled convenience, allowing them to have their desired items delivered to any location within Marbella. Whether it's a luxury handbag, a rental supercar, groceries shopping, a delectable takeaway, or even a crucial item left behind in your holiday residence, our dedicated Private Runner is at your service to swiftly retrieve and deliver it to you.`}
                    </p>
                </div>

            </div>
            <div className=' py-10'>
                <div className='font-italian lg:text-5xl  px-4 lg:px-5 lg:py-10'>
                    At LeurLux, our mission is to simplify and enhance your lifestyle, making every aspect of it more comfortable and enjoyable. We are your trusted partner for all things luxurious and convenient.

                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 justify-start items-center'>
                    <div className='p-5 lg:p-10 flex flex-col gap-5'>

                        <img src='/privaterunner.webp' className=' h-[300px] lg:h-[600px] w-full rounded-lg' />
                        <h1 className='lg:text-2xl font-italian font-bold text-center'>At LeurLux, our mission is to simplify and enhance your lifestyle, making every aspect of it more comfortable and enjoyable. We are your trusted partner for all things luxurious and convenient.
                        </h1>
                    </div>
                    <PrivateRunner />
                </div>
            </div>
        </div>
    )
}
const page = () => {
    return (
        <PrivateRunnerHeroSection />
    );
};

export default page;