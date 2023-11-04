'use client'
import Button from '@/components/resueable/Button';
import useGlobalContext from '@/hooks/useGlobalContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import ArrowDown from '../../components/resueable/ArrowDown';
// const yachts = [
//     {
//         "name": "PORTOFINO 46 ZERO",
//         "specs": {
//             "capacity": "9 + skipper",
//             "cabins": "1 double, 1 twin",
//             "wc": "1",
//             "length": "14.1 m",
//             "beam": "4.1 m",
//             "charterSpeed": "10 knots"
//         },
//         "features": [
//             "Sunshade",
//             "Front and back sunbeds",
//             "Interior and exterior sitting area",
//             "Bluetooth music connection",
//             "A/C"
//         ],
//         "included": [
//             "Captain",
//             "Fuel",
//             "Insurance",
//             "Towels",
//             "Water",
//             "Soft drinks",
//             "Beers",
//             "Cava and white wine",
//             "Fruits & snacks",
//             "Snorkeling equipment"
//         ],
//         "pricing": {
//             "fullDayHighSeason": {
//                 "price": 1900,
//                 "vatIncluded": true
//             },
//             "halfDayHighSeason": {
//                 "price": 1200,
//                 "vatIncluded": true
//             },
//             "fuelConsumption": "140 L/h",
//             "morningCruiseTime": "10 am - 2 pm",
//             "afternoonCruiseTime": "4 pm - 8 pm",
//             "seasons": {
//                 "highSeason": "June to September",
//                 "lowSeason": "Rest of the year"
//             }
//         }
//     },
//     {
//         "name": "SUNSEEKER PREDATOR 56 TATA",
//         "specs": {
//             "capacity": "11 + Skipper",
//             "cabins": "2",
//             "wc": "2",
//             "length": "17 m",
//             "beam": "4.6 m",
//             "charterSpeed": "10 knots"
//         },
//         "features": [
//             "Sunshade",
//             "Front and back sunbeds",
//             "Interior and exterior sitting area",
//             "Bluetooth music connection",
//             "Sound system",
//             "A/C"
//         ],
//         "included": [
//             "Captain",
//             "Fuel",
//             "Insurance",
//             "Towels",
//             "Water",
//             "Soft drinks",
//             "Beers",
//             "Cava and white wine",
//             "Fruits & snacks",
//             "Snorkeling equipment",
//             "Paddle board"
//         ],
//         "pricing": {
//             "fullDayHighSeason": {
//                 "price": 3300,
//                 "vatIncluded": true
//             },
//             "halfDayHighSeason": {
//                 "price": 1800,
//                 "vatIncluded": true
//             },
//             "fuelConsumption": "400 L/h",
//             "morningCruiseTime": "10 am - 2 pm",
//             "afternoonCruiseTime": "4 pm - 8 pm",
//             "seasons": {
//                 "highSeason": "June to September",
//                 "lowSeason": "Rest of the year"
//             }
//         }
//     },
//     {
//         "name": "PRINCESS V58 VIKING",
//         "specs": {
//             "capacity": "12 + 2 crew",
//             "cabins": "2 double, 1 twin",
//             "wc": "2",
//             "length": "18.5 m",
//             "beam": "4.6 m",
//             "charterSpeed": "10 knots"
//         },
//         "features": [
//             "Sunshade",
//             "Front and back sunbeds",
//             "Interior and exterior sitting area",
//             "Bluetooth music connection",
//             "Exterior Void Sound system",
//             "A/C"
//         ],
//         "included": [
//             "Captain",
//             "Fuel",
//             "Insurance",
//             "Towels",
//             "Water",
//             "Soft drinks",
//             "Beers",
//             "Cava and white wine",
//             "Fruits & snacks",
//             "Snorkeling equipment",
//             "Paddle board"
//         ],
//         "pricing": {
//             "fullDayHighSeason": {
//                 "price": 3500,
//                 "vatIncluded": true
//             },
//             "halfDayHighSeason": {
//                 "price": 2000,
//                 "vatIncluded": true
//             },
//             "fuelConsumption": "280 L/h",
//             "morningCruiseTime": "10 am - 2 pm",
//             "afternoonCruiseTime": "4 pm - 8 pm",
//             "seasons": {
//                 "highSeason": "June to September",
//                 "lowSeason": "Rest of the year"
//             }
//         }
//     },
//     {
//         "name": "BAIA AZZURRA 63 GOLD DIGGER",
//         "specs": {
//             "capacity": "10 + 2 crew",
//             "cabins": "1 double, 2 twin",
//             "wc": "3",
//             "length": "19 m",
//             "beam": "4.6 m",
//             "charterSpeed": "8 knots",
//             "cruisingSpeed": "30 knots",
//             "fuelConsumption": {
//                 "idleSpeed": "80 L/h",
//                 "cruisingSpeed": "320 L/h"
//             }
//         },
//         "features": [
//             "Sunshade",
//             "Front and back sunbeds",
//             "Interior and exterior sitting area",
//             "Bluetooth music connection",
//             "Interior and exterior Void Sound system",
//             "A/C"
//         ],
//         "included": [
//             "Captain",
//             "Insurance",
//             "Towels",
//             "Complimentary drinks (water, ice, 24 soft drinks, 18 beers, 2 white wine, 2 rosé, 2 cava, 1 Champagne)",
//             "Fruit & snacks",
//             "Snorkeling equipment",
//             "2 paddle boards"
//         ],
//         "mooringLicense": "No",
//         "pricing": {
//             "fullDay": {
//                 "highSeason": "3,999€",
//                 "midSeason": "3,599€",
//                 "lowSeason": "3,199€"
//             },
//             "halfDay": {
//                 "highSeason": "2,799€",
//                 "midSeason": "2,599€",
//                 "lowSeason": "2,299€"
//             },
//             "fuelEstimate": {
//                 "idleSpeed": "120 L/day = 210€",
//                 "cruisingSpeed": "480 L/day = 800€"
//             },
//             "seasons": {
//                 "highSeason": "July - August",
//                 "midSeason": "June & September",
//                 "lowSeason": "Rest of the year"
//             },
//             "vatIncluded": true,
//             "fuelNotIncluded": true,
//             "fuelNote": "Approx. 1.5h of cruising. Fuel cost may vary depending on the route, speed, and fuel prices on the day of charter.",
//             "charterExtension": "Charters can be extended at the discretion of the captain and at an additional hourly cost, but all boats must return to the port before nightfall.",
//             "extraToys": "Extra toys, catering, and drink packages are available!",
//             "cruiseTimes": {
//                 "morningCruise": "10 am - 2 pm",
//                 "afternoonCruise": "4 pm - 8 pm",
//                 "fullDayCruise": "Between 10 am and sunset"
//             }
//         }
//     },
//     {
//         "name": "MANGUSTA 80 HAPPY HOUR",
//         "specs": {
//             "capacity": "12 + 2 crew",
//             "cabins": "2 double, 1 twin",
//             "wc": "2",
//             "length": "25 m",
//             "beam": "5.9 m",
//             "charterSpeed": "10 knots"
//         },
//         "features": [
//             "Sunshade",
//             "Front and back sunbeds",
//             "Interior and exterior sitting area",
//             "Bluetooth music connection",
//             "A/C",
//             "Void sound system",
//             "Fully equipped kitchen"
//         ],
//         "included": [
//             "Captain",
//             "Fuel",
//             "Insurance",
//             "Towels",
//             "Water",
//             "Soft drinks",
//             "Beers",
//             "Cava and white wine",
//             "Fruits & snacks",
//             "Snorkeling equipment",
//             "Paddle board"
//         ],
//         "pricing": {
//             "fullDayHighSeason": {
//                 "price": 6500,
//                 "vatIncluded": true
//             },
//             "halfDayHighSeason": {
//                 "price": 3900,
//                 "vatIncluded": true
//             },
//             "fuelConsumption": "460 L/h",
//             "morningCruiseTime": "10 am - 2 pm",
//             "afternoonCruiseTime": "4 pm - 8 pm",
//             "seasons": {
//                 "highSeason": "June to September",
//                 "lowSeason": "Rest of the year"
//             }
//         }
//     }





// ]
const yachts = [
    {
        "name": "MANGUSTA 80 HAPPY HOUR",
        "pdf": '/yachts/80_mangusta/80_mangusta.pdf',
        "images": ['/yachts/80_mangusta/0.jpg',
            '/yachts/80_mangusta/1.jpg',
            '/yachts/80_mangusta/2.jpg',
            '/yachts/80_mangusta/3.jpg',
            '/yachts/80_mangusta/4.jpg',
            '/yachts/80_mangusta/5.jpg',
            '/yachts/80_mangusta/7.jpg',
            '/yachts/80_mangusta/8.jpg',],
        "specs": {
            "capacity": "12 + 2 crew",
            "cabins": "2 double, 1 twin",
            "wc": "2",
            "length": "25 m",
            "beam": "5.9 m",
            "charterSpeed": "10 knots"
        },
        "features": [
            "Sunshade",
            "Front and back sunbeds",
            "Interior and exterior sitting area",
            "Bluetooth music connection",
            "A/C",
            "Void sound system",
            "Fully equipped kitchen"
        ],
        "included": [
            "Captain",
            "Fuel",
            "Insurance",
            "Towels",
            "Water",
            "Soft drinks",
            "Beers",
            "Cava and white wine",
            "Fruits & snacks",
            "Snorkeling equipment",
            "Paddle board"
        ],
        "pricing": {
            "fullDay": {
                "highSeason": {
                    "price": 6500,
                    "vatIncluded": true
                },
            },
            "halfDay": {
                "highSeason": {
                    "price": 3900,
                    "vatIncluded": true
                }
            },


            "fuelConsumption": "460 L/h",
            "morningCruiseTime": "10 am - 2 pm",
            "afternoonCruiseTime": "4 pm - 8 pm",
            "seasons": {
                "highSeason": "June to September",
                "lowSeason": "Rest of the year"
            }
        }
    },
    {
        "name": "PORTOFINO 46 ZERO",
        "pdf": '/yachts/46_portofino/46_portofino.pdf',
        "images": [
            '/yachts/46_portofino/0.jpg',
            '/yachts/46_portofino/1.jpg',
            '/yachts/46_portofino/2.jpg',
            '/yachts/46_portofino/3.jpg',
            '/yachts/46_portofino/4.jpg',
            '/yachts/46_portofino/6.jpg',
            '/yachts/46_portofino/7.jpg',

        ],
        "specs": {
            "capacity": "9 + skipper",
            "cabins": "1 double, 1 twin",
            "wc": "1",
            "length": "14.1 m",
            "beam": "4.1 m",
            "charterSpeed": "10 knots"
        },
        "features": [
            "Sunshade",
            "Front and back sunbeds",
            "Interior and exterior sitting area",
            "Bluetooth music connection",
            "A/C"
        ],
        "included": [
            "Captain",
            "Fuel",
            "Insurance",
            "Towels",
            "Water",
            "Soft drinks",
            "Beers",
            "Cava and white wine",
            "Fruits & snacks",
            "Snorkeling equipment"
        ],
        "pricing": {
            "fullDay": {
                "highSeason": {
                    "price": 1900,
                    "vatIncluded": true
                },
                "midSeason": {
                    "price": 1900,
                    "vatIncluded": true
                },
                "lowSeason": {
                    "price": 1900,
                    "vatIncluded": true
                }
            },
            "halfDay": {
                "highSeason": {
                    "price": 1200,
                    "vatIncluded": true
                },
                "midSeason": {
                    "price": 1200,
                    "vatIncluded": true
                },
                "lowSeason": {
                    "price": 1200,
                    "vatIncluded": true
                }
            },
            "fuelConsumption": "140 L/h",
            "morningCruiseTime": "10 am - 2 pm",
            "afternoonCruiseTime": "4 pm - 8 pm",
            "seasons": {
                "highSeason": "June to September",
                "lowSeason": "Rest of the year"
            }
        }
    },
    {
        "name": "SUNSEEKER PREDATOR 56",
        "pdf": '/yachts/56_sunseekerpredator/56_sunseekerpredator.pdf',
        "images": [
            '/yachts/56_sunseekerpredator/0.jpg',
            '/yachts/56_sunseekerpredator/1.jpg',
            '/yachts/56_sunseekerpredator/2.jpg',
            '/yachts/56_sunseekerpredator/3.jpg',
            '/yachts/56_sunseekerpredator/4.jpg',
            '/yachts/56_sunseekerpredator/6.jpg',
            '/yachts/56_sunseekerpredator/7.jpg',
        ],
        "specs": {
            "capacity": "11 + Skipper",
            "cabins": "2",
            "wc": "2",
            "length": "17 m",
            "beam": "4.6 m",
            "charterSpeed": "10 knots"
        },
        "features": [
            "Sunshade",
            "Front and back sunbeds",
            "Interior and exterior sitting area",
            "Bluetooth music connection",
            "Sound system",
            "A/C"
        ],
        "included": [
            "Captain",
            "Fuel",
            "Insurance",
            "Towels",
            "Water",
            "Soft drinks",
            "Beers",
            "Cava and white wine",
            "Fruits & snacks",
            "Snorkeling equipment",
            "Paddle board"
        ],
        "pricing": {
            "fullDay": {
                "highSeason": {
                    "price": 3300,
                    "vatIncluded": true
                },
                "midSeason": {
                    "price": 3300,
                    "vatIncluded": true
                },
                "lowSeason": {
                    "price": 3300,
                    "vatIncluded": true
                }
            },
            "halfDay": {
                "highSeason": {
                    "price": 1800,
                    "vatIncluded": true
                },
                "midSeason": {
                    "price": 1800,
                    "vatIncluded": true
                },
                "lowSeason": {
                    "price": 1800,
                    "vatIncluded": true
                }
            },
            "fuelConsumption": "400 L/h",
            "morningCruiseTime": "10 am - 2 pm",
            "afternoonCruiseTime": "4 pm - 8 pm",
            "seasons": {
                "highSeason": "June to September",
                "lowSeason": "Rest of the year"
            }
        }
    },
    {
        "name": "PRINCESS V58 VIKING",
        "images": ['/yachts/58_princessv58_viking/img0.jpg',
            '/yachts/58_princessv58_viking/img1.jpg',
            '/yachts/58_princessv58_viking/img2.jpg',
            '/yachts/58_princessv58_viking/img3.jpg',
            '/yachts/58_princessv58_viking/img4.jpg',
            '/yachts/58_princessv58_viking/img5.jpg',
            '/yachts/58_princessv58_viking/img7.jpg',
        ],
        "pdf": '/yachts/58_princessv58_viking/58_princessv58_viking.pdf',

        "specs": {
            "capacity": "12 + 2 crew",
            "cabins": "2 double, 1 twin",
            "wc": "2",
            "length": "18.5 m",
            "beam": "4.6 m",
            "charterSpeed": "10 knots"
        },
        "features": [
            "Sunshade",
            "Front and back sunbeds",
            "Interior and exterior sitting area",
            "Bluetooth music connection",
            "Exterior Void Sound system",
            "A/C"
        ],
        "included": [
            "Captain",
            "Fuel",
            "Insurance",
            "Towels",
            "Water",
            "Soft drinks",
            "Beers",
            "Cava and white wine",
            "Fruits & snacks",
            "Snorkeling equipment",
            "Paddle board"
        ],
        "pricing": {
            "fullDay": {
                "highSeason": {
                    "price": 3500,
                    "vatIncluded": true
                },
                "midSeason": {
                    "price": 3500,
                    "vatIncluded": true
                },
                "lowSeason": {
                    "price": 3500,
                    "vatIncluded": true
                }
            },
            "halfDay": {
                "highSeason": {
                    "price": 2000,
                    "vatIncluded": true
                },
                "midSeason": {
                    "price": 2000,
                    "vatIncluded": true
                },
                "lowSeason": {
                    "price": 2000,
                    "vatIncluded": true
                }
            },
            "fuelConsumption": "280 L/h",
            "morningCruiseTime": "10 am - 2 pm",
            "afternoonCruiseTime": "4 pm - 8 pm",
            "seasons": {
                "highSeason": "June to September",
                "lowSeason": "Rest of the year"
            }
        }
    },
    {
        "name": "BAIA AZZURRA 63 GOLD DIGGER",
        "images": ['/yachts/63_baiaazzurra/0.jpg',
            '/yachts/63_baiaazzurra/1.jpg',
            '/yachts/63_baiaazzurra/2.jpg',
            '/yachts/63_baiaazzurra/3.jpg',
            '/yachts/63_baiaazzurra/4.jpg',
            '/yachts/63_baiaazzurra/6.jpg',
            '/yachts/63_baiaazzurra/7.jpg',
        ],
        "pdf": '/yachts/63_baiaazzurra/63_baiaazzurra.pdf',
        "specs": {
            "capacity": "10 + 2 crew",
            "cabins": "1 double, 2 twin",
            "wc": "3",
            "length": "19 m",
            "beam": "4.6 m",
            "charterSpeed": "8 knots",
            "cruisingSpeed": "30 knots",
            "fuelConsumption": {
                "idleSpeed": "80 L/h",
                "cruisingSpeed": "320 L/h"
            }
        },
        "features": [
            "Sunshade",
            "Front and back sunbeds",
            "Interior and exterior sitting area",
            "Bluetooth music connection",
            "Interior and exterior Void Sound system",
            "A/C"
        ],
        "included": [
            "Captain",
            "Insurance",
            "Towels",
            "Complimentary drinks (water, ice, 24 soft drinks, 18 beers, 2 white wine, 2 rosé, 2 cava, 1 Champagne)",
            "Fruit & snacks",
            "Snorkeling equipment",
            "2 paddle boards"
        ],
        "mooringLicense": "No",
        "pricing": {
            "fullDay": {
                "highSeason": {
                    "price": 3999,
                    "vatIncluded": true
                },
                "midSeason": {
                    "price": 3599,
                    "vatIncluded": true
                },
                "lowSeason": {
                    "price": 3199,
                    "vatIncluded": true
                }
            },
            "halfDay": {
                "highSeason": {
                    "price": 2799,
                    "vatIncluded": true
                },
                "midSeason": {
                    "price": 2599,
                    "vatIncluded": true
                },
                "lowSeason": {
                    "price": 2299,
                    "vatIncluded": true
                }
            },
            "fuelEstimate": {
                "idleSpeed": "120 L/day = 210€",
                "cruisingSpeed": "480 L/day = 800€"
            },
            "seasons": {
                "highSeason": "July - August",
                "midSeason": "June & September",
                "lowSeason": "Rest of the year"
            },
            "vatIncluded": true,
            "fuelNotIncluded": true,
            "fuelNote": "Approx. 1.5h of cruising. Fuel cost may vary depending on the route, speed, and fuel prices on the day of charter.",
            "charterExtension": "Charters can be extended at the discretion of the captain and at an additional hourly cost, but all boats must return to the port before nightfall.",
            "extraToys": "Extra toys, catering, and drink packages are available!",
            "cruiseTimes": {
                "morningCruise": "10 am - 2 pm",
                "afternoonCruise": "4 pm - 8 pm",
                "fullDayCruise": "Between 10 am and sunset"
            }
        }
    },

]




function YachtDetails({ yacht }) {
    const { setSelectedYacht, } = useGlobalContext()
    const router = useRouter();
    const handleView = () => {
        setSelectedYacht(yacht);
        router.push('/book?category=yacht#top');

    }
    return (
        <div onClick={() => handleView()} className="bg-white rounded-lg  p-6 mb-6  cursor-pointer">
            <div>
                <img src={yacht.images[0]} className='h-auto w-auto' />
            </div>
            <h2 className="text-2xl font-semibold mb-4 font-italian text-center my-5">{yacht.name}</h2>
            <div>
                <button onClick={() => handleView()} className='text-xl px-5 py-2 bg-black font-italian text-white rounded mx-auto block'>View</button>
            </div>
            {/* <div className="mb-4">
                <h3 className="text-lg font-semibold">Specifications:</h3>
                <ul className="list-disc ml-6">
                    <li>Capacity: {yacht.specs.capacity}</li>
                    <li>Cabins: {yacht.specs.cabins}</li>
                    <li>WC: {yacht.specs.wc}</li>
                    <li>Length: {yacht.specs.length}</li>
                    <li>Beam: {yacht.specs.beam}</li>
                    <li>Charter Speed: {yacht.specs.charterSpeed}</li>
                </ul>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Features:</h3>
                <ul className="list-disc ml-6">
                    {yacht.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Included:</h3>
                <ul className="list-disc ml-6">
                    {yacht.included.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Pricing:</h3>
                <p>Full Day (High Season): {yacht.pricing.fullDay?.highSeason.price} €</p>
                <p>Half Day (High Season): {yacht.pricing.halfDay?.highSeason.price} €</p>
                <p>Fuel Consumption: {yacht.pricing.fuelConsumption}</p>
                <p>Morning Cruise Time: {yacht.pricing.morningCruiseTime}</p>
                <p>Afternoon Cruise Time: {yacht.pricing.afternoonCruiseTime}</p>
                <p>
                    Seasons: High Season - {yacht.pricing.seasons.highSeason}, Low Season - {yacht.pricing.seasons.lowSeason}
                </p>
            </div> */}
        </div>
    );
}
const Yachts = () => {
    const { setSelectedYacht, selectedYacht } = useGlobalContext()
    useEffect(() => {
        if (selectedYacht) {
            setSelectedYacht(null)
        }
    }, [])
    return (
        <div className='lg:py-0'>
            <div className='relative w-full '>
                <div className="relative h-[400px] lg:h-screen">
                    <div className="w-full h-full object-cover">
                        {/* <source src="./yacht.mp4" type="video/mp4" /> */}
                        <img src='/yatchlanding.jpeg' className='w-full h-full' />

                    </div>
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-5 lg:px-10 py-2">

                        <div>
                            <h1 className='font-italian text-4xl lg:text-6xl xl:text-8xl lg:py-2 '>
                                <span style={{ color: 'rgb(193, 182, 134)' }}>LEURLUX</span>  Yacht Rentals
                            </h1>
                            <p className='py-5 md:text-xl font-italian lg:text-4xl '>
                                {`Welcome to LEURLUX Yacht Rentals, where we offer the epitome of luxury and adventure on the open seas. We redefine yacht charters by seamlessly blending opulence, exclusivity, and unparalleled experiences that will set your journey apart.`}
                            </p>
                            {/* <p className='text-3xl lg:text-4xl xl:text-5xl py-5 lg:py-10 font-italian text-center'>
                                MARBELLA
                            </p> */}
                            {/* <div className='my-10'>
                                <div class="animate-bounce flex justify-center items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                    </svg>
                                </div>
                            </div> */}
                        </div>
                        <div className='lg:my-10'>
                            <Link className='px-5  block text-xl font-italian py-1 rounded-full bg-gray-300 hover:bg-gray-200 text-black' href="#yachts">Yachts</Link>
                        </div>
                        <Link href={'#yachts'}>
                            <ArrowDown />
                        </Link>

                    </div>
                </div>
            </div>
            <div className="inset-0  bg-black font-italian p-4 text-center">
                <p className="text-3xl lg:text-6xl font-semibold text-white mb-2">
                    Discover Luxury Afloat
                </p>
            </div>
            <div className='my-10  flex justify-center items-center lg:col-span-2'>
                <Link href="#yachts" className='text-xl lg:text-3xl bg-black text-white  px-10 py-2 rounded-lg font-italian '>Yachts</Link>
            </div>

            <div id='' className='py-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='bg-white text-black  p-5 '>
                        <h1 className='text-bold font-italian text-4xl py-5'>Discover Luxury Afloat</h1>
                        <p className='text-justify font-2xl'> {`At LEURLUX, we take pride in providing a superior yacht rental service, offering an exquisite fleet of yachts that will cater to all your desires. Our collection includes an array of meticulously maintained yachts, from sleek and nimble vessels for intimate getaways to expansive, lavish yachts for group excursions.`}</p>
                    </div>
                    <div className='bg-white text-black  p-5 '>
                        <h1 className='text-bold font-italian text-4xl py-5'>A Bigger Spectacle: Catamaran Yachts</h1>
                        <p className='text-justify font-2xl'>{`In addition to our exceptional yacht fleet, we offer access to larger catamaran yachts that can entertain large groups, accommodating from 27 to 180 people. These magnificent vessels are ideal for hosting grand celebrations, corporate events, or any occasion where you want to create unforgettable memories with a larger audience.`}</p>
                    </div>

                </div>
            </div>

            <div className='px-4 lg:px-10 my-10' id='yachts'>
                <h1 className='text-4xl font-italian'>Yacht Details</h1>
                <div className='grid lg:grid-cols-2 gap-5 my-10'>
                    {yachts.map((yacht, index) => (
                        <YachtDetails key={index} yacht={yacht} />
                    ))}
                </div>
            </div>
            <div id='' className='py-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='bg-white text-black  p-5 '>
                        <h1 className='text-bold font-italian text-4xl py-5'>Tailored Experiences</h1>
                        <p className='text-justify font-2xl'> {`Our commitment to excellence extends beyond merely booking a yacht. We believe that your journey should be as unique as you are. Whether you're seeking a romantic escape, a celebratory gathering, or a corporate event, our expert team of professionals will craft your experience to your preferences. No request is too extravagant, no detail is too small.`}</p>
                    </div>
                    <div className='bg-white text-black  p-5 '>
                        <h1 className='text-bold font-italian text-4xl py-5'>Your Ocean Playground</h1>
                        <p className='text-justify font-2xl'>{`Indulge in the thrill of cruising the Mediterranean, exploring hidden coves, or anchoring off vibrant coastal cities. Our yachts are your ticket to a world of adventure and relaxation, all within your reach.
`}</p>
                    </div>
                    <div className='my-10  flex justify-center items-center lg:col-span-2'>
                        <Link href="#yachts" className='text-xl lg:text-3xl bg-black text-white  px-10 py-2 rounded-lg font-italian '>Yachts</Link>
                    </div>
                    {/* <div className='bg-white text-black  p-5 lg:col-span-2 '>
                        <h1 className='text-bold font-italian text-4xl py-5 text-start lg:text-center'>Welcome Aboard</h1>
                        <p className='text-justify font-2xl'>{`While our private jet service elevates your travel, our commitment to luxury doesn't end upon landing. When you arrive at your destination, you'll be welcomed by our exceptional concierge services that redefine hospitality. From exclusive chauffeur-driven transfers to securing reservations at the world's finest restaurants, we ensure that every moment of your stay is extraordinary.`}
                            <span className='block py-5 bg-none'></span>
                            {` 
As you embark on your journey with LEURLUX Yacht Rentals, you're in for an unparalleled experience. From the moment you step on board, you'll be welcomed by an atmosphere of sophistication, comfort, and adventure.`}
                            <span className='block py-5 bg-none'></span>
                            {` Our yachts and catamarans are not just vessels, they're gateways to the extraordinary. Set sail with us, and let the azure waters of the Mediterranean be your playground.`}</p>
                        <span className='block py-5 bg-none'></span>
                        <p>
                            {`Let us redefine the way you experience the world. Welcome to a world where luxury meets the sea, and where your every nautical dream becomes a reality, whether you're in an intimate yacht or aboard one of our grand catamarans.`}
                        </p>
                    </div> */}

                </div>
                {/* <div className='my-10  flex justify-center items-center lg:col-span-2'>
                    <Link href="#yachts" className='text-xl lg:text-3xl bg-black text-white  px-10 py-2 rounded-lg font-italian '>Yachts</Link>
                </div> */}
            </div>

        </div >
    );
}
const page = () => {
    return <Yachts />
};

export default page;