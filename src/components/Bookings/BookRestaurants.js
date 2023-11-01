'use client'
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import Carousel from '../resueable/Carousel';
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from 'next/navigation';
import useGlobalContext from '@/hooks/useGlobalContext';
import DatePicker from 'react-datepicker'

const BookingFormFor = () => {
    const router = useRouter();
    const { selectedRestaurant } = useGlobalContext(); // Replace GlobalContext with your actual context

    const [formData, setFormData] = useState({
        restaurant: selectedRestaurant.name,
        arrival: '',
        guests: 1,
        email: '',
        phone: '',
        request: '',
        fullname: '',
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
        const { restaurant, fullname, phone, email, guests, request } = formData
        const { arrival, departure } = date
        if (!fullname || !phone || !email || !guests || !arrival) {

            toast.error("Please fillup all data")
            return
        }
        const data = {
            "data": {
                "restaurant": restaurant,
                "bookingdate": arrival,
                "name": fullname,
                "email": email,
                "phone": phone,
                "numberofguests": guests,
                "otherrequest": request,

            }
        }
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/restaurant-requests`;
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
                        clubname: selectedRestaurant.name,
                        arrival: '',
                        guests: 1,
                        email: '',
                        phone: '',
                        request: '',
                        fullname: '',
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
                    <label className='font-italian'>Restaurant Name</label>
                    <input
                        type="text"
                        name="restaurant"
                        value={formData.restaurant}
                        readOnly
                        className="mt-1 p-2  font-thin  w-full border rounded-md outline-black"
                    />
                </div>
                {/* <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">
                    <label className='font-italian'>Price</label>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        readOnly
                        className="mt-1 p-2  font-thin  w-full border rounded-md outline-black"
                    />
                </div> */}
                <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">
                    <label className='font-italian'>Number of Guests</label>
                    <input
                        type="number"
                        name="guests"
                        onChange={handleInputChange}
                        value={formData.guests}

                        className="mt-1 p-2  font-thin  w-full border rounded-md outline-black"
                    />
                </div>
                <div className='grid grid-cols-1 gap-5'>
                    <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">
                        <label className='font-italian'>Booking Date</label>
                        {/* <input
                            type="datetime-local"
                            name="arrival"
                            value={formData.arrival}
                            onChange={handleInputChange}
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
const BookRestaurants = () => {
    const { selectedRestaurant } = useGlobalContext();
    return <>{
        selectedRestaurant ?
            <>
                <div className=' grid lg:grid-cols-2 gap-5 my-10'>

                    <div>
                        <div>
                            <h2 className='text-xl lg:text-4xl font-italian text-center'>{selectedRestaurant.name}</h2>
                        </div>
                        <div className='px-3 lg:px-10 py-5'>

                            <Carousel photos={selectedRestaurant.images} />
                        </div>

                    </div>
                    <div>
                        <BookingFormFor />

                    </div>
                </div>
            </>
            :
            <div className='justify-center items-center flex flex-row h-full w-full py-20'>
                <Link href={'/lifestyle'} className=' text-xl text-black font-italian hover:text-blue-500 underline'>Select a services</Link>
            </div>
    }</>
};

export default BookRestaurants;