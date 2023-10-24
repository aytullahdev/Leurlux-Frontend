import { GlobalContext } from '@/GlobalContext/GlobalContext';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import Carousel from '../resueable/Carousel';
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from 'next/navigation';


const BookingFormFor = () => {
    const { selectedApartment } = useContext(GlobalContext); // Replace GlobalContext with your actual context
    const router = useRouter()
    const [formData, setFormData] = useState({
        apartmentname: selectedApartment.name,
        price: selectedApartment.price,
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
        const { apartmentname, price, fullname, phone, email, guests, arrival, departure, request } = formData
        if (!fullname || !phone || !email || !guests || !arrival || !departure) {

            toast.error("Please fillup all data")
            return
        }
        const data = {
            "data": {
                "apartmentname": apartmentname,
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
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/apartment-requests`;
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
                        apartmentname: selectedApartment.name,
                        price: selectedApartment.price + selectedApartment.price_tag,
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
                            className="mt-1 p-2  font-thin  w-full border rounded-md outline-black"
                        />
                    </div>
                    <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">
                        <label className='font-italian'>Departure</label>
                        <input
                            type="datetime-local"
                            name="departure"
                            onChange={handleInputChange}
                            value={formData.departure}
                            className="mt-1 p-2  font-thin  w-full border rounded-md outline-black"
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
                        required
                    />
                </div>

                <div className='flex flex-row gap-5 items-center justify-center'>
                    <button
                        type="submit"
                        className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-md"
                    >
                        Request
                    </button>
                    <Link href="/apartments#apartments" className='mx-5  block underline text-base font-italian'>Back</Link>
                </div>
            </form>
        </div>
    );
};
const BookApartment = () => {
    const { selectedApartment } = useContext(GlobalContext)
    const [selectedSection, setSelectedSection] = useState('description')
    return <>{
        selectedApartment ?
            <>
                <div className=' grid lg:grid-cols-2 gap-5 my-10'>

                    <div>
                        <div className='px-10 flex flex-col gap-5'>
                            <h2 className='text-4xl font-italian text-left'>{selectedApartment.name}</h2>
                            <span className='text-base  font-thin text-start inline py-1 px-2 w-52 bg-slate-200'>Price From: {selectedApartment.price} {selectedApartment.price_tag}</span >
                        </div>
                        <div className='px-2 lg:px-10 py-5'>
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
                            <Carousel photos={selectedApartment.images} />
                        </div>
                        <div className='px-2 lg:px-10 py-5'>
                            <div className='flex flex-row justify-around items-center'>
                                {/* <button onClick={() => setSelectedSection('specifications')} className='px-8 py-2 text-2xl font-italian  underline rounded-lg hover:bg-gray-50' >Specifications</button> */}
                                <button onClick={() => setSelectedSection('description')} className='px-8 py-2 text-2xl font-italian  underline rounded-lg hover:bg-gray-50' >Description</button>

                            </div>
                            <div>
                                {/* {
                                    selectedSection === 'specifications' && <>
                                        <div className='bg-white border p-5'>
                                            <h3 className='text-3xl font-italian'>Specifications:</h3>
                                            <ul className='px-10 py-5 text-xl font-thin flex flex-row flex-wrap gap-10'>
                                                <li className='flex flex-row gap-5 justify-center items-center'>
                                                    <img src='/bed.svg' className='w-12 h-12' />
                                                    <span className='text-xl font-normal'>{selectedApartment.beds}</span>
                                                </li>
                                                <li className='flex flex-row gap-5 justify-center items-center'>
                                                    <img src='/bath-tube.svg' className='w-12 h-12' />
                                                    <span className='text-xl font-normal'>{selectedApartment.bathTube}</span>
                                                </li>
                                                <li className='flex flex-row gap-5 justify-center items-center'>
                                                    <img src='/room.svg' className='w-12 h-12' />
                                                    <span className='text-xl font-normal'>{selectedApartment.area}<sup>2</sup>m</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                } */}
                                {
                                    selectedSection === 'description' && <>
                                        <div className='bg-white border p-5'>
                                            <ul className='lg:px-10 py-5 text-xl font-thin flex flex-row flex-wrap gap-10'>
                                                <li className='flex flex-row gap-5 justify-center items-center'>

                                                    <span className='text-xl font-normal'>{selectedApartment.guests}</span>
                                                    Guests
                                                </li>
                                                <li className='flex flex-row gap-5 justify-center items-center'>

                                                    <span className='text-xl font-normal'>{selectedApartment.bedrooms}</span>
                                                    Bedrooms
                                                </li>
                                                <li className='flex flex-row gap-5 justify-center items-center'>
                                                    <span className='text-xl font-normal'>{selectedApartment.beds}</span>
                                                    Beds
                                                </li>
                                                <li className='flex flex-row gap-5 justify-center items-center'>
                                                    <span className='text-xl font-normal'>{selectedApartment.bathrooms}</span>
                                                    Bathrooms
                                                </li>
                                                {selectedApartment.link && <li >
                                                    <Link className='font-italian font-bold flex flex-row  text-xs ' href={selectedApartment.link} target='_blank'> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                                    </svg> More Details</span></Link>

                                                </li>}
                                            </ul>
                                            <h3 className='text-3xl font-italian'>Description:</h3>
                                            <p className='font-thin py-5 '>
                                                {selectedApartment.details}
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
                            selectedApartment.about_penthouse && (
                                <div>
                                    <h1 className='text-4xl font-italian'>About</h1>
                                    <p className='py-5 text-justify font-italian'>
                                        {selectedApartment.about_penthouse}
                                    </p>

                                </div>
                            )

                        }
                    </div>
                    <div className='lg:px-0 px-3'>
                        {
                            selectedApartment.about_neighborhood && (
                                <div>
                                    <h1 className='text-4xl font-italian'>The Neighborhood</h1>
                                    <p className='py-5 text-justify font-italian'>
                                        {selectedApartment.about_neighborhood}
                                    </p>

                                </div>
                            )

                        }
                    </div>
                </div>
                {selectedApartment?.amenities && <div>
                    <img className='mx-auto' src={selectedApartment.amenities} />
                </div>}
            </>
            :
            <div className='justify-center items-center flex flex-row h-full w-full py-20'>
                <Link href={'/apartments#apartments'} className=' text-xl text-black font-italian hover:text-blue-500 underline'>Select a apartment</Link>
            </div>
    }</>
}

export default BookApartment;