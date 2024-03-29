'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';
import axios from 'axios';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const BookTrainingForm = () => {
    const router = useRouter();
    const [bookingDate, setBookingDate] = useState(new Date())
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        fullname: '',
        packagetype: '1 Player Package',
        persons: 1,
        request: '',
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

        const { fullname, phone, email, persons, request, packagetype } = formData
        if (!fullname || !phone || !email || !persons || !bookingDate || !packagetype) {

            toast.error("Please fillup all data")
            return
        }
        const data = {
            "data": {
                "packagetype": packagetype,
                "persons": parseInt(persons),
                "name": fullname,
                "email": email,
                "phone": phone,
                "bookingdate": bookingDate,
                "otherrequest": request,

            }
        }
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/protraining-requests`;
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
                        email: '',
                        phone: '',
                        fullname: '',
                        packagetype: '1 Player Package',
                        persons: 1,
                        request: '',
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
        <div className="bg-white rounded-lg px-2 py-2 lg:p-6 mb-6 font-italian">
            <h2 className="text-3xl font-italian font-bold mb-4">Booking Form</h2>
            <form onSubmit={handleSubmit} >
                <div className="mb-4 flex flex-col justify-start gap-2 text-base lg:text-xl ">
                    <label className='font-italian'>Package Type</label>
                    <select
                        name="packagetype"
                        value={formData.packagetype}
                        onChange={handleInputChange}
                        className="mt-1 p-2 bg-white font-thin  w-full border rounded-md outline-black"
                    >

                        <option value="1 Player Package" className='px-3 py-1 border block rounded'>1 Player Package</option>
                        <option value="2+ Player Package" className='px-3 py-1 border block rounded'>2+ Player Package</option>
                        <option value="Single Person" className='px-3 py-1 border block rounded'>Single Person Package</option>
                        <option value="Couple Training" className='px-3 py-1 border block rounded'>Couple Training Package</option>
                        <option value="3+ Person" className='px-3 py-1 border block rounded'>3+ Person Package</option>
                    </select>
                </div>

                <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">
                    <label className='font-italian'>Number of Persons</label>

                    <select
                        type="number"
                        name="persons"
                        onChange={handleInputChange}
                        value={formData.persons}

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
                <div className='grid grid-cols-1 gap-5'>
                    <div className="mb-4 flex w-full flex-col justify-start gap-2 text-xl ">
                        <label className='font-italian'>Booking Date</label>
                        <DatePicker
                            className='border  w-full p-2 rounded-lg'
                            selected={bookingDate}
                            onChange={(date) => setBookingDate(date)}
                            showTimeSelect
                            timeFormat="p"
                            timeIntervals={30}
                            dateFormat="Pp"
                        />
                        {/* <input
                            type="datetime-local"
                            name="bookingdate"
                            value={formData.bookingdate}
                            onChange={handleInputChange}
                            className="mt-1 p-2  bg-white  font-thin  w-full border rounded-md outline-black"
                        /> */}
                    </div>

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
                    <Link href="/lifestyle/personal-training" className='mx-5  block underline text-base font-italian'>Back</Link>
                </div>
            </form>
        </div>
    );
}
const TrainingPricing = () => {
    const personalTrainingPackage = [
        {
            tittle: "Single Person",
            sessions: [
                {
                    type: '1 session',
                    price: '100€',
                    pricetag: '',
                    session: ''
                },
                {
                    type: '10 sessions',
                    price: '775€',
                    pricetag: '',
                    session: ''
                },
                {
                    type: '20 sessions',
                    price: '1,350€',
                    pricetag: '',
                    session: ''
                }
            ]
        },
        {
            tittle: "Couple Training",
            sessions: [
                {
                    type: '1 session',
                    price: '75€',
                    pricetag: 'Per Person',
                    session: ''
                },
                {
                    type: '10 sessions',
                    price: '600€',
                    pricetag: 'Per Person',
                    session: ''
                },
                {
                    type: '20 sessions',
                    price: '1,000€',
                    pricetag: 'Per person',
                    session: ''
                }
            ]
        },
        {
            tittle: "3+ Person",
            sessions: [
                {
                    type: '1 session',
                    price: '60€',
                    pricetag: 'per person',
                    session: ''
                },
                {
                    type: '10 sessions',
                    price: '450€',
                    pricetag: 'per person',
                    session: ''
                },
                {
                    type: '20 sessions',
                    price: '800€',
                    pricetag: 'per person',
                    session: ''
                }
            ]
        }

    ]
    const proPlayerTrainingPackage = [
        {
            tittle: "1 Player Package",
            sessions: [
                {
                    type: '1-5 sessions',
                    price: '450€ - 1000€',
                    pricetag: 'per player',
                    session: 'per session'
                },
                {
                    type: '5+ sessions',
                    price: '350€ - 700€',
                    pricetag: 'per player',
                    session: 'per session'
                }
            ]
        },
        {
            tittle: "2+ Player Package",
            sessions: [
                {
                    type: '1-5 sessions',
                    price: '375€ - 700€',
                    pricetag: 'per player',
                    session: 'per session'
                },
                {
                    type: '5+ sessions',
                    price: '275€ - 500€',
                    pricetag: 'per player',
                    session: 'per session'
                }
            ]
        },

    ]
    return (<div className='font-italian py-5 bg-white text-black px-5 lg:px-5 '>
        <div >
            <div className='py-10'>
                <h1 className='text-4xl'>PROFFESIONAL FOOTBALL<span style={{ color: 'rgb(193, 182, 134)' }}>TRAINING</span></h1>
                <div className='grid grid-cols-1 lg:grid-cols-1 2xl:grid-cols-2 gap-5 mt-5'>
                    {proPlayerTrainingPackage.map((singlePackage, indx) => {
                        return (
                            <div key={`package${indx}`} className='uppercase  text-black shadow-sm p-5 border rounded '>
                                <h1 className=' text-white bg-black font-mono py-2 rounded-lg text-xl lg:text-xl text-center'>{singlePackage.tittle}</h1>
                                <div className='flex flex-row gap-2 lg:gap-10 py-5 justify-center items-center font-italian'>
                                    {
                                        singlePackage.sessions.map((singleSession, indx) => {
                                            return (
                                                <div key={`session-${indx}`} className='text-center lg:text-base flex flex-col gap-1 justify-start'>
                                                    <h1 className='font-mono text-base lg:text-base'>{singleSession.type}</h1>
                                                    <h2 className=' text-base lg:text-base font-serif'>{singleSession.price}</h2>
                                                    <h3 className='text-xs lg:text-base'>{singleSession.pricetag}</h3>
                                                    <h4 className='text-xs lg:text-base'>{singleSession.session}</h4>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <h1 className='text-4xl'>PERSONAL <span style={{ color: 'rgb(193, 182, 134)' }}>TRAINING</span></h1>
                <div className='grid grid-cols-1 lg:grid-cols-1 2xl:grid-cols-2 gap-5 mt-5'>
                    {personalTrainingPackage.map((singlePackage, indx) => {
                        return (
                            <div key={`package${indx}`} className='uppercase  text-black shadow-sm p-5 border rounded '>
                                <h1 className=' text-white bg-black font-mono py-2 rounded-lg text-xl lg:text-xl text-center'>{singlePackage.tittle}</h1>
                                <div className='flex flex-row gap-2 lg:gap-10 py-5 justify-center items-center font-mono'>
                                    {
                                        singlePackage.sessions.map((singleSession, indx) => {
                                            return (
                                                <div key={`session-${indx}`} className='text-center  lg:text-xl flex flex-col gap-1 justify-start'>
                                                    <h1 className='font-mono text-base lg:text-base'>{singleSession.type}</h1>
                                                    <h2 className=' text-base lg:text-base font-serif'>{singleSession.price}</h2>
                                                    <h3 className='text-xs lg:text-base'>{singleSession.pricetag}</h3>
                                                    <h4 className='text-xs lg:text-base'>{singleSession.session}</h4>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        )
                    })}
                </div>

            </div>

        </div>

    </div>)
}
const BookTraining = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 py-5'>
            <div className='hidden lg:block'>
                <TrainingPricing />
            </div>
            <div>
                <BookTrainingForm />
            </div>
        </div>
    );
};

export default BookTraining;