'use client'
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";
import axios from "axios";
import { toast } from "sonner";
import useGlobalContext from "@/hooks/useGlobalContext";
import BookingSuccess from "../resueable/BookingSuccess";
import useCollection from "@/hooks/useCollection";

const PricingSection = () => {
    const [selectedSection, setSelectedSection] = useState('Chauffeur')
    const [collection] = useCollection('/api/transport-prices')

    return (
        <div>
            <div className="my-5 flex flex-row gap-5">
                {collection && collection.map((singleTransport, indx) => {

                    return <button key={indx} onClick={() => { setSelectedSection(`${singleTransport?.attributes?.vehicle}`) }} className="px-5 py-2  rounded-lg text-black border ">{singleTransport?.attributes?.vehicle}</button>

                })}
            </div>
            {collection && <div className="  my-2">
                {collection && collection.map((singleTransport, indx) => {
                    return <div key={indx}>
                        {selectedSection === `${singleTransport?.attributes?.vehicle}` && <div className="bg-white">
                            <p className='text-3xl font-bold bg-gray-600 px-3 text-white  py-2'>{`${singleTransport?.attributes?.vehicle}`} Price</p>
                            <h1 className="text-2xl py-8 font-bold "> Description</h1>

                            <ul className="flex flex-col gap-2 text-xl">

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to the server)
        console.log(formData);
        const data = {
            "data": {
                "dropoffaddress": formData.dropoffAddress,
                "pickupaddress": formData.pickupAddress,
                "name": formData.name,
                "transporttype": selectedPrice,
                "pickupdate": formData.pickupDate,
                "dropoffdate": formData.dropoffDate,
                "email": formData.email,
                "phone": formData.phone,
                "flightnumber": formData.flightNumber,
                "otherrequest": formData.otherRequest,
                "luggages": formData.numberOfLuggages,
                "numberofpeople": formData.numberOfPeople
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
                } else {
                    isSuccess(false)
                    setIsBooked(false)
                    toast.error("Please try again!")
                }
            })
            .catch((error) => {
                // Handle any errors here
                console.error(error);
            });
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


    const handlePriceChange = (event) => {
        setSelectedPrice(event.target.value);
    };
    const [collection, setCollection] = useCollection('/api/transport-prices')

    return (
        <div className="w-full  max-w-md mx-auto font-italian ">
            <BookingSuccess />
            {!isBooked && <div>
                <div>
                    <h1 className='text-5xl font-italian text-center'>
                        Book Transport
                    </h1>


                </div>
                <form onSubmit={handleSubmit} className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="mb-4">
                            <label className="text-2xl my-1 block font-italian font-bold mb-4" htmlFor="name">
                                Name
                            </label>
                            <input
                                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-2xl my-1 block font-italian font-bold mb-4" htmlFor="email">
                                Email
                            </label>
                            <input
                                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="mb-4">
                            <label className="text-2xl my-1 block font-italian font-bold mb-4" htmlFor="pickupDate">
                                Pickup Date
                            </label>
                            <input
                                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:"
                                type="datetime-local"
                                id="pickupDate"
                                name="pickupDate"
                                value={formData.pickupDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-2xl my-1 block font-italian font-bold mb-4" htmlFor="pickupDate">
                                Drop Off Date
                            </label>
                            <input
                                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:"
                                type="datetime-local"
                                id="dropoffdate"
                                name="dropoffDate"
                                value={formData.dropoffDate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="text-2xl my-1 block font-italian font-bold mb-4">
                            Select Option:
                        </label>
                        <select
                            id="price"
                            name="price"
                            value={selectedPrice}
                            onChange={handlePriceChange}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                        >
                            <option value="">Select a Option</option>
                            {collection && collection.map((singleTransport) => {

                                return singleTransport?.attributes?.PricingOptions.map((option, index) => {

                                    return (
                                        <option key={option.title} value={`${singleTransport?.attributes?.vehicle}-${option.title}`}>
                                            {`${singleTransport?.attributes?.vehicle}-${option.title}`}
                                        </option>
                                    )
                                })


                            })}

                        </select>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="mb-4">
                            <label className="text-2xl my-1 block font-italian font-bold mb-4" htmlFor="pickupAddress">
                                Pickup Address
                            </label>
                            <input
                                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:"
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
                            <label className="text-2xl my-1 block font-italian font-bold mb-4" htmlFor="dropoffAddress">
                                Dropoff Address
                            </label>
                            <input
                                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:"
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

                    <div className="grid grid-cols-2 gap-5">
                        <div className="mb-4">
                            <input
                                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:"
                                type="number"
                                id="numberOfPeople"
                                name="numberOfPeople"
                                placeholder="Number of people"
                                value={formData.numberOfPeople}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-4">

                            <input
                                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:"
                                type="number"
                                id="numberOfLuggages"
                                name="numberOfLuggages"
                                placeholder="luggages"
                                value={formData.numberOfLaguage}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="mb-4">
                            <label className="text-2xl my-1 block font-italian font-bold mb-4" htmlFor="flightNumber">
                                Flight Number
                            </label>
                            <input
                                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:"
                                type="text"
                                id="flightNumber"
                                name="flightNumber"
                                placeholder="Flight number"
                                value={formData.flightNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-2xl my-1 block font-italian font-bold mb-4" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:"
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

                    <div className="mb-4">
                        <label className="text-2xl my-1 block font-italian font-bold mb-4" htmlFor="otherRequest">
                            Other Request
                        </label>
                        <textarea
                            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:"
                            id="otherRequest"
                            name="otherRequest"
                            placeholder="How can we help you?"
                            value={formData.otherRequest}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4 flex flex-row gap-5 justify-center items-center">
                        <button
                            className="bg-black  text-white font-bold py-2 px-4 rounded focus:outline-none focus:"
                            type="submit"
                        >
                            Book Now
                        </button>
                        <Link href={'/#services'} className=' text-xl text-black font-italian hover:text-blue-500 underline'>services</Link>

                    </div>
                </form >
            </div>
            }
        </div >
    );
};




const BookTransport = () => {
    return (
        <div className="p-10 grid grid-cols-2 gap-5">
            <div>
                <PricingSection />

            </div>
            <div>
                <BookingForm />
            </div>
        </div>
    )
};

export default BookTransport;