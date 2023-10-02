'use client'
import { GlobalContext } from '@/GlobalContext/GlobalContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { data } from 'autoprefixer';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';

const bookings = {
    'privatejet': {
        'from': {
            type: 'text',
            value: '',
            title: 'From',
        },
        'to': {
            type: 'text',
            value: '',
            title: 'To',
        },
        'departure': {
            type: 'date',
            value: '',
            title: 'Departure'
        },
        'people': {
            type: "option",
            value: {
                'adult': {
                    type: 'number',
                    value: 0,
                    title: 'adult'
                },
                'children': {
                    type: 'number',
                    value: 0,
                    title: 'children',

                }
            }
        }

    },
    'supercar': {
        'carname': {
            type: 'text',
            value: '',
            title: "Car Name"
        },
        'email': {
            type: 'email',
            value: '',
            title: 'Email',
        },
        'from': {
            type: 'text',
            value: '',
            title: 'From',
        },
        'days': {
            type: 'number',
            value: ''
        }
    }
}
const GetInputField = ({ fieldObject }) => {
    return <div className='flex justify-center items-center flex-row gap-4 text-black'>
        {/* <label>
            {fieldObject?.title}
        </label> */}
        <input className='border px-2 py-2 rounded outline-none' value={fieldObject.value} type={fieldObject?.type} placeholder={fieldObject?.title} />
    </div>
}
const GetOptionField = ({ fieldObject }) => {
    return <>{
        Object.keys(fieldObject).map((field, indx) => {
            return <GetInputField key={`optionfield${indx}`} fieldObject={fieldObject[field]} />

        })

    }</>
}
const GetBookingForm = ({ formObject }) => {


    return <div className='flex flex-row gap-4 '>
        {
            Object.keys(formObject).map((field, indx) => {
                if (formObject[field].type === 'option') {
                    return <GetOptionField key={`optionfield${indx}`} fieldObject={formObject[field].value} />
                }
                return <GetInputField key={`optionfield${indx}`} fieldObject={formObject[field]} />
            })
        }

    </div>

}
const BookPrivateJet = () => {

    const countryes = ['Europe', ' New Zealand', 'Australia', 'The South Pacific']
    return <div className='relative w-full h-full' id='bookprivatejet'>
        <video className='w-full h-full   z-40 ' autoPlay loop muted playsInline>
            <source src="https://cdn.globeair.com/website/m/globeair_website_header_2304_1920x1080.mp4" type="video/mp4" />

        </video>
        <div className='absolute inset-0 flex flex-col gap-10 items-center justify-start backdrop-blur-sm bg-white/60 py-10 px-5 rounded'>
            <div>
                <h1 className='text-6xl font-italian'>
                    Private Aircraft Charter
                </h1>
                <ul className='flex items-center justify-center flex-row  my-5 py-5 text-base'>
                    {
                        countryes.map((singleCountry) => {
                            return <li key={singleCountry} className=' font-italian text-xl text-center mx-2'>{singleCountry} |</li>
                        })
                    }

                </ul>

            </div>
            <div className='flex  flex-col gap-5 justify-center items-center'>
                <GetBookingForm formObject={bookings.privatejet} />
                <button className='px-5 py-2 bg-black text-white rounded-lg'>BOOK</button>

            </div>
        </div>


    </div>

}
const BookSuperCar = () => {
    const router = useRouter();
    const { selectedSuperCar } = useContext(GlobalContext)

    const { carname, img, price } = selectedSuperCar || {}
    const [carForm, setCarForm] = useState({
        from: '',
        email: '',
        phone: '',
        days: '',
    })
    const { from, email, phone, days } = carForm;
    const handleChange = (e) => {
        setCarForm((prev) => ({ ...carForm, [e.target.name]: e.target.value }))
    }
    const handleSubmit = () => {
        console.log(carForm)
    }
    useEffect(() => {
        AOS.init();
    }, [])
    useEffect(() => {
        if (selectedSuperCar) {
            setCarForm(prev => ({ ...prev, ...selectedSuperCar }))
        }
    }, [selectedSuperCar])
    return <div className='relative w-full h-full' id='bookprivatejet'>

        <div className='absolute inset-0 flex flex-col  items-center justify-start backdrop-blur-sm bg-white/60 py-10 px-5 rounded'>
            {selectedSuperCar ?
                <div>
                    <div>
                        <h1 className='text-6xl font-italian text-center'>
                            Request for your Car
                        </h1>


                    </div>
                    <div className='flex  flex-col gap-5 justify-center items-center  w-full text-base  mx-auto'>

                        <div data-aos="fade-left" data-aos-duration="1000">
                            <img className='scale-50' src={img} />

                        </div>
                        <div className='flex flex-col gap-5 '>
                            <div className='flex flex-row justify-start space-x-5'>
                                <input disabled className='border outline-none px-2 py-2 rounded' value={carname} />
                                <span className='px-2 py-2 rounded bg-gray-50 border'>{price}</span>
                                <input type='date' name='from' onChange={handleChange} className='border outline-none px-2 py-2 rounded' value={from} placeholder='Start Date' />

                            </div>
                            <div className='flex flex-row  justify-start space-x-5'>
                                <input name='days' onChange={handleChange} type='number' className='border outline-none px-2 py-2 rounded' value={days} placeholder='Days' />
                                <input type='email' name='email' onChange={handleChange} className='border outline-none px-2 py-2 rounded' value={email} placeholder='Email' />
                                <input type='text' name='phone' onChange={handleChange} className='border outline-none px-2 py-2 rounded' value={phone} placeholder='Phone' />

                            </div>
                            <div className='flex flex-row  items-center space-x-5 justify-center'>
                                <button onClick={() => handleSubmit()} className='block px-5 py-2 bg-black text-white rounded-lg'>Request</button>
                                <Link href="/supercars#supercars" className='block px-5 py-2  text-blue-600 underline font-italian  rounded-lg'>Back</Link>
                            </div>

                        </div>

                    </div>


                </div> :
                <div>
                    <div className='justify-center items-center flex flex-row h-full w-full py-20'>
                        <Link href={'/supercars#supercars'} className=' text-xl text-black font-italian hover:text-blue-500 underline'>Select a super car</Link>
                    </div>
                </div>
            }


        </div>
    </div>

}

const BookingFormForYacht = () => {
    const { selectedYacht } = useContext(GlobalContext); // Replace GlobalContext with your actual context

    const [formData, setFormData] = useState({
        yachtName: selectedYacht.name,
        season: 'highSeason', // Default to high season, you can change this
        email: '',
        phone: '',
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
        // Handle the form submission here, e.g., send the data to your server
        console.log('Form Data:', formData);
    };
    const checkOption = (value) => {
        return value ? true : false
    }
    return (
        <div className="bg-white rounded-lg p-6 mb-6 font-italian">
            <h2 className="text-xl font-semibold mb-4">Booking Form</h2>
            <form onSubmit={handleSubmit} >
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Yacht Name</label>
                    <input
                        type="text"
                        name="yachtName"
                        value={formData.yachtName}
                        readOnly
                        className="mt-1 p-2 w-full border rounded-md outline-black"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Season</label>
                    <select
                        name="season"
                        value={formData.season}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md outline-black"
                    >

                        {(selectedYacht.pricing?.fullDay?.highSeason?.price) && <option value={selectedYacht.pricing.fullDay.highSeason.price} className='px-3 py-1 border block rounded'>Full Day (High Season): {selectedYacht.pricing.fullDay.highSeason.price} €</option>}
                        {(selectedYacht.pricing?.halfDay?.highSeason?.price) && <option value={selectedYacht.pricing.halfDay.highSeason.price} className='px-3 py-1 border block rounded'>Half Day (High Season): {selectedYacht.pricing.halfDay.highSeason.price} €</option>}
                        {(selectedYacht.pricing?.fullDay?.lowSeason?.price) && <option value={selectedYacht.pricing.fullDay.lowSeason.price} className='px-3 py-1 border block rounded'>Full Day (Low Season): {selectedYacht.pricing.fullDay.lowSeason.price} €</option>}
                        {(selectedYacht.pricing?.halfDay?.lowSeason?.price) && <option value={selectedYacht.pricing.halfDay.lowSeason.price} className='px-3 py-1 border block rounded'>Half Day (Low Season): {selectedYacht.pricing.halfDay.lowSeason.price} €</option>}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md outline-black"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md outline-black"
                        required
                    />
                </div>
                <div className='flex flex-row gap-5 items-center justify-center'>
                    <button
                        type="submit"
                        className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-md"
                    >
                        Book Now
                    </button>
                    <Link href="/yacht#yachts" className='mx-5  block underline text-base font-italian'>Back</Link>
                </div>
            </form>
        </div>
    );
};




const BookYacht = () => {
    const { selectedYacht } = useContext(GlobalContext)
    const [selectedSection, setSelectedSection] = useState('specifications')
    return <>{
        selectedYacht ?
            <>
                <div className=' grid grid-cols-2 gap-5 my-10'>

                    <div>
                        <div>
                            <h2 className='text-4xl font-italian text-center'>{selectedYacht.name}</h2>
                        </div>
                        <div className='p-10'>
                            <div className='w-full h-full'>
                                <img src={selectedYacht.images[0]} className='rounded-lg' />
                            </div>
                            <div className='flex flex-row gap-5 my-2'>
                                {
                                    selectedYacht.images.map((singleImage) => {
                                        return <img src={singleImage} className='w-40 h-40 rounded-lg' />
                                    })
                                }
                            </div>
                        </div>
                        <div className='px-10 py-5'>
                            <div className='flex flex-row justify-around items-center'>
                                <button onClick={() => setSelectedSection('specifications')} className='px-8 py-2 text-2xl font-italian  underline rounded-lg hover:bg-gray-50' >Specifications</button>
                                <button onClick={() => setSelectedSection('features')} className='px-8 py-2 text-2xl font-italian  underline rounded-lg hover:bg-gray-50' >Features</button>
                                <button onClick={() => setSelectedSection('included')} className='px-8 py-2 text-2xl font-italian  underline rounded-lg hover:bg-gray-50' >Included</button>
                                <button onClick={() => setSelectedSection('pricing')} className='px-8 py-2 text-2xl font-italian  underline rounded-lg hover:bg-gray-50' >Pricing</button>
                            </div>
                            <div>
                                {
                                    selectedSection === 'specifications' && <>
                                        <div className='bg-white border p-5'>
                                            <h3 className='text-3xl font-italian'>Specifications:</h3>
                                            <ul className='px-10 py-5 text-xl flex flex-row flex-wrap gap-2'>
                                                <li className='px-3 py-1 border block rounded'>Capacity: {selectedYacht.specs.capacity}</li>
                                                <li className='px-3 py-1 border block rounded'>Cabins: {selectedYacht.specs.cabins}</li>
                                                <li className='px-3 py-1 border block rounded'>WC: {selectedYacht.specs.wc}</li>
                                                <li className='px-3 py-1 border block rounded'>Length: {selectedYacht.specs.length}</li>
                                                <li className='px-3 py-1 border block rounded'>Beam: {selectedYacht.specs.beam}</li>
                                                <li className='px-3 py-1 border block rounded'>Charter Speed: {selectedYacht.specs.charterSpeed}</li>
                                            </ul>
                                        </div>
                                    </>
                                }
                                {
                                    selectedSection === 'features' && <>
                                        <div className='bg-white border p-5'>
                                            <h3 className='text-3xl font-italian'>Features:</h3>
                                            <ul className='px-10 py-5 text-xl flex flex-row flex-wrap gap-2'>
                                                {selectedYacht.features.map((feature, index) => (
                                                    <li className='px-3 py-1 border block rounded' key={index}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>

                                    </>
                                }

                                {
                                    selectedSection === 'included' && <>

                                        <div className='bg-white border p-5'>
                                            <h3 className='text-3xl font-italian'>Included:</h3>
                                            <ul className='px-10 py-5 text-xl flex flex-row flex-wrap gap-2'>
                                                {selectedYacht.included.map((item, index) => (
                                                    <li className='px-3 py-1 border block rounded' key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                }
                                {
                                    selectedSection === 'pricing' && <>
                                        <div className='bg-white border p-5'>
                                            <h3 className='text-3xl font-italian'>Pricing:</h3>
                                            <div className='px-5 py-5 text-xl flex flex-row flex-wrap gap-2'>
                                                <div className=''>
                                                    <p className='px-3 py-1 text-xl font-bold font-italian '>Seasons: High Season - {selectedYacht.pricing.seasons.highSeason}, Low Season - {selectedYacht.pricing.seasons.lowSeason}</p>
                                                </div>
                                                <div className=' w-full grid grid-cols-2 gap-2'>

                                                    <div className='flex flex-col gap-5'>
                                                        <h1 className='text-3x font-italian py-2'>High Season</h1>
                                                        {(selectedYacht.pricing?.fullDay?.highSeason?.price) && <p className='px-3 py-1 border block rounded'>Full Day (High Season): {selectedYacht.pricing.fullDay.highSeason.price} €</p>}
                                                        {(selectedYacht.pricing?.halfDay?.highSeason?.price) && <p className='px-3 py-1 border block rounded'>Half Day (High Season): {selectedYacht.pricing.halfDay.highSeason.price} €</p>}
                                                    </div>
                                                    <div className='flex flex-col gap-5'>
                                                        <h1 className='text-3x font-italian py-2'>Low Season</h1>
                                                        {(selectedYacht.pricing?.fullDay?.lowSeason?.price) && <p className='px-3 py-1 border block rounded'>Full Day (Low Season): {selectedYacht.pricing.fullDay.lowSeason.price} €</p>}
                                                        {(selectedYacht.pricing?.halfDay?.lowSeason?.price) && <p className='px-3 py-1 border block rounded'>Half Day (Low Season): {selectedYacht.pricing.halfDay.lowSeason.price} €</p>}
                                                    </div>
                                                </div>
                                                <div className=' w-full grid grid-cols-2 gap-2'>

                                                    <div className='flex flex-col gap-5'>
                                                        <h1 className='text-3x font-italian py-2'>Morning Cruise</h1>
                                                        <p className='px-3 py-1 border block rounded'>Morning Cruise Time: {selectedYacht.pricing.morningCruiseTime}</p>
                                                    </div>
                                                    <div className='flex flex-col gap-5'>
                                                        <h1 className='text-3x font-italian py-2'>Afternoon Cruise</h1>
                                                        <p className='px-3 py-1 border block rounded'>Afternoon Cruise Time: {selectedYacht.pricing.afternoonCruiseTime}</p>
                                                    </div>
                                                </div>
                                                <p className='px-3 py-1 border block rounded'>Fuel Consumption: {selectedYacht.pricing.fuelConsumption}</p>



                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <BookingFormForYacht />

                    </div>
                </div>
            </>
            :
            <div className='justify-center items-center flex flex-row h-full w-full py-20'>
                <Link href={'/yacht#yachts'} className=' text-xl text-black font-italian hover:text-blue-500 underline'>Select a yacht</Link>
            </div>
    }</>
}
const BookService = ({ category }) => {

    if (category === 'privatejet') {
        return <BookPrivateJet />
    }
    if (category === 'supercar') {
        return <BookSuperCar />
    }
    if (category === 'yacht') {
        return <BookYacht />
    }
    return <>
        {category}
    </>

}
const page = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get('category')

    return (
        <>
            {
                category &&
                <BookService category={category} />

            }
        </>
    );
};

export default page;