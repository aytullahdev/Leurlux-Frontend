import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";
const PricingOptions = [
    {
        title: "Malaga Airport - Marbella",

    },
    {
        title: "Marbella - Malaga Airport",

    },
    {
        title: "Full day",
    },

];
const ExtraPricing = [
    {
        title: "Full day additional hours",
        price: "(more than 9 hours) 120€",
        description: "For every hour beyond 9 hours, an additional cost of 120€ will be charged."
    },
    {
        title: "By the hour",
        price: "Minimum 4 hours) 150€",
        description: "Minimum booking duration is 4 hours at a rate of 150€ per hour."
    }
];

const PricingSection = () => {
    const [selectedSection, setSelectedSection] = useState('chauffeur')
    return (
        <div>
            <div className=" mx-4 my-2">
                <div className="my-5 flex flex-row gap-5">
                    <button onClick={() => { setSelectedSection('chauffeur') }} className="px-5 py-2  rounded-lg text-black border ">Chauffeur</button>
                    <button onClick={() => { setSelectedSection('porsche') }} className="px-5 py-2  rounded-lg text-black border ">Porsche</button>
                </div>
                <div>
                    {selectedSection === 'chauffeur' && <div className="bg-white">
                        <p className='text-3xl font-bold bg-gray-600 px-3 text-white  py-2'>Chauffeur Price</p>
                        <h1 className="text-2xl py-8 font-bold "> Description</h1>

                        <ul className="flex flex-col gap-2 text-xl">
                            <li className="flex justify-between"><p>Malaga Airport - Marbella </p> <p>185€</p></li>
                            <li className="flex justify-between"><p>Marbella - Malaga Airport </p> <p>185€</p></li>
                            <li className="flex justify-between"><p> By the hour( Minimum 4 hours) </p> <p>225€</p></li>
                            <li className="flex justify-between"><p> Full day (8 Hours) </p> <p> 185€/hour</p></li>
                            <li className="flex justify-between"><p>  Full-day additional rate (After 9 Hours) </p> <p>120€</p></li>
                        </ul>





                    </div>}
                    {selectedSection === 'porsche' && <div className="bg-white">
                        <p className='text-3xl font-bold bg-gray-600 text-white px-3 py-2'>Porsche Price</p>
                        <h1 className="text-2xl py-8 font-bold "> Description</h1>

                        <ul className="flex flex-col gap-2 text-xl">
                            <li className="flex justify-between"><p>Malaga Airport - Marbella </p> <p>185€</p></li>
                            <li className="flex justify-between"><p>Marbella - Malaga Airport </p> <p>185€</p></li>
                            <li className="flex justify-between"><p> By the hour( Minimum 4 hours) </p> <p>225€</p></li>
                            <li className="flex justify-between"><p> Full day (8 Hours) </p> <p> 185€/hour</p></li>
                            <li className="flex justify-between"><p>  Full day additional hours (more than 9 hours) </p> <p>120€</p></li>
                        </ul>





                    </div>}

                </div>
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
        </div>
    );
};


const BookingForm = () => {
    const [selectedPrice, setSelectedPrice] = useState("");
    const [formData, setFormData] = useState({
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

    return (
        <div className="w-full  max-w-md mx-auto font-italian ">
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
                            {PricingOptions.map((option, index) => (
                                <option key={index} value={option.title}>
                                    {option.title}
                                </option>
                            ))}
                        </select>
                    </div>
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