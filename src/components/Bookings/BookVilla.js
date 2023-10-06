import { GlobalContext } from '@/GlobalContext/GlobalContext';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import Carousel from '../resueable/Carousel';



const BookingFormFor = () => {
    const { selectedVilla } = useContext(GlobalContext); // Replace GlobalContext with your actual context

    const [formData, setFormData] = useState({
        villaName: selectedVilla.name,
        price: selectedVilla.price,
        arrival: '',
        departure: '',
        guests: 1,
        email: '',
        phone: '',
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
        // Handle the form submission here, e.g., send the data to your server
        console.log('Form Data:', formData);
    };
    return (
        <div className="bg-white rounded-lg p-6 mb-6 font-italian">
            <h2 className="text-3xl font-italian font-bold mb-4">Booking Form</h2>
            <form onSubmit={handleSubmit} >
                <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">
                    <label className='font-italian'>Villa Name</label>
                    <input
                        type="text"
                        name="villaName"
                        value={formData.villaName}
                        readOnly
                        className="mt-1 p-2  font-thin  w-full border rounded-md outline-black"
                    />
                </div>
                <div className="mb-4 flex flex-col justify-start gap-2 text-xl ">
                    <label className='font-italian'>Price</label>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        readOnly
                        className="mt-1 p-2  font-thin  w-full border rounded-md outline-black"
                    />
                </div>
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
                    <Link href="/villas#villas" className='mx-5  block underline text-base font-italian'>Back</Link>
                </div>
            </form>
        </div>
    );
};
const BookVilla = () => {
    const { selectedVilla } = useContext(GlobalContext)
    const [selectedSection, setSelectedSection] = useState('specifications')
    return <>{
        selectedVilla ?
            <>
                <div className=' grid grid-cols-2 gap-5 my-10'>

                    <div>
                        <div>
                            <h2 className='text-4xl font-italian text-center'>{selectedVilla.name}</h2>
                        </div>
                        <div className='px-10 py-5'>
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
                            <Carousel photos={selectedVilla.images} />
                        </div>
                        <div className='px-10 py-5'>
                            <div className='flex flex-row justify-around items-center'>
                                <button onClick={() => setSelectedSection('specifications')} className='px-8 py-2 text-2xl font-italian  underline rounded-lg hover:bg-gray-50' >Specifications</button>
                                <button onClick={() => setSelectedSection('description')} className='px-8 py-2 text-2xl font-italian  underline rounded-lg hover:bg-gray-50' >Description</button>

                            </div>
                            <div>
                                {
                                    selectedSection === 'specifications' && <>
                                        <div className='bg-white border p-5'>
                                            <h3 className='text-3xl font-italian'>Specifications:</h3>
                                            <ul className='px-10 py-5 text-xl font-thin flex flex-row flex-wrap gap-10'>
                                                <li className='flex flex-row gap-5 justify-center items-center'>
                                                    <img src='/bed.svg' className='w-12 h-12' />
                                                    <span className='text-xl font-normal'>{selectedVilla.beds}</span>
                                                </li>
                                                <li className='flex flex-row gap-5 justify-center items-center'>
                                                    <img src='/bath-tube.svg' className='w-12 h-12' />
                                                    <span className='text-xl font-normal'>{selectedVilla.bathTube}</span>
                                                </li>
                                                <li className='flex flex-row gap-5 justify-center items-center'>
                                                    <img src='/room.svg' className='w-12 h-12' />
                                                    <span className='text-xl font-normal'>{selectedVilla.area}<sup>2</sup>m</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                }
                                {
                                    selectedSection === 'description' && <>
                                        <div className='bg-white border p-5'>
                                            <h3 className='text-3xl font-italian'>Description:</h3>
                                            <p className='font-thin py-5 '>
                                                {selectedVilla.details}
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
                <Link href={'/villas#villas'} className=' text-xl text-black font-italian hover:text-blue-500 underline'>Select a villa</Link>
            </div>
    }</>
}

export default BookVilla;