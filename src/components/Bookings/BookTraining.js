'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';
import axios from 'axios';

const BookTrainingForm = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        bookingdate: '',
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
        const { fullname, phone, email, persons, request, bookingdate, packagetype } = formData
        if (!fullname || !phone || !email || !persons || !bookingdate || !request || !packagetype) {

            toast.error("Please fillup all data")
            return
        }
        const data = {
            "data": {
                "packagetype": packagetype,
                "persons": persons,
                "name": fullname,
                "email": email,
                "phone": phone,
                "bookingdate": bookingdate,
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
                        bookingdate: '',
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
        console.log('Form Data:', formData);
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
                    <input
                        type="number"
                        name="persons"
                        onChange={handleInputChange}
                        value={formData.persons}

                        className="mt-1 p-2  font-thin  w-full border rounded-md outline-black"
                    />
                </div>
                <div className='grid grid-cols-1 gap-5'>
                    <div className="mb-4 flex w-full flex-col justify-start gap-2 text-xl ">
                        <label className='font-italian'>Booking Date</label>
                        <input
                            type="datetime-local"
                            name="bookingdate"
                            value={formData.bookingdate}
                            onChange={handleInputChange}
                            className="mt-1 p-2  bg-white  font-thin  w-full border rounded-md outline-black"
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
}
const TrainingPricing = () => {
    const trainingPackage = [
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
        {
            tittle: "Single Person",
            sessions: [
                {
                    type: '1 session',
                    price: '125€',
                    pricetag: '',
                    session: ''
                },
                {
                    type: '10 sessions',
                    price: '810€',
                    pricetag: '',
                    session: ''
                },
                {
                    type: '20 sessions',
                    price: '1,470€',
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
                    price: '87€',
                    pricetag: 'Per Person',
                    session: ''
                },
                {
                    type: '10 sessions',
                    price: '770€',
                    pricetag: 'Per Person',
                    session: ''
                },
                {
                    type: '20 sessions',
                    price: '1,170€',
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
                    price: '70€',
                    pricetag: 'per person',
                    session: ''
                },
                {
                    type: '10 sessions',
                    price: '570€',
                    pricetag: 'per person',
                    session: ''
                },
                {
                    type: '20 sessions',
                    price: '870€',
                    pricetag: 'per person',
                    session: ''
                }
            ]
        }
    ]
    return (<div className='font-italian py-5 bg-white text-black px-5 lg:px-0 '>
        <div >
            <h1 className='text-4xl'>PRO<span style={{ color: 'rgb(193, 182, 134)' }}>TRAINING</span></h1>
            <div className='grid grid-cols-1 2xl:grid-cols-2 gap-5 mt-5'>
                {trainingPackage.map((singlePackage, indx) => {
                    return (
                        <div key={`package${indx}`} className='uppercase  text-black shadow-sm p-5 border rounded '>
                            <h1 style={{ backgroundColor: 'rgb(193, 182, 134)' }} className=' text-black py-2 rounded-lg text-xl lg:text-2xl text-center'>{singlePackage.tittle}</h1>
                            <div className='flex flex-row gap-2 lg:gap-10 py-5 justify-center items-center font-italian'>
                                {
                                    singlePackage.sessions.map((singleSession, indx) => {
                                        return (
                                            <div key={`session-${indx}`} className='text-center lg:text-xl flex flex-col gap-1 justify-start'>
                                                <h1 className='text-base lg:text-xl'>{singleSession.type}</h1>
                                                <h2 className=' text-base lg:text-xl font-serif'>{singleSession.price}</h2>
                                                <h3 className='text-xs lg:text-xl'>{singleSession.pricetag}</h3>
                                                <h4 className='text-xs lg:text-xl'>{singleSession.session}</h4>
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