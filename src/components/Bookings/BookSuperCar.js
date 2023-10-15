import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { Toaster, toast } from 'sonner';
import useGlobalContext from '@/hooks/useGlobalContext';
import axios from 'axios';
import BookingSuccess from '../resueable/BookingSuccess';
const BookSuperCar = () => {
    const router = useRouter();
    const { selectedSuperCar, setIsBooked, isBooked } = useGlobalContext();
    const { carname, img, price } = selectedSuperCar || {}
    const [carForm, setCarForm] = useState({
        pickupaddress: '',
        dropoffaddress: '',
        email: '',
        phone: '',
        pickupdate: '',
        dropoffdate: '',
    })
    const { pickupdate, email, phone, dropoffdate, pickupaddress, dropoffaddress } = carForm;
    const handleChange = (e) => {
        setCarForm((prev) => ({ ...carForm, [e.target.name]: e.target.value }))
    }
    const [isSuccess, setIsSuccess] = useState(false)
    const handleSubmit = () => {
        const data = {
            "data": {
                "dropoffaddress": dropoffaddress,
                "pickupaddress": pickupaddress,
                "carname": carname,
                "price": price,
                "pickupdate": pickupdate,
                "dropoffdate": dropoffdate,
                "email": email,
                "phone": phone
            }
        }
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/supercar-requests`;
        const token = `${process.env.NEXT_PUBLIC_API_TOKEN}`;
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios.post(apiUrl, data, { headers })
            .then((response) => {
                // Handle the response data here
                // console.log(response.data)
                if (response.data.data.id) {
                    setIsSuccess(true)
                    toast.success("Thank you for booking")
                    setIsBooked(true)
                    setCarForm({
                        pickupaddress: '',
                        dropoffaddress: '',
                        email: '',
                        phone: '',
                        pickupdate: '',
                        dropoffdate: '',
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
            <BookingSuccess />
            {!isBooked && selectedSuperCar ?
                <div>
                    <div>
                        <h1 className='text-3xl lg:text-6xl font-italian text-center'>
                            Request for your Car
                        </h1>


                    </div>
                    <div className='grid lg:grid-cols-2  gap-5 my-10 justify-center items-center  w-full text-base  mx-auto'>
                        <div className='flex flex-col overflow-hidden '>
                            <div className='flex flex-col gap-4'>
                                <p className='text-3xl font-italian text-start font-bold'>{carname}</p>
                                <span className='text-base  font-thin text-start inline py-1 px-2 w-52 bg-slate-200'>{`Starting from ${price} €/Day`}</span >
                            </div>
                            <div data-aos="fade-left" data-aos-duration="500">

                                <img className='w-[300px] lg:w-[600px] lg:h-[300px] ' src={img} />

                            </div>
                        </div>
                        <div className='flex flex-col gap-2  '>
                            {isSuccess && <spna className="text-green-500 font-italian text-start text-xl">Thank you for booking We will contact you soon.</spna>}
                            <h2 className="text-xl text-center lg:text-left lg:text-3xl font-italian font-bold mb-4">Booking Form</h2>



                            <div className='flex flex-col justify-start gap-2  text-base lg:text-xl '>

                                <label className='font-italian font-bold'>Pickup Date</label>
                                <input type='datetime-local' name='pickupdate' onChange={handleChange} className='border outline-none px-2 py-2 rounded font-thin ' value={pickupdate} />

                            </div>
                            <div className='flex flex-col justify-start gap-2  text-base lg:text-xl '>

                                <label className='font-italian'>Drop Off Date</label>
                                <input type='datetime-local' name='dropoffdate' onChange={handleChange} className='border outline-none px-2 py-2 rounded font-thin ' value={dropoffdate} />

                            </div>
                            <div className='flex flex-col justify-start gap-2  text-base lg:text-xl '>

                                <label className='font-italian'>Pickup Address</label>
                                <input type='text' name='pickupaddress' onChange={handleChange} className='border outline-none px-2 py-2 rounded font-thin ' placeholder='Pickup Address...' value={pickupaddress} />

                            </div>
                            <div className='flex flex-col justify-start gap-2  text-base lg:text-xl '>

                                <label className='font-italian'>Drop Off Address</label>
                                <input type='text' name='dropoffaddress' onChange={handleChange} className='border outline-none px-2 py-2 rounded font-thin ' placeholder='Drop off Address...' value={dropoffaddress} />

                            </div>
                            <div className='flex flex-col justify-start gap-2  text-base lg:text-xl '>

                                <label className='font-italian'>Email</label>
                                <input type='email' name='email' onChange={handleChange} className='border outline-none px-2 py-2 rounded font-thin ' placeholder='Email Address...' value={email} />

                            </div>
                            <div className='flex flex-col justify-start gap-2  text-base lg:text-xl '>

                                <label className='font-italian'>Phone</label>
                                <input type='text' name='phone' onChange={handleChange} className='border outline-none px-2 py-2 rounded font-thin ' placeholder='Phone number...' value={phone} />

                            </div>

                            <div className='flex flex-row  items-center space-x-5 justify-center'>
                                <button onClick={() => handleSubmit()} className='block px-2 lg:px-5 py-2 bg-black text-white rounded-lg'>Request</button>
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

export default BookSuperCar;