import { GlobalContext } from '@/GlobalContext/GlobalContext';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import Carousel from '../resueable/Carousel';
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from 'next/navigation';
import DatePicker from 'react-datepicker'


const BookingFormFor = () => {
    const router = useRouter();
    const { selectedHotel } = useContext(GlobalContext); // Replace GlobalContext with your actual context

    const [formData, setFormData] = useState({
        hotelname: selectedHotel.name,
        arrival: '',
        departure: '',
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
        const { hotelname, fullname, phone, email, guests, request } = formData
        const { arrival, departure } = date
        if (!fullname || !phone || !email || !guests || !arrival || !departure) {

            toast.error("Please fillup all data")
            return
        }
        const data = {
            "data": {
                "hotelname": hotelname,
                "arrival": arrival,
                "name": fullname,
                "email": email,
                "phone": phone,
                "numberofguests": parseInt(guests),
                "departure": departure,
                "otherrequest": request,

            }
        }
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/hotel-requests`;
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
                        hotelname: selectedHotel.name,
                        arrival: '',
                        departure: '',
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
        //console.log('Form Data:', formData);
    };
    return (
        <div className="bg-white rounded-lg p-6 mb-6 font-italian">
            <h2 className="text-3xl font-italian font-bold mb-4">Booking Form</h2>
            <form onSubmit={handleSubmit} >
                <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">
                    <label className='font-italian'>Hotel Name</label>
                    <input
                        type="text"
                        name="hotelname"
                        value={formData.hotelname}
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

                    <select
                        type="number"
                        name="guests"
                        onChange={handleInputChange}
                        value={formData.guests}

                        className="mt-1 p-2  font-thin  w-full border rounded-md outline-black"
                    >
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                        <option value="5">5 people</option>
                        <option value="6">6 people</option>
                        <option value="7">7 people</option>
                        <option value="8">8 people</option>
                        <option value="9">9 people</option>
                        <option value="10">10 people</option>
                        <option value="11">11 people</option>
                        <option value="12">12 people</option>
                        <option value="13">13 people</option>
                    </select>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">
                        <label className='font-italian'>Arrival</label>
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
                    <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">
                        <label className='font-italian'>Departure</label>
                        {/* <input
                            type="datetime-local"
                            name="departure"
                            onChange={handleInputChange}
                            value={formData.departure}
                            className="mt-1 p-2 bg-white font-thin  w-full border rounded-md outline-black"
                        /> */}
                        <DatePicker
                            className='border  w-full p-2 rounded-lg'
                            selected={date.departure}
                            onChange={(data) => setDate((prev) => ({ ...prev, 'departure': data }))}
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
                    <Link href="/hotels#hotels" className='mx-5  block underline text-base font-italian'>Back</Link>
                </div>
            </form>
        </div>
    );
};
const BookHotle = () => {
    const { selectedHotel } = useContext(GlobalContext)
    const [selectedSection, setSelectedSection] = useState('description')
    return <>{
        selectedHotel ?
            <>
                <div className=' grid lg:grid-cols-2 gap-5 my-10'>

                    <div>
                        <div>
                            <h2 className='text-xl lg:text-4xl font-italian text-center'>{selectedHotel.name}</h2>
                        </div>
                        <div className='px-3 lg:px-10 py-5'>
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
                            <Carousel photos={selectedHotel.images} />
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
                                                    <span className='text-xl font-normal'>{selectedHotel.beds}</span>
                                                </li>
                                                <li className='flex flex-row gap-5 justify-center items-center'>
                                                    <img src='/bath-tube.svg' className='w-12 h-12' />
                                                    <span className='text-xl font-normal'>{selectedHotel.bathTube}</span>
                                                </li>
                                                <li className='flex flex-row gap-5 justify-center items-center'>
                                                    <img src='/room.svg' className='w-12 h-12' />
                                                    <span className='text-xl font-normal'>{selectedHotel.area}<sup>2</sup>m</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                } */}
                                {
                                    selectedSection === 'description' && <>
                                        <div className='bg-white border p-5'>
                                            <h3 className='lg:text-3xl font-italian'>Description:</h3>
                                            <p className='font-thin py-5 '>
                                                <div class="bg-white rounded-lg shadow-md p-4">
                                                    <h1 class="text-2xl font-semibold text-black">{selectedHotel.name}</h1>
                                                    <p class="text-gray-600 mt-2">Rating: {selectedHotel.rating}</p>
                                                    <p class="text-gray-600">Location: {selectedHotel.location}</p>
                                                    <div class="text-black mt-2">Sustainability Level: {selectedHotel.sustainabilityLevel}</div>
                                                </div>

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
                </div>
            </>
            :
            <div className='justify-center items-center flex flex-row h-full w-full py-20'>
                <Link href={'/hotels#hotels'} className=' text-xl text-black font-italian hover:text-blue-500 underline'>Select a hotels</Link>
            </div>
    }</>
}

export default BookHotle;