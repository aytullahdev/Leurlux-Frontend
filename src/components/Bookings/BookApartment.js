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
                                                <li>
                                                    <Link href={'https://wa.me/+46736700548'}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                                            <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
                                                        </svg></Link>
                                                </li>
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
                    {/* <div className='lg:px-0 px-3'>
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
                    </div> */}
                    {/* <div className='lg:px-0 px-3'>
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
                    </div> */}
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