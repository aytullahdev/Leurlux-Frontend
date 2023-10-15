'use client'
import { GlobalContext } from '@/GlobalContext/GlobalContext';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
// const supercars = [



//     {
//         "carname": "Bentley GTC",
//         "price": "Starting from 1600 €/Day",
//         "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Bentley-GTC.jpg"
//     },
//     {
//         "carname": "Ferrari 488 Coupe",
//         "price": "Starting from 1500 €/Day",
//         "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Ferrari-488-Coupe.jpg"
//     },
//     {
//         "carname": "Ferrari 488 Spider",
//         "price": "Starting from 1600 €/Day",
//         "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Ferrari-488-Spider.jpg"
//     },
//     {
//         "carname": "Ferrari 812 Superfast",
//         "price": "Starting from 2200 €/Day",
//         "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Ferrari-812-Superfast.jpg"
//     },
//     {
//         "carname": "Ferrari Portofino",
//         "price": "Starting from 1300 €/Day",
//         "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Ferrari-Portofino.jpg"
//     },
//     {
//         "carname": "Lamborghini Huracan Coupe",
//         "price": "Starting from 1350 €/Day",
//         "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Lamborghini-Huracan-Coupe.jpg"
//     },
//     {
//         "carname": "Lamborghini Huracan Spyder",
//         "price": "Starting from 1600 €/Day",
//         "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Lamborghini-Huracan-Spyder.jpg"
//     },
//     {
//         "carname": "Lamborghini Aventador LP750",
//         "price": "Starting from 2500 €/Day",
//         "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Lamborghini-Aventador-LP750.jpg"
//     },
//     {
//         "carname": "McLaren 570",
//         "price": "Starting from 1300 €/Day",
//         "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/McLaren-570.jpg"
//     },
//     {
//         "carname": "Porsche 992 Coupe",
//         "price": "Starting from 650 €/Day",
//         "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Porsche-992-Coupe.jpg"
//     },
//     {
//         "carname": "Porsche 992 Cabrio",
//         "price": "Starting from 800 €/Day",
//         "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Porsche-992-Cab.jpg"
//     },
//     {
//         "carname": "Porsche GT3 RS",
//         "price": "Starting from 900 €/Day",
//         "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Porsche-GT3-RS.jpg"
//     }
// ]
const SuperCars = () => {
    const [supercars, setSuperCars] = useState(null)

    const { selectedSuperCar, setSelectedSuperCar } = useContext(GlobalContext)
    const router = useRouter()
    const handleReqeust = (selectedCar) => {
        setSelectedSuperCar(selectedCar);
        router.push('/book?category=supercar')

    }
    useEffect(() => {
        AOS.init();

        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/supercars?populate=*`;
        const token = `${process.env.NEXT_PUBLIC_API_TOKEN}`;

        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios.get(apiUrl, { headers })
            .then((response) => {
                // Handle the response data here
                setSuperCars(response.data.data);
                // console.log(response.data)
            })
            .catch((error) => {
                // Handle any errors here
                console.error(error);
            });
    }, [])
    useEffect(() => {
        setSelectedSuperCar(null)
    }, [])
    const getCarObje = (singleCarObj) => {
        const backend = `${process.env.NEXT_PUBLIC_API_URL}`
        return { 'carname': singleCarObj.attributes.carname, price: singleCarObj.attributes.price, img: `${backend}${singleCarObj.attributes.img.data.attributes.url}` };

    }
    return (
        <div className='py-2'>
            <div className='relative w-full '>
                <div className="relative h-screen">
                    <video autoPlay loop muted className="w-full h-full object-cover">
                        <source src="./supercar.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-5 lg:px-10 py-5">

                        <div>
                            <h1 className='font-italian text-3xl lg:text-7xl py-2'>SUPER CAR <b className='font-bold' style={{ color: 'rgb(193, 182, 134)' }}>RENTAL MARBELLA</b></h1>
                            <hr className='py-5' />
                            <p className='text-base lg:text-2xl'>
                                Browse our selection below to find the perfect <b>super car for rental in Marbella</b>  for your holiday, should you not find the vehicle you are looking for, do not hesitate to contact us, our large partner network means we will find you the car of your dreams.
                            </p>
                            {/* <div className='my-10'>
                                <div class="animate-bounce flex justify-center items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                    </svg>
                                </div>
                            </div> */}
                        </div>
                        <div className='my-10'>
                            <Link className='px-3 lg:px-5  block text-base lg:text-xl font-italian py-1 rounded-full bg-gray-300 hover:bg-gray-200 text-black' href="#supercars">Supercars</Link>
                        </div>


                    </div>
                </div>

            </div>
            <div className='bg-white grid grid-cols-1 lg:grid-cols-3 gap-5 my-5' id='supercars'>
                {supercars && supercars.length > 0 &&
                    supercars.map((singleCarObj) => {
                        const singleCar = getCarObje(singleCarObj);
                        return <div key={singleCar.carname} className='rounded-lg bg-white overflow-hidden p-5 shadow-sm cursor-pointer'>
                            <img className='' src={singleCar.img} />
                            <div className='font-italian'>
                                <h1 className='text-xl font-bold text-center py-2'>{singleCar.carname}</h1>
                                <p className='text-center text-sm font-bold'>{`Starting from ${singleCar.price} €/Day`}</p>

                            </div>
                            <div>
                                <button onClick={() => { handleReqeust(singleCar) }} className='px-4 py-1 bg-black text-white mx-auto block my-2 font-bold rounded font-italian'>Request</button>

                            </div>
                        </div>
                    })
                }
            </div>
        </div >
    );

}
const page = () => {
    return <SuperCars />
};

export default page;
