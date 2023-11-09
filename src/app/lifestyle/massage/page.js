'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ArrowDown from '@/components/resueable/ArrowDown';
import DatePicker from 'react-datepicker'

const BookingFormFor = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        service: 'Massage',
        bookdate: '',
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
        const { service, fullname, phone, email, guests, bookdate, request } = formData
        const { arrival, departure } = date
        if (!fullname || !phone || !email || !guests || !arrival) {

            toast.error("Please fillup all data")
            return
        }
        const data = {
            "data": {
                "service": service,
                "bookingdate": bookdate,
                "name": fullname,
                "email": email,
                "phone": phone,
                "numberofguests": parseInt(guests),
                "otherrequest": request,

            }
        }
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/massage-requests`;
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
                        clubname: '',
                        bookdate: '',
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
                    <label className='font-italian'>Number of People</label>
                    <select
                        type="number"
                        name="guests"
                        onChange={handleInputChange}
                        value={formData.guests}

                        className="mt-1 p-2 bg-white  font-thin  w-full border rounded-md outline-black"
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
                <div className='grid grid-cols-1 gap-5'>
                    <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">
                        <label className='font-italian'>Booking Date</label>
                        {/* <input
                            type="datetime-local"
                            name="bookdate"
                            value={formData.bookdate}
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
const Massage = () => {


    return (
        <div className='py-1'>
            <div className='relative w-full '>
                <div className="relative h-[500px] lg:h-screen">
                    <video autoPlay loop muted className="w-full h-full object-cover ">
                        <source src="https://leurlux.blr1.cdn.digitaloceanspaces.com/massage.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    {/* <div className="w-full h-full object-cover">
                        <source src="./yacht.mp4" type="video/mp4" />
                      
                        <img src='/massage.jpg' className='w-full h-full' />

                    </div> */}

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-5 lg:px-10 py-5">

                        <div>
                            <h1 className='font-italian text-2xl lg:text-6xl xl:text-8xl lg:py-2 '>
                                Experience  <span style={{ color: 'rgb(193, 182, 134)' }}>Relaxation and Rejuvenation</span> with Our Private Massage Services
                            </h1>
                            <p className='py-5 text-lg font-italian lg:text-4xl '>
                                {`Traveling can often be a tiring endeavor, which is why we have introduced our exclusive private massage services. Our team of highly skilled massage therapists boasts over a decade of experience, backed by Level 5 diplomas in massage therapy`}
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
                        <Link href="#massage">
                            <ArrowDown />
                        </Link>

                    </div>
                </div>
            </div>
            <div id='massage' className='grid grid-cols-1 lg:grid-cols-1'>
                <div className='flex flex-col  text-justify ' >
                    <p className='lg:text-3xl p-5 lg:p-10 font-italian bg-white shadow-sm border'>
                        {`At our establishment, we take pride in customizing each massage to your exact preferences and needs. Whether your goal is pure relaxation or targeted rehabilitation, our therapists are dedicated to tailoring their techniques to your unique requirements.`}
                    </p>
                </div>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-start items-center'>
                <div className='p-5 lg:p-10 flex flex-col gap-5'>

                    <img src='/massage.jpg' className=' h-[300px] lg:h-[600px] w-full rounded-lg' />
                    <h1 className='lg:text-3xl font-italian font-bold text-center'>Indulge in the ultimate relaxation and wellness experience with our private massage services.
                    </h1>
                </div>
                <BookingFormFor />
            </div>
        </div>
    )
}
const page = () => {
    return (
        <Massage />
    );
};

export default page;