'use client'
import { GlobalContext } from '@/GlobalContext/GlobalContext';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import Carousel from '../resueable/Carousel';
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from 'next/navigation';
const BookingFormFor = () => {
    const { selectedVilla } = useContext(GlobalContext); // Replace GlobalContext with your actual context
    const router = useRouter()
    const [formData, setFormData] = useState({
        villaName: selectedVilla.name,
        price: selectedVilla.price + selectedVilla.price_tag,
        arrival: '',
        departure: '',
        guests: 1,
        email: '',
        phone: '',
        request: '',
        fullname: ''
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
        const { villaName, price, fullname, phone, email, guests, arrival, departure, request } = formData
        if (!fullname || !phone || !email || !guests || !arrival || !departure) {

            toast.error("Please fillup all data")
            return
        }
        const data = {
            "data": {
                "villaname": villaName,
                "arrival": arrival,
                "name": fullname,
                "email": email,
                "phone": phone,
                "price": price,
                "numberofguests": guests,
                "departure": departure,
                "otherrequest": request,

            }
        }
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/villa-requests`;
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
                        villaName: selectedVilla.name,
                        price: selectedVilla.price,
                        arrival: '',
                        departure: '',
                        guests: 1,
                        email: '',
                        phone: '',
                        request: '',
                        fullname: ''
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
                    <label className='font-italian'>Villa Name</label>
                    <input
                        type="text"
                        name="villaName"
                        value={formData.villaName}
                        readOnly
                        className="mt-1 p-2  font-thin  w-full border rounded-md outline-black"
                    />
                </div>
                <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">
                    <label className='font-italian'>Price</label>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        readOnly
                        className="mt-1 p-2  font-thin  w-full border rounded-md outline-black"
                    />
                </div>
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
                <div className='grid grid-cols-2 gap-5'>
                    <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">
                        <label className='font-italian'>Arrival</label>
                        <input
                            type="datetime-local"
                            name="arrival"
                            value={formData.arrival}
                            onChange={handleInputChange}
                            className="mt-1 p-2 bg-white font-thin  w-full border rounded-md outline-black"
                        />
                    </div>
                    <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">
                        <label className='font-italian'>Departure</label>
                        <input
                            type="datetime-local"
                            name="departure"
                            onChange={handleInputChange}
                            value={formData.departure}
                            className="mt-1 p-2 bg-white font-thin  w-full border rounded-md outline-black"
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
                    <Link href="/villas#villas" className='mx-5  block underline text-base font-italian'>Back</Link>
                </div>
            </form>
        </div>
    );
};
const BookVilla = () => {
    const { selectedVilla } = useContext(GlobalContext)
    const [selectedSection, setSelectedSection] = useState('specifications')
    return <>{
        selectedVilla ?
            <>
                <div className=' grid lg:grid-cols-2 gap-5 py-10'>

                    <div>
                        <div>
                            <h2 className='text-2xl lg:text-4xl font-italian text-center'>{selectedVilla.name}</h2>
                        </div>
                        <div className='lg:px-10 py-5'>
                            {/* <div className='w-full h-full'>
                                <img src={selectedYacht.images[0]} className='rounded-lg' />
                            </div>
                            <div className='flex flex-row gap-5 my-2'>
                                {
                                    selectedYacht.images.map((singleImage) => {
                                        return <img src={singleImage} className='w-40 h-40 rounded-lg' />
                                    })
                                }
                            </div> */}
                            <div className='px-5 lg:px-0'>
                                <Carousel photos={selectedVilla.images} />
                            </div>
                        </div>
                        <div className=' lg:px-10 py-5'>
                            <div className='flex flex-row justify-around items-center'>
                                <button onClick={() => setSelectedSection('specifications')} className='lg:px-8 py-2 text-2xl font-italian  underline rounded-lg hover:bg-gray-50' >Specifications</button>
                                <button onClick={() => setSelectedSection('description')} className='lg:px-8 py-2 text-2xl font-italian  underline rounded-lg hover:bg-gray-50' >Description</button>

                            </div>
                            <div className='px-3 lg:px-0'>
                                {
                                    selectedSection === 'specifications' && <>
                                        <div className='bg-white border p-5'>
                                            <h3 className='lg:text-3xl font-italian'>Specifications:</h3>
                                            <ul className='lg:px-10 py-5 text-xl font-thin flex flex-row flex-wrap gap-10'>
                                                <li className='flex flex-row gap-5 justify-center items-center'>

                                                    <span className='text-xl font-normal'>{selectedVilla.guests}</span>
                                                    Guests
                                                </li>
                                                <li className='flex flex-row gap-5 justify-center items-center'>

                                                    <span className='text-xl font-normal'>{selectedVilla.bedrooms}</span>
                                                    Bedrooms
                                                </li>
                                                <li className='flex flex-row gap-5 justify-center items-center'>
                                                    <span className='text-xl font-normal'>{selectedVilla.beds}</span>
                                                    Beds
                                                </li>
                                                <li className='flex flex-row gap-5 justify-center items-center'>
                                                    <span className='text-xl font-normal'>{selectedVilla.bathrooms}</span>
                                                    Bathrooms
                                                </li>
                                                {selectedVilla.link && <li >
                                                    <Link className='font-italian font-bold flex flex-row  text-xs ' href={selectedVilla.link} target='_blank'> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                                    </svg> More Details</span></Link>

                                                </li>}
                                            </ul>
                                        </div>
                                    </>
                                }
                                {
                                    selectedSection === 'description' && <>
                                        <div className='bg-white border p-5'>
                                            <h3 className='lg:text-3xl font-italian'>Description:</h3>
                                            <p className='font-thin py-5 '>
                                                {selectedVilla.details}
                                            </p>
                                        </div>
                                    </>
                                }

                            </div>
                        </div>
                    </div>
                    <div>
                        <BookingFormFor />

                    </div>
                    <div className='lg:px-0 px-3'>
                        {
                            selectedVilla.about_villa && (
                                <div>
                                    <h1 className='text-4xl font-italian'>The Villa</h1>
                                    <p className='py-5 text-justify font-italian'>
                                        {selectedVilla.about_villa}
                                    </p>

                                </div>
                            )

                        }
                    </div>
                    <div className='lg:px-0 px-3'>
                        {
                            selectedVilla.about_neighborhood && (
                                <div>
                                    <h1 className='text-4xl font-italian'>The Neighborhood</h1>
                                    <p className='py-5 text-justify font-italian'>
                                        {selectedVilla.about_neighborhood}
                                    </p>

                                </div>
                            )

                        }
                    </div>
                </div>
            </>
            :
            <div className='justify-center items-center flex flex-row h-full w-full py-20'>
                <Link href={'/villas#villas'} className=' text-xl text-black font-italian hover:text-blue-500 underline'>Select a villa</Link>
            </div>
    }</>
}

export default BookVilla;