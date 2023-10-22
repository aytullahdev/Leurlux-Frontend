'use client'
import { GlobalContext } from '@/GlobalContext/GlobalContext';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import GalleryCarousel from '@/components/resueable/GalleryCarousel';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import { useRouter } from 'next/navigation';

const BookingFormForYacht = () => {
    const { selectedYacht } = useContext(GlobalContext); // Replace GlobalContext with your actual context
    const router = useRouter()
    const [formData, setFormData] = useState({
        yachtName: selectedYacht.name,
        season: 'Full Day (High Season)',
        email: '',
        phone: '',
        fullname: '',
        bookdate: '',
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
        const { fullname, email, phone, bookdate, season, yachtName } = formData;
        if (!fullname || !email || !phone || !bookdate || !yachtName || !season) {
            toast.error("Fill up all the data")
            return
        }

        // Handle the form submission here, e.g., send the data to your server
        console.log('Form Data:', formData);


        const data = {
            "data": {
                "name": fullname,
                "bookdate": bookdate,
                "email": email,
                "phone": phone,
                "yachtname": yachtName,
                "season": season

            }
        }
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/yacht-requests`;
        const token = `${process.env.NEXT_PUBLIC_API_TOKEN}`;
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios.post(apiUrl, data, { headers })
            .then((response) => {
                // Handle the response data here
                // console.log(response.data)
                if (response.data.data.id) {

                    toast.success("Thank you for booking")

                    setFormData({
                        yachtName: selectedYacht.name,
                        season: 'Full Day (High Season)',
                        email: '',
                        phone: '',
                        fullname: '',
                        bookdate: '',
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
    };
    return (
        <div className="bg-white rounded-lg px-6 pt-6 mb-6 font-italian">
            <h2 className="text-3xl font-italian font-bold mb-4">Booking Form</h2>
            <form onSubmit={handleSubmit} >
                <div className="mb-4 flex flex-col justify-start gap-2 text-base lg:text-xl ">
                    <label className='font-italian'>Yacht Name</label>
                    <input
                        type="text"
                        name="yachtName"
                        value={formData.yachtName}
                        readOnly
                        className="mt-1 p-2  font-thin  w-full border rounded-md outline-black"
                    />
                </div>
                <div className="mb-4 flex flex-col justify-start gap-2 text-base lg:text-xl ">
                    <label className='font-italian'>Season</label>
                    <select
                        name="season"
                        value={formData.season}
                        onChange={handleInputChange}
                        className="mt-1 p-2 bg-white font-thin  w-full border rounded-md outline-black"
                    >

                        {(selectedYacht.pricing?.fullDay?.highSeason?.price) && <option value="Full Day (High Season)" className='px-3 py-1 border block rounded'>Full Day (High Season)</option>}
                        {(selectedYacht.pricing?.halfDay?.highSeason?.price) && <option value="Half Day (High Season)" className='px-3 py-1 border block rounded'>Half Day (High Season)</option>}
                        {(selectedYacht.pricing?.fullDay?.lowSeason?.price) && <option value="Full Day (Low Season)" className='px-3 py-1 border block rounded'>Full Day (Low Season)</option>}
                        {(selectedYacht.pricing?.halfDay?.lowSeason?.price) && <option value="Half Day (Low Season)" className='px-3 py-1 border block rounded'>Half Day (Low Season)</option>}
                    </select>
                </div>

                <div className="mb-4 flex flex-col justify-start gap-2 text-base lg:text-xl ">
                    <label className='font-italian'>Booking Date</label>
                    <input
                        type="datetime-local"
                        name="bookdate"
                        value={formData.bookdate}
                        onChange={handleInputChange}
                        placeholder='Date'
                        className="mt-1 p-2  bg-white font-thin  w-full border rounded-md outline-black"
                        required
                    />
                </div>
                <div className="mb-4 flex flex-col justify-start gap-2 text-base lg:text-xl ">

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
                <div className="mb-4 flex flex-col justify-start gap-2 text-base lg:text-xl ">

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
                <div className="mb-4 flex flex-col justify-start gap-2 text-base lg:text-xl ">
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
                <div className='flex flex-row gap-5 items-center justify-center'>
                    <button
                        type="submit"
                        className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-md"
                    >
                        Request
                    </button>
                    <Link href="/yachts#yachts" className='mx-5  block underline text-base font-italian'>Back</Link>
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
                <div className='bg-white text-black grid lg:grid-cols-2 gap-5 my-10'>

                    <div>
                        <div>
                            <h2 className='text-xl lg:text-4xl font-italian text-center'>{selectedYacht.name}</h2>
                        </div>
                        <div className=' lg:px-10 py-5'>
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
                            <div className='w-screen lg:w-full p-2 overflow-hidden'>
                                <GalleryCarousel slidesPerView={1} images={selectedYacht.images} />
                            </div>

                        </div>
                        <div className=' lg:px-10 py-5 '>
                            <div className='flex flex-row px-10 gap-2  flex-wrap mb-5   justify-around items-center'>
                                <button onClick={() => setSelectedSection('specifications')} className='px-2 border lg:px-8 py-2 text-base lg:text-2xl font-italian  underline rounded-lg hover:bg-gray-50' >Specifications</button>
                                <button onClick={() => setSelectedSection('features')} className='px-2 border lg:px-8 py-2 text-base lg:text-2xl font-italian  underline rounded-lg hover:bg-gray-50' >Features</button>
                                <button onClick={() => setSelectedSection('included')} className='px-2 border lg:px-8 py-2 text-base lg:text-2xl font-italian  underline rounded-lg hover:bg-gray-50' >Included</button>
                                <button onClick={() => setSelectedSection('pricing')} className='px-2 border lg:px-8 py-2 text-base lg:text-2xl font-italian  underline rounded-lg hover:bg-gray-50' >Pricing</button>
                                {selectedYacht.pdf && < Link href={selectedYacht.pdf} target='_blank' className='px-2 border lg:px-8 py-2 text-base lg:text-2xl font-italian  underline rounded-lg hover:bg-gray-50' >More Details</Link>}

                            </div>
                            <div className='overflow-hidden'>
                                {
                                    selectedSection === 'specifications' && <>
                                        <div className='bg-white border p-5'>
                                            <h3 className='text-xl lg:text-3xl font-italian'>Specifications:</h3>
                                            <ul className='lg:px-10 py-5 text-base lg:text-xl font-thin flex flex-row flex-wrap gap-2'>
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
                                            <h3 className='text-base lg:text-3xl font-italian'>Features:</h3>
                                            <ul className='px-10 py-5 text-base lg:text-xl font-thin flex flex-row flex-wrap gap-2'>
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
                                            <h3 className='text-base lg:text-3xl font-italian'>Included:</h3>
                                            <ul className='px-10 py-5 text-xl font-thin flex flex-row flex-wrap gap-2'>
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
                                            <h3 className='text-base lg:text-3xl font-italian'>Pricing:</h3>
                                            <div className='px-5 py-5 text-base lg:text-xl flex flex-row flex-wrap gap-2'>
                                                <div className=''>
                                                    <p className='lg:px-3 py-1 text-base lg:text-xl font-bold font-italian '>Seasons: High Season - {selectedYacht.pricing.seasons.highSeason}, Low Season - {selectedYacht.pricing.seasons.lowSeason}</p>
                                                </div>
                                                <div className=' w-full grid grid-cols-2 gap-2 font-thin'>

                                                    <div className='flex flex-col gap-1 lg:gap-5'>
                                                        <h1 className='text-3x font-italian py-2'>High Season</h1>
                                                        {(selectedYacht.pricing?.fullDay?.highSeason?.price) && <p className='px-3 py-1 border block rounded'>Full Day (High Season): {selectedYacht.pricing.fullDay.highSeason.price} €</p>}
                                                        {(selectedYacht.pricing?.halfDay?.highSeason?.price) && <p className='px-3 py-1 border block rounded'>Half Day (High Season): {selectedYacht.pricing.halfDay.highSeason.price} €</p>}
                                                    </div>
                                                    <div className='flex flex-col gap-1 lg:gap-5'>
                                                        <h1 className='text-3x font-italian py-2'>Low Season</h1>
                                                        {(selectedYacht.pricing?.fullDay?.lowSeason?.price) && <p className='px-3 py-1 border block rounded'>Full Day (Low Season): {selectedYacht.pricing.fullDay.lowSeason.price} €</p>}
                                                        {(selectedYacht.pricing?.halfDay?.lowSeason?.price) && <p className='px-3 py-1 border block rounded'>Half Day (Low Season): {selectedYacht.pricing.halfDay.lowSeason.price} €</p>}
                                                    </div>
                                                </div>
                                                <div className=' w-full grid grid-cols-2 gap-2 font-thin'>

                                                    <div className='flex flex-col gap-1 lg:gap-5 font-thin'>
                                                        <h1 className='text-3x font-italian py-2'>Morning Cruise</h1>
                                                        <p className='px-3 py-1 border block rounded'>Morning Cruise Time: {selectedYacht.pricing.morningCruiseTime}</p>
                                                    </div>
                                                    <div className='flex flex-col gap-1 lg:gap-5'>
                                                        <h1 className='text-3x font-italian py-2'>Afternoon Cruise</h1>
                                                        <p className='px-3 py-1 border block rounded'>Afternoon Cruise Time: {selectedYacht.pricing.afternoonCruiseTime}</p>
                                                    </div>
                                                </div>
                                                <p className='px-3 py-1 border block rounded font-thin'>Fuel Consumption: {selectedYacht.pricing.fuelConsumption}</p>



                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <BookingFormForYacht />

                    </div>
                </div>
            </>
            :
            <div className='bg-white justify-center items-center flex flex-row h-screen w-screen py-20'>
                <Link href={'/yachts#yachts'} className=' text-xl text-black font-italian hover:text-blue-500 underline'>Select a yacht</Link>
            </div>
    }</>
}

export default BookYacht;