'use client'
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from 'next/navigation';
import useGlobalContext from '@/hooks/useGlobalContext';
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
        if (!fullname || !phone || !email || !bookdate || !whattodo) {

            toast.error("Please fillup all data")
            return
        }
        const data = {
            "data": {
                "service": service,
                "pickupdate": bookdate,
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
        console.log('Form Data:', formData);
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
                        <input
                            type="datetime-local"
                            name="bookdate"
                            value={formData.bookdate}
                            onChange={handleInputChange}
                            required
                            className="mt-1 p-2  bg-white font-thin  w-full border rounded-md outline-black"
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

                    <label className="font-italian">Name</label>
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
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder='Phone...'
                        className="mt-1 p-2  font-thin  w-full border rounded-md outline-black"
                        required
                    />
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
const page = () => {
    return (
        <PrivateRunner />
    );
};

export default page;