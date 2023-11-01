'use client'
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";
import axios from "axios";
import { toast } from "sonner";
import useGlobalContext from "@/hooks/useGlobalContext";
import BookingSuccess from "../resueable/BookingSuccess";
import useCollection from "@/hooks/useCollection";
import { checkout } from "@/controller/checkout";
import DatePicker from 'react-datepicker'

const PricingSection = () => {
    const [selectedSection, setSelectedSection] = useState('Chauffeur')
    const { selectedTransport } = useGlobalContext()
    // const [collection] = useCollection('/api/transport-prices')
    return (
        <div>
            {
                selectedTransport && (
                    <div>
                        <h1 className="uppercase text-xl ">Selected Transport <span className="font-bold">{selectedTransport.title}</span></h1>
                        <div className="py-10">
                            <img src={selectedTransport.img} />
                        </div>
                    </div>)
            }
        </div>
    )

    return (
        <div>
            <div className="my-5 flex flex-row gap-5">
                {collection && collection.map((singleTransport, indx) => {

                    return <button key={indx} onClick={() => { setSelectedSection(`${singleTransport?.attributes?.vehicle}`) }} className="px-5 py-2  rounded-lg text-black border ">{singleTransport?.attributes?.vehicle}</button>

                })}
            </div>
            {collection && <div className=" bg-white my-2">
                {collection && collection.map((singleTransport, indx) => {
                    return <div key={indx}>
                        {selectedSection === `${singleTransport?.attributes?.vehicle}` && <div className="bg-white">
                            <p className='text-xl lg:text-3xl font-bold bg-white px-3 text-white  py-2'>{`${singleTransport?.attributes?.vehicle}`} Price</p>
                            <h1 className="text-base text-black lg:text-2xl py-8 font-bold "> Description</h1>

                            <ul className="flex text-black flex-col gap-2 text-base lg:text-xl">

                                {
                                    singleTransport?.attributes?.PricingOptions?.map((option, indx) => {

                                        return (
                                            <li key={indx} className="flex justify-between"><p>{option.title} </p> <p>{option.price}{option.pricetag}</p></li>

                                        )
                                    })
                                }
                                {
                                    singleTransport?.attributes?.ExtraPricing?.map((option, indx) => {

                                        return (
                                            <li key={indx} className="flex justify-between"><p>{option.title} </p><p>{option.price}{option.pricetag}</p></li>

                                        )
                                    })
                                }
                            </ul>





                        </div>}

                    </div>



                })}

                {/* <div className='grid grid-cols-2 gap-5'>
                    <img className='rounded-lg' src='/sterncar.jpeg' />
                    <img className='rounded-lg' src='/sterninteriro.jpeg' />
                    <img className='rounded-lg' src='/porsche2.jpeg' />
                    <img className='rounded-lg' src='/porsche3.jpeg' />
                    <img className='rounded-lg' src='/porsche4.jpeg' />
                    <img className='rounded-lg' src='/porsche5.jpeg' />
                    <img className='rounded-lg' src='/porsche6.jpeg' />

                </div> */}
            </div>
            }
        </div>
    );
};


const BookingForm = () => {
    const { setIsBooked, isBooked } = useGlobalContext();
    const [selectedPrice, setSelectedPrice] = useState("");
    const [isSuccess, setIsSuccess] = useState("")
    const { selectedTransport } = useGlobalContext();
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        pickupDate: "",
        dropoffDate: "",
        pickupAddress: "",
        dropoffAddress: "",
        transportType: "",
        numberOfPeople: "",
        numberOfLuggages: "",
        flightNumber: "",
        otherRequest: "",
        phone: ""
    });
    const [date, setDate] = useState({
        'arrival': new Date(),
        'departure': new Date(),
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    useEffect(() => {
        setFormData(JSON.parse(localStorage.getItem('fromData')) || {})
        setSelectedPrice(JSON.parse(localStorage.getItem('fromData'))?.selectedPrice || null)
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('fromData', JSON.stringify({ ...formData, "selectedPrice": selectedPrice }))
        submitTransportForm(null, { ...formData, "selectedPrice": selectedPrice })
        return;
        if (session_id) {
            toast.error("Please refrash the page");
            router.push("/book?category=transport")
            return;
        }
        if (selectedPrice === 'Chauffeur-Full day (8 Hours)') {
            submitTransportForm(null, { ...formData, "selectedPrice": selectedPrice })
        } else {
            checkout({
                lineItems: [{ price: 'price_1O1SJQF65j8JGYI7ebPYLLA8', quantity: 1 }],
                route: 'book?category=transport',
            })
        }




        // Handle form submission here (e.g., send data to the server)

        // // Reset form data
        // setFormData({
        //     name: "",
        //     email: "",
        //     pickupDate: "",
        //     pickupAddress: "",
        //     dropoffAddress: "",
        //     transportType: "",
        //     numberOfPeople: "",
        //     numberOfLaguage: "",
        //     flightNumber: "",
        //     otherRequest: "",
        // });
    };
    const submitTransportForm = (session_id, transPortData) => {
        const { arrival, departure } = date
        if (!arrival || !departure) {
            toast.error("Please fillup the form");
            return
        }
        if (!transPortData) {
            return
        }
        localStorage.clear('fromData')
        if (!transPortData || !transPortData.email || !transPortData.phone) {
            toast.error("Please Fill up the form");
            return;
        }
        console.log(transPortData)
        if (session_id) {

            const data = {
                "data": {
                    "dropoffaddress": transPortData.dropoffAddress,
                    "pickupaddress": transPortData.pickupAddress,
                    "name": transPortData.name,
                    "transporttype": `${selectedTransport.vehicle}- ${transPortData.selectedPrice}`,
                    "pickupdate": arrival,
                    "dropoffdate": departure,
                    "email": transPortData.email,
                    "phone": transPortData.phone,
                    "flightnumber": transPortData.flightNumber,
                    "otherrequest": transPortData.otherRequest,
                    "luggages": parseInt(transPortData.numberOfLuggages),
                    "numberofpeople": parseInt(transPortData.numberOfPeople),
                    "payment": "Paid",
                    "payment_id": session_id,
                }
            }
            const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/transport-requests`;
            const token = `${process.env.NEXT_PUBLIC_API_TOKEN}`;

            const headers = {
                Authorization: `Bearer ${token}`,
            };
            axios.post(apiUrl, data, { headers })
                .then((response) => {
                    // Handle the response data here
                    //console.log(response.data)
                    if (response.data.data.id) {
                        setIsSuccess(true)
                        toast.success("Thank you for booking")
                        setIsBooked(true)
                        setFormData({
                            name: "",
                            email: "",
                            pickupDate: "",
                            pickupAddress: "",
                            dropoffAddress: "",
                            transportType: "",
                            numberOfPeople: "",
                            numberOfLuggages: "",
                            flightNumber: "",
                            otherRequest: "",
                            phone: ""
                        })
                        router.push(`/success?session_id=${session_id}&email=${transPortData.email}&name=${transPortData.name}`)

                    } else {
                        isSuccess(false)
                        setIsBooked(false)
                        toast.error("Please try again!")
                        router.push(`/error?session_id=${session_id}&email=${transPortData.email}&name=${transPortData.name}`)
                    }
                })
                .catch((error) => {
                    // Handle any errors here
                    console.error(error);
                });

        } else {

            const data = {
                "data": {
                    "dropoffaddress": transPortData.dropoffAddress,
                    "pickupaddress": transPortData.pickupAddress,
                    "name": transPortData.name,
                    "transporttype": `${selectedTransport.vehicle}- ${transPortData.selectedPrice}`,
                    "pickupdate": arrival,
                    "dropoffdate": departure,
                    "email": transPortData.email,
                    "phone": transPortData.phone,
                    "flightnumber": transPortData.flightNumber,
                    "otherrequest": transPortData.otherRequest,
                    "luggages": transPortData.numberOfLuggages,
                    "numberofpeople": transPortData.numberOfPeople,
                }
            }
            const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/transport-requests`;
            const token = `${process.env.NEXT_PUBLIC_API_TOKEN}`;

            const headers = {
                Authorization: `Bearer ${token}`,
            };
            axios.post(apiUrl, data, { headers })
                .then((response) => {
                    // Handle the response data here
                    //console.log("Transport Booking response Data-->", response.data)
                    if (response.data.data.id) {
                        setIsSuccess(true)
                        toast.success("Thank you for booking")
                        setIsBooked(true)
                        setFormData({
                            name: "",
                            email: "",
                            pickupDate: "",
                            pickupAddress: "",
                            dropoffAddress: "",
                            transportType: "",
                            numberOfPeople: "",
                            numberOfLuggages: "",
                            flightNumber: "",
                            otherRequest: "",
                            phone: ""
                        })
                        router.push(`/success?session_id=not_paid&email=${transPortData.email}&name=${transPortData.name}`)
                    } else {
                        isSuccess(false)
                        setIsBooked(false)
                        toast.error("Please try again!")
                        router.push(`/error?session_id=${session_id}&email=${transPortData.email}&name=${transPortData.name}`)
                    }
                })
                .catch((error) => {
                    // Handle any errors here
                    toast.error("Pleae try again later")
                    router.push(`/error?session_id=${session_id}&email=${transPortData.email}&name=${transPortData.name}`)
                    console.error(error);
                });

        }

    }
    const searchParams = useSearchParams()
    const session_id = searchParams.get('session_id')
    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('fromData'))
        if (session_id) {

            submitTransportForm(session_id, localData)
        } else {
            submitTransportForm(null, localData)
        }

    }, [session_id])

    const handlePriceChange = (event) => {
        setSelectedPrice(event.target.value);
    };
    // const [collection, setCollection] = useCollection('/api/transport-prices')

    return (
        <div className="w-full bg-white   max-w-md mx-auto font-italian text-black ">

            {<div>
                <div>
                    <h1 className='text-3xl lg:text-5xl font-italian text-center'>
                        Book Transport
                    </h1>


                </div>
                <form onSubmit={handleSubmit} className=" rounded px-0 lg:px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label htmlFor="price" className="text-base lg:text-2xl my-1 block font-italian font-bold mb-4">
                            Select Option:
                        </label>
                        <select
                            id="price"
                            name="price"
                            value={selectedPrice}
                            onChange={handlePriceChange}
                            className="bg-white w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                        >
                            <option value="">Select a Option</option>
                            <option value={`Malaga Airport - Marbella`}>
                                Malaga Airport - Marbella
                            </option>
                            <option value={`Marbella - Malaga Airport`}>
                                Marbella - Malaga Airport
                            </option>
                            <option value={`Private Booking (4 Hours)`}>
                                Private Booking (4 Hours)
                            </option>
                            <option value={`Private Booking Full day (8 Hours)`}>
                                Private Booking Full Day (8 Hours)
                            </option>
                            <option value={`Enquiry (More Than 1 day)`}>
                                Enquiry (More Than 1 Day)
                            </option>
                            {/* {collection && collection.map((singleTransport) => {

                                return singleTransport?.attributes?.PricingOptions.map((option, index) => {

                                    return (
                                        <option key={option.title} value={`${singleTransport?.attributes?.vehicle}-${option.title}`}>
                                            {`${singleTransport?.attributes?.vehicle}-${option.title}`}
                                        </option>
                                    )
                                })


                            })} */}

                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="text-base lg:text-2xl my-1 block font-italian font-bold mb-4" htmlFor="name">
                            Name
                        </label>
                        <input
                            className=" appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2  gap-2 lg:gap-5">


                        <div className="mb-4">
                            <label className="text-base lg:text-2xl my-1 block font-italian font-bold mb-4" htmlFor="email">
                                Email
                            </label>
                            <input
                                className=" appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-base lg:text-2xl my-1 block font-italian font-bold mb-4" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                className=" appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:"
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="bg-white grid grid-cols-2 text-black gap-2 lg:gap-5">
                        <div className="mb-4">
                            <label className="text-base lg:text-2xl my-1 block font-italian font-bold mb-4" htmlFor="pickupDate">
                                Pickup Date
                            </label>
                            {/* <input
                                className=" bg-white border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:"
                                type="datetime-local"
                                id="pickupDate"
                                name="pickupDate"
                                value={formData.pickupDate}
                                onChange={handleChange}
                                required
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
                        <div className="mb-4">
                            <label className="text-base lg:text-2xl my-1 block font-italian font-bold mb-4" htmlFor="pickupDate">
                                Return Date
                            </label>
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

                    <div className="grid grid-cols-2  gap-2 lg:gap-5">
                        <div className="mb-4">
                            <label className="text-base lg:text-2xl my-1 block font-italian font-bold mb-4" htmlFor="pickupAddress">
                                Pickup Address
                            </label>
                            <input
                                className=" appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:"
                                type="text"
                                id="pickupAddress"
                                name="pickupAddress"
                                placeholder="Pickup Address"
                                value={formData.pickupAddress}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-base lg:text-2xl my-1 block font-italian font-bold mb-4" htmlFor="dropoffAddress">
                                Dropoff Address
                            </label>
                            <input
                                className=" appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:"
                                type="text"
                                id="dropoffAddress"
                                name="dropoffAddress"
                                placeholder="Dropoff Address"
                                value={formData.dropoffAddress}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>

                    <div className="grid grid-cols-2  gap-2 lg:gap-5">
                        <div className="mb-4">
                            <select
                                className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:"
                                id="numberOfPeople"
                                name="numberOfPeople"
                                value={formData.numberOfPeople}
                                onChange={handleChange}
                                required
                            >
                                <option value="1">1 person</option>
                                <option value="2">2 people</option>
                                <option value="3">3 people</option>
                                <option value="4">4 people</option>
                                <option value="5">5 people</option>
                                <option value="6">6 people</option>
                            </select>
                        </div>

                        <div className="mb-4">

                            <select
                                className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:"
                                id="numberOfLuggages"
                                name="numberOfLuggages"
                                value={formData.numberOfLuggages}
                                onChange={handleChange}
                                required
                            >
                                <option value="1">1 luggage</option>
                                <option value="2">2 luggages</option>
                                <option value="3">3 luggages</option>
                                <option value="4">4 luggages</option>
                                <option value="5">5 luggages</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1  gap-2 lg:gap-5">
                        <div className="mb-4">
                            <label className="text-base lg:text-2xl my-1 block font-italian font-bold mb-4" htmlFor="flightNumber">
                                Flight Number
                            </label>
                            <input
                                className=" appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:"
                                type="text"
                                id="flightNumber"
                                name="flightNumber"
                                placeholder="Flight number"
                                value={formData.flightNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>

                    <div className="mb-4">
                        <label className="text-base lg:text-2xl my-1 block font-italian font-bold mb-4" htmlFor="otherRequest">
                            Other Request
                        </label>
                        <textarea
                            className=" appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:"
                            id="otherRequest"
                            name="otherRequest"
                            placeholder="How can we help you?"
                            value={formData.otherRequest}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4 flex flex-row  gap-2 lg:gap-5 justify-center items-center">
                        <button
                            className="bg-black  text-white font-bold py-2 px-4 rounded focus:outline-none focus:"
                            type="submit"
                        >
                            Book Now
                        </button>

                    </div>
                </form >
            </div>
            }
        </div >
    );
};




const BookTransport = () => {
    return (
        <div className="bg-white  p-5 lg:p-10 grid lg:grid-cols-2 gap-5">

            <div className="">
                <PricingSection />

            </div>
            <div>
                <BookingForm />
            </div>
        </div>
    )
};

export default BookTransport;