'use client'
import Button from '@/components/resueable/Button';
import Carousel from '@/components/resueable/Carousel';
import useCollection from '@/hooks/useCollection';
import useGlobalContext from '@/hooks/useGlobalContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
const Villa = ({ villa }) => {
    const router = useRouter();

    const { setSelectedVilla } = useGlobalContext()

    useEffect(() => {
        setSelectedVilla(null)

    }, [])
    const handleBook = () => {
        setSelectedVilla(villa);

        router.push('/book?category=villa')
    }
    return <>
        <div onClick={() => handleBook()} className='border shadow-sm p-2 rounded-lg bg-gray-50'>
            <Carousel photos={villa?.images} />

            <div className='flex flex-col lg:flex-row justify-between  items-center'>
                <div>
                    <p className='uppercase font-black mt-5 font-italian lg:text-2xl'>{villa?.name}</p>
                    <p className='py-2'>
                        <span className='font-thin'>Price from {villa?.price}</span>
                    </p>
                </div>
                <div className=''>
                    <button onClick={() => handleBook()} className='text-xl hover:bg-gray-400 font-italian bg-gray-500 px-5 py-1 rounded-lg block mx-auto text-white'>Book Now</button>
                </div>
            </div>
        </div>

    </>
}
const Villas = () => {
    // const [collection, setCollection] = useCollection('/api/villas?populate=*')
    // const getVillaObject = (villa) => {
    //     return {
    //         name: villa.attributes.name, price: villa.attributes.price, images: villa.attributes.images.data.map((singelImage) => {
    //             return `http://localhost:1337${singelImage.attributes.url}`
    //         }), details: villa.attributes.details, specifications: villa.attributes.specifications
    //     }
    // }
    const villaCollection = [
        {
            name: 'VILLA LA QUINTA',
            price: '12,000€/week',
            images: ['/villas/villa_la_quint/villa_la_quinta1.jpg', '/villas/villa_la_quint/villa_la_quinta2.jpg', '/villas/villa_la_quint/villa_la_quinta3.jpg', '/villas/villa_la_quint/villa_la_quinta4.jpg', '/villas/villa_la_quint/villa_la_quinta5.jpg', '/villas/villa_la_quint/villa_la_quinta6.jpg', '/villas/villa_la_quint/villa_la_quinta7.jpg', '/villas/villa_la_quint/villa_la_quinta8.jpg', '/villas/villa_la_quint/villa_la_quinta9.jpg', '/villas/villa_la_quint/villa_la_quinta10.jpg', '/villas/villa_la_quint/villa_la_quinta11.jpg',],
            beds: 7,
            bathTube: 5,
            guests: 14,
            details: `Welcome to this newly built Villa with amazing architecture. Enjoy privacy in the luxurious El Herrojo
            and endure in this extravagant white Villa with majestic sea views from the hills. The Villa offers en-
            suite bedrooms, high glass ceilings for perfect indoor/outdoor living and spacious terraces area with a
            swimming pool and BBQ`,
            link: 'https://www.dropbox.com/scl/fo/1zmrxnqgsebem8cb872aw/h?rlkey=0rj6ong8sgmd69crh14bl0kgg&dl=0',

        },
        {
            name: 'Villa Esko',
            price: '8,000€/week',
            images: ['/villas/villa_esko/villa_esko1.jpg', '/villas/villa_esko/villa_esko2.jpg', '/villas/villa_esko/villa_esko3.jpg', '/villas/villa_esko/villa_esko4.jpg', '/villas/villa_esko/villa_esko5.jpg', '/villas/villa_esko/villa_esko6.jpg', '/villas/villa_esko/villa_esko7.jpg', '/villas/villa_esko/villa_esko8.jpg', '/villas/villa_esko/villa_esko9.jpg', '/villas/villa_esko/villa_esko10.jpg',],
            beds: 7,
            bathTube: 5,
            guests: 14,
            details: `Welcome to this newly built Villa with amazing architecture. Enjoy privacy in the luxurious El Herrojo
            and endure in this extravagant white Villa with majestic sea views from the hills. The Villa offers en-
            suite bedrooms, high glass ceilings for perfect indoor/outdoor living and spacious terraces area with a
            swimming pool and BBQ`,
            link: 'https://www.dropbox.com/scl/fo/3f703ic2pv23sqdnw3waf/h?rlkey=dtkf96akvyp1x65q32b91trmp&dl=0'

        },
        {
            name: 'Villa Fiona',
            price: '8,000€/week',
            images: ['/villas/villa_fiona/villa_fiona1.jpg', '/villas/villa_fiona/villa_fiona2.jpg', '/villas/villa_fiona/villa_fiona3.jpg', '/villas/villa_fiona/villa_fiona4.jpg', '/villas/villa_fiona/villa_fiona5.jpg', '/villas/villa_fiona/villa_fiona6.jpg', '/villas/villa_fiona/villa_fiona7.jpg', '/villas/villa_fiona/villa_fiona8.jpg', '/villas/villa_fiona/villa_fiona9.jpg', '/villas/villa_fiona/villa_fiona10.jpg',],
            beds: 4,
            bathTube: 4,
            guests: 8,
            details: `This delightful holiday villa in El Campanario, Estepona, offering tranquillity and privacy. The house is surrounded by a tropical
            garden and is close to the golf courses.
            On the ground floor, you will be welcomed by living room and fully fitted kitchen and a dining area.
            Heading up we will find bedrooms, with private en-suite bathrooms. On this floor, there's also a private terrace with lounge
            zone can be found, built to make the most of the Mediterranean weather.
            If you are looking for relaxation while enjoying a beautiful location, this house is for you!`,
            link: 'https://www.dropbox.com/scl/fo/lbusr73igfhw30ice8p9f/h?rlkey=oy0epthqeejdj84bahmiqp8h4&dl=0'

        },
        {
            name: 'Villa Benna',
            price: '10,000€/week',
            images: ['/villas/villa_benna/villa_benna1.jpg', '/villas/villa_benna/villa_benna2.jpg', '/villas/villa_benna/villa_benna3.jpg', '/villas/villa_benna/villa_benna4.jpg', '/villas/villa_benna/villa_benna5.jpg', '/villas/villa_benna/villa_benna6.jpg', '/villas/villa_benna/villa_benna7.jpg',],
            beds: 5,
            bathTube: 5,
            guests: 8,
            details: `For more details Contact us`,
            link: 'https://www.dropbox.com/sh/pkgkfvq4nv1wxva/AAAdpnLcTFi1sAia2t3dDAjla?dl=0'

        },
        {
            name: 'VILLA GUDAL',
            price: '7,000€/week',
            images: ['/villas/villa_gudal/villa_gudal1.jpg', '/villas/villa_gudal/villa_gudal2.jpg', '/villas/villa_gudal/villa_gudal3.jpg', '/villas/villa_gudal/villa_gudal4.jpg', '/villas/villa_gudal/villa_gudal5.jpg', '/villas/villa_gudal/villa_gudal6.jpg', '/villas/villa_gudal/villa_gudal7.jpg', '/villas/villa_gudal/villa_gudal8.jpg', '/villas/villa_gudal/villa_gudal9.jpg', '/villas/villa_gudal/villa_gudal10.jpg',],
            beds: 5,
            bathTube: 5,
            guests: 8,
            details: `For more details Contact us`,
            link: 'https://www.dropbox.com/sh/fycz7x362nr9bek/AAD38-rBG7FSB_A3ZhhrYd2wa?dl=0'

        },
        {
            name: 'VILLAPB',
            price: '10,000€/week',
            images: ['/villas/villapb/villapb1.jpg', '/villas/villapb/villapb2.jpg', '/villas/villapb/villapb3.jpg', '/villas/villapb/villapb4.jpg', '/villas/villapb/villapb5.jpg', '/villas/villapb/villapb6.jpg', '/villas/villapb/villapb7.jpg', '/villas/villapb/villapb8.jpg', '/villas/villapb/villapb9.jpg',],
            beds: 5,
            bathTube: 5,
            guests: 8,
            details: `For more details Contact us`,
            link: 'https://www.dropbox.com/sh/93elwir5n44ot68/AADpwxBtA6djudsm4h_IvcT7a?dl=0'

        },
        {
            name: 'Villa Albornoz',
            price: '5,000€/week',
            images: ['/villas/villa_albornoz/villa_albornoz1.jpg', '/villas/villa_albornoz/villa_albornoz2.jpg', '/villas/villa_albornoz/villa_albornoz3.jpg', '/villas/villa_albornoz/villa_albornoz4.jpg', '/villas/villa_albornoz/villa_albornoz5.jpg', '/villas/villa_albornoz/villa_albornoz6.jpg', '/villas/villa_albornoz/villa_albornoz8.jpg', '/villas/villa_albornoz/villa_albornoz9.jpg', '/villas/villa_albornoz/villa_albornoz11.jpg'],
            beds: 4,
            bathTube: 3,
            guests: 8,
            details: `For more details Contact us`,
            link: 'https://www.dropbox.com/sh/wh29uj0g6qkvxit/AAAQCxZe9ChQ7dCpwsHhASnJa?dl=0'

        },
        {
            name: 'Villa Aqua',
            price: '12,000€/week',

            images: ['/villas/aqua/aqua1.jpg', '/villas/aqua/aqua2.jpg', '/villas/aqua/aqua3.jpg', '/villas/aqua/aqua4.jpg', '/villas/aqua/aqua5.jpg', '/villas/aqua/aqua6.jpg', '/villas/aqua/aqua7.jpg', '/villas/aqua/aqua8.jpg', '/villas/aqua/aqua9.jpg', '/villas/aqua/aqua10.jpg',],
            beds: 4,
            bathTube: 4,
            guests: 8,
            details: `This unique property will have every possible modern feature using only the finest materials and
            construction technology available. Every aspect of modern living has been considered in the design
            process. A sun study has been conducted creating a soft shade along the expanses of glass in the
            height of summer and absorbing all of the sun in the winter months.
            This house is truly at harmony with its natural environment using the elements in its design of fire,
            wood and stone to blend into its mountain setting. “Running Waters” is a house that has many unique
            features that will create a truly inspirational living environment. The cooling elements of the natural
            water flows around the house including an integral swimming infinity pool with clear glass reflecting
            natural light into the entertainment area incorporating cinema, wet rooms and sauna.
            “Live the life” Mountain views, golf views, and sea views including surging mountains and continents
            all from the privacy of your own mountain setting. Yet all in touch with the urban scene of Marbella
            only a short drive away.
             `,
            link: 'https://www.dropbox.com/sh/4qqcmpa1u0d2ue1/AAAsjVXeu59CH6tVyeWF0c7ta?dl=0'

        },
        {
            name: 'Villa Viera',
            price: '14,000€/week',

            images: ['/villas/viera/viera1.jpg', '/villas/viera/viera2.jpg', '/villas/viera/viera3.jpg', '/villas/viera/viera4.jpg', '/villas/viera/viera5.jpg', '/villas/viera/viera6.jpg', '/villas/viera/viera7.jpg', '/villas/viera/viera8.jpg', '/villas/viera/viera9.jpg', '/villas/viera/viera10.jpg',],
            beds: 6,
            bathTube: 6,
            guests: 8,
            details: `Villa for rent in La Cerquilla, Marbella with 6 bedrooms and 6 bathrooms, with private swimming pool, private garage and
            private garden. Regarding property dimensions, it has 589 m² built, 1,700 m² plot and 419 m² terrace. Has the following
            facilities garden view, panoramic view, pool view, sea view, close to golf, close to sea / beach, close to town, mountainside, air
            conditioning, solar panels, underfloor heating (bathrooms), fireplace, glass doors, guest toilet, gym, handicap accessible,
            heated pool, home automation system, internet - wifi, lift, sauna, solarium, cinema room and wine cellar.
             `,
            link: 'https://www.dropbox.com/scl/fo/10vgufgsietw3wpxbnfx1/h?rlkey=qfnx9pp9hq68u5g72j4bqjz0d&dl=0'

        }
    ]
    return (
        <div className=' w-full h-full  px-3 lg:px-10 py-5' id='villas'>
            <div>
                <h1 className='text-5xl font-italian py-5'>Villas</h1>
            </div>
            <div className='grid lg:grid-cols-3 gap-5'>
                {villaCollection && villaCollection.length > 0 ? <>
                    {
                        villaCollection.map((villa, indx) => {
                            // console.log(villa)

                            return <Villa key={`villa- ${indx}`} villa={villa} />
                        })
                    }
                </> : null}
            </div>

        </div>
    );
}
const page = () => {
    return <>
        <Villas />
    </>
};

export default page;