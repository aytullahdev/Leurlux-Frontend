'use client'
import { GlobalContext } from '@/GlobalContext/GlobalContext';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ArrowDown from '../../components/resueable/ArrowDown';
const suvCarData = [
    {
        "carname": "Audi RSQ3",
        "price": " 480 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Audi-RSQ3.jpg"
    },
    {
        "carname": "Audi RSQ8",
        "price": "Please contact us",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Audi-RSQ8.jpg"
    },
    {
        "carname": "Bentley Bentayga",
        "price": " 1920 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2023/08/bentley_bentayga.jpg"
    },
    {
        "carname": "BMW X4 Pack M",
        "price": " 265 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/BMW-X4-Pack-M.jpg"
    },
    {
        "carname": "BMW X5 Pack M",
        "price": " 420 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/BMW-X5-Pack-M.jpg"
    },
    {
        "carname": "Lamborghini Urus",
        "price": " 2400 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Lamborghini-Urus.jpg"
    },
    {
        "carname": "Land Rover Evoque Cab",
        "price": " 300 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Land-Rover-Evoque-Cab.jpg"
    },
    {
        "carname": "Land Rover Range Rover Velar",
        "price": " 360 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2023/08/range_rover_velar.jpg"
    },
    {
        "carname": "Land Rover Range Rover Sport",
        "price": " 480 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2023/08/range_rover_sport.jpg"
    },
    {
        "carname": "Land Rover Range Rover",
        "price": " 550 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2023/08/range_rover.jpg"
    },
    {
        "carname": "Range Rover Sport SVR",
        "price": " 780 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Land-Rover-Range-Rover-SVR.jpg"
    },
    {
        "carname": "Mercedes-Benz G63 AMG",
        "price": " 1020 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Mercedes-Benz-G63-AMG.jpg"
    }, {
        "carname": "Mercedes-Benz GLE63 AMG",
        "price": " 720 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2023/08/mercedes_benz_gle63amg_coupe.jpg"
    },
    {
        "carname": "Porsche Cayenne",
        "price": " 580 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2023/08/porsche_cayenne.jpg"
    },
    {
        "carname": "Rolls Royce Cullinan",
        "price": " 4200 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Rolls-Royce-Cullinan-1.jpg"
    }
]
const noRoofCarData =
    [
        {
            "carname": "Fiat 500C Abarth",
            "price": " 145 €/Day",
            "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Fiat-500-Abarth.jpg"
        },
        {
            "carname": "Ford Mustang GT Cabrio",
            "price": " 480 €/Day",
            "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Ford-Mustang-GT-Cab.jpg"
        },
        {
            "carname": "Mercedes-Benz E Class Cabrio",
            "price": " 420 €/Day",
            "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2023/08/mercedes_benz_e_class_cabrio.jpg"
        },
        {
            "carname": "Mini Cooper S Cabrio",
            "price": " 180 €/Day",
            "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Mini-Cooper-S-Cab.jpg"
        },
    ]


const compactCarData = [
    {
        "carname": "Audi S3",
        "price": " 360 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2023/08/audi_s3.jpg"
    },
    {
        "carname": "Audi RS3",
        "price": " 420 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2023/08/audi_rs3.jpg"
    },
    {
        "carname": "Mercedes-Benz A45-S AMG",
        "price": " 480 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Mercedes-Benz-A45-S.jpg"
    },
    {
        "carname": "Volkswagen Golf GTI TCR",
        "price": " 180 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2023/08/vw_golf_gti.jpg"
    },
    {
        "carname": "Volkswagen Golf R",
        "price": " 210 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2023/08/vw_golf_r.jpg"
    }
]

const supercarsData = [
    {
        "carname": "Porsche Tycan 4s (Full Electric)",
        "price": " 600 €/day",
        "img": "/porche.png"
    },
    {
        "carname": "Bentley GTC",
        "price": " 1920 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Bentley-GTC.jpg"
    },
    {
        "carname": "Ferrari 488 Coupe",
        "price": " 1800 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Ferrari-488-Coupe.jpg"
    },
    {
        "carname": "Ferrari 488 Spider",
        "price": " 1920 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Ferrari-488-Spider.jpg"
    },
    {
        "carname": "Ferrari 812 Superfast",
        "price": " 2640 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Ferrari-812-Superfast.jpg"
    },
    {
        "carname": "Ferrari Portofino",
        "price": " 1560 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Ferrari-Portofino.jpg"
    },
    {
        "carname": "Lamborghini Huracan Coupe",
        "price": " 1620 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Lamborghini-Huracan-Coupe.jpg"
    },
    {
        "carname": "Lamborghini Huracan Spyder",
        "price": " 1920 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Lamborghini-Huracan-Spyder.jpg"
    },
    {
        "carname": "Lamborghini Aventador LP750",
        "price": " 3000 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Lamborghini-Aventador-LP750.jpg"
    },
    {
        "carname": "McLaren 570",
        "price": " 1560 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/McLaren-570.jpg"
    },
    {
        "carname": "Porsche 992 Coupe",
        "price": " 780 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Porsche-992-Coupe.jpg"
    },
    {
        "carname": "Porsche 992 Cabrio",
        "price": " 960 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Porsche-992-Cab.jpg"
    },
    {
        "carname": "Porsche GT3 RS",
        "price": " 1080 €/Day",
        "img": "https://ryanmillexclusivecars.com/wp-content/uploads/2020/06/Porsche-GT3-RS.jpg"
    }
]

const SuperCars = () => {
    const [supercars, setSuperCars] = useState(supercarsData)

    const { selectedSuperCar, setSelectedSuperCar } = useContext(GlobalContext)
    const router = useRouter()
    const handleReqeust = (selectedCar) => {
        setSelectedSuperCar(selectedCar);
        router.push('/book?category=supercar#top')

    }
    useEffect(() => {
        AOS.init();

        // const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/supercars?populate=*`;
        // const token = `${process.env.NEXT_PUBLIC_API_TOKEN}`;

        // const headers = {
        //     Authorization: `Bearer ${token}`,
        // };
        // axios.get(apiUrl, { headers })
        //     .then((response) => {
        //         // Handle the response data here
        //         setSuperCars(response.data.data);
        //         // console.log(response.data)
        //     })
        //     .catch((error) => {
        //         // Handle any errors here
        //         console.error(error);
        //     });
    }, [])
    useEffect(() => {
        setSelectedSuperCar(null)
    }, [])
    const getCarObje = (singleCarObj) => {
        const backend = `${process.env.NEXT_PUBLIC_API_URL}`
        return singleCarObj
        // return { 'carname': singleCarObj.attributes.carname, price: singleCarObj.attributes.price, img: `${backend}${singleCarObj.attributes.img.data.attributes.url}` };

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
                            <h1 className='font-italian text-3xl lg:text-7xl py-2'>LEURLUX ELITE <b className='font-bold' style={{ color: 'rgb(193, 182, 134)' }}>CAR RENTAL</b></h1>
                            <hr className='py-5' />
                            <p className='text-base lg:text-3xl font-italian'>
                                {`At LEURLUX, we invite you to embrace the joys of supercar driving, where luxury knows no boundaries. Welcome to a world where exhilaration is the norm, and where we're dedicated to making every mile memorable.`}
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
                            <Link className='px-3 lg:px-5  block text-base lg:text-xl font-italian py-1 rounded-full bg-gray-300 hover:bg-gray-200 text-black' href="#supercars">Elite Cars</Link>
                        </div>

                        <Link href={'#supercars'}>
                            <ArrowDown />
                        </Link>
                    </div>
                </div>

            </div>

            <div className="inset-0  bg-black font-italian p-4 text-center">
                <p className="text-3xl lg:text-6xl font-semibold text-white mb-2">
                    The Power of Supercars
                </p>
                {/* <p className='text-white text-xs lg:text-xl'>
                    At LEURLUX, we invite you to embrace the joys of supercar driving, where luxury knows no boundaries. Welcome to a world where exhilaration is the norm, and where we're dedicated to making every mile memorable.
                </p> */}
            </div>
            <div className='my-3 lg:my-10  flex justify-center items-center lg:col-span-2'>
                <Link href="#supercars" className='text-xl lg:text-3xl bg-black text-white  px-10 py-2 rounded-lg font-italian '>Elite Cars</Link>
            </div>
            <div className='py-2 lg:py-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='bg-white text-black  p-5 '>
                        <h1 className='text-bold font-italian text-4xl py-5'>Luxury Meets Exhilaration
                        </h1>
                        <p className='lg:text-justify font-2xl'>{`When you choose LEURLUX, you're making a statement that you can enjoy the thrill of high-performance driving without compromise. Your car will be delivered to  your chosen location & collected by us. Our service is designed to make your experience seamless, enjoyable, and unforgettable.
`}</p>
                    </div>
                    <div className='bg-white text-black  p-5 '>
                        <h1 className='text-bold font-italian text-4xl pb-2 lg:pb-0 lg:py-5'>The Power of Elite Cars</h1>
                        <p className='lg:text-justify font-2xl'> {`At LEURLUX, we're committed to offering high-performance supercars that redefine the thrill of luxury driving. We understand that your journey should be exhilarating, and that's why we provide an exceptional range of vehicles designed to exceed your expectations.`}</p>
                    </div>


                </div>
            </div>
            <div className='py-2 lg:py-5'>
                <h1 className='text-xl lg:text-3xl text-center font-italian'>{`If you can't find the exact car you want, contact us. Our mission is to fulfill your wishes`} </h1>
            </div>
            <div className='bg-white grid grid-cols-1 lg:grid-cols-3 gap-5 my-5 text-black' id='supercars'>
                <div className='col-span-full'>
                    <h2 className='px-3 lg:px-0 text-3xl font-bold font-italian'>COMPACT</h2>
                </div>
                {compactCarData && compactCarData.length > 0 &&
                    compactCarData.map((singleCarObj) => {
                        const singleCar = getCarObje(singleCarObj);
                        return <div onClick={() => { handleReqeust(singleCar) }} key={singleCar.carname} className='rounded-lg bg-white overflow-hidden p-5 shadow-sm cursor-pointer'>
                            <img className='' src={singleCar.img} />
                            <div className='font-italian'>
                                <h1 className='text-xl font-bold text-center py-2'>{singleCar.carname}</h1>
                                <p className='text-center text-sm font-bold'>{`Starting from ${singleCar.price}`}</p>

                            </div>
                            <div>
                                <button onClick={() => { handleReqeust(singleCar) }} className='px-4 py-1 bg-black text-white mx-auto block my-2 font-bold rounded font-italian'>Request</button>

                            </div>
                        </div>
                    })
                }
            </div>
            <div className='bg-white grid grid-cols-1 lg:grid-cols-3 gap-5 my-5 text-black' id='supercars'>
                <div className='col-span-full'>
                    <h2 className='px-3 lg:px-0 text-3xl font-bold font-italian'>NO ROOF
                    </h2>
                </div>
                {noRoofCarData && noRoofCarData.length > 0 &&
                    noRoofCarData.map((singleCarObj) => {
                        const singleCar = getCarObje(singleCarObj);
                        return <div onClick={() => { handleReqeust(singleCar) }} key={singleCar.carname} className='rounded-lg bg-white overflow-hidden p-5 shadow-sm cursor-pointer'>
                            <img className='' src={singleCar.img} />
                            <div className='font-italian'>
                                <h1 className='text-xl font-bold text-center py-2'>{singleCar.carname}</h1>
                                <p className='text-center text-sm font-bold'>{`Starting from ${singleCar.price}`}</p>

                            </div>
                            <div>
                                <button onClick={() => { handleReqeust(singleCar) }} className='px-4 py-1 bg-black text-white mx-auto block my-2 font-bold rounded font-italian'>Request</button>

                            </div>
                        </div>
                    })
                }
            </div>
            <div className='bg-white grid grid-cols-1 lg:grid-cols-3 gap-5 my-5 text-black' id='supercars'>
                <div className='col-span-full'>
                    <h2 className='px-3 lg:px-0 text-3xl font-bold font-italian'>SUV
                    </h2>
                </div>
                {suvCarData && suvCarData.length > 0 &&
                    suvCarData.map((singleCarObj) => {
                        const singleCar = getCarObje(singleCarObj);
                        return <div onClick={() => { handleReqeust(singleCar) }} key={singleCar.carname} className='rounded-lg bg-white overflow-hidden p-5 shadow-sm cursor-pointer'>
                            <img className='' src={singleCar.img} />
                            <div className='font-italian'>
                                <h1 className='text-xl font-bold text-center py-2'>{singleCar.carname}</h1>
                                <p className='text-center text-sm font-bold'>{`Starting from ${singleCar.price}`}</p>

                            </div>
                            <div>
                                <button onClick={() => { handleReqeust(singleCar) }} className='px-4 py-1 bg-black text-white mx-auto block my-2 font-bold rounded font-italian'>Request</button>

                            </div>
                        </div>
                    })
                }
            </div>
            <div className='bg-white grid grid-cols-1 lg:grid-cols-3 gap-5 my-5 text-black' id='supercars'>
                <div className='col-span-full'>
                    <h2 className='px-3 lg:px-0 text-3xl font-bold font-italian'>SPORTS CAR
                    </h2>
                </div>
                {supercars && supercars.length > 0 &&
                    supercars.map((singleCarObj) => {
                        const singleCar = getCarObje(singleCarObj);
                        return <div onClick={() => { handleReqeust(singleCar) }} key={singleCar.carname} className='rounded-lg bg-white overflow-hidden p-5 shadow-sm cursor-pointer'>
                            <img className='' src={singleCar.img} />
                            <div className='font-italian'>
                                <h1 className='text-xl font-bold text-center py-2'>{singleCar.carname}</h1>
                                <p className='text-center text-sm font-bold'>{`Starting from ${singleCar.price}`}</p>

                            </div>
                            <div>
                                <button onClick={() => { handleReqeust(singleCar) }} className='px-4 py-1 bg-black text-white mx-auto block my-2 font-bold rounded font-italian'>Request</button>

                            </div>
                        </div>
                    })
                }
            </div>
            <div className='py-2 lg:py-5'>
                <h1 className='text-xl lg:text-3xl text-center font-italian'>{`If you can't find the exact car you want, contact us. Our mission is to fulfill your wishes`}</h1>
            </div>
            <div id='' className='py-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    <div className='bg-white text-black  p-5 '>
                        <h1 className='text-bold font-italian text-2xl lg:text-4xl  lg:py-5'>A Diverse Collection of Luxury</h1>
                        <p className='lg:text-justify font-2xl pt-2 lg:pt-0'>{`Our impressive collection includes a series of Lamborghinis, Ferraris, Rolls Royces, Bentleys, Mercedes, BMWs, and many more. We have meticulously curated our fleet to bring you the best renting cars from the 2023 to 2024 stock, featuring the Lamborghini Urus, Lamborghini Aventador, Rolls Royce Cullinan, Rolls Royce Wraith, Mercedes G63, GLE 63, C63s, and our hidden gem - the Red Ferrari.`}</p>
                    </div>
                    <div className='bg-white text-black  p-5 '>
                        <h1 className='text-bold font-italian text-2xl lg:text-4xl lg:py-5'>Unleash the Supercar Experience</h1>
                        <p className='lg:text-justify font-2xl pt-2 lg:pt-0'> {`Among our remarkable supercars, you'll find the lightning-fast Porsche Taycan 2024, a fully electric supercar. This high-performance masterpiece accelerates from 0 to 100 km/h in just 3 seconds, boasting 571 horsepower. What sets it apart is not just its stunning performance but also its eco-conscious nature. With our Porsche supercharging station, you can achieve a full charge in just 10-15 minutes, giving you an impressive 475 km range. As a special bonus, we include a free charging card, ensuring that you have unlimited charging opportunities while you enjoy your ride.`}</p>
                    </div>


                </div>

            </div>
        </div >
    );

}
const page = () => {
    return <SuperCars />
};

export default page;
