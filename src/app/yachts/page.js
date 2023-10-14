'use client'
import Button from '@/components/resueable/Button';
import useGlobalContext from '@/hooks/useGlobalContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
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
        "name": "PORTOFINO 46 ZERO",
        "images": ['https://emeraldyachtcharter.com/cdn/shop/products/220419_SCI_PORTOFINO_46_MK_DRONE_48_LOW_RES.jpg?v=1681397476&width=1426', 'https://emeraldyachtcharter.com/cdn/shop/products/220419_SCI_PORTOFINO_46_MK_DRONE_23_LOW_RES.jpg?v=1681397476&width=1426'],
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
        "images": ['https://photos.inautia.com/barcosOcasion/6/2/1/9/sunseeker-predator-56-ht-28158030152954524951674856494548x.jpg'],
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
        "images": ['https://imageresizer.yachtsbt.com/boats/611a1a2f450792105c3f2320/611a1c5d24a0d703854405f6.jpg?method=crop&width=1200&height=630&format=jpeg'],
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
        "images": ['https://www.charterenibiza.com/wp-content/uploads/210803_MK_SMARTCHARTER_LOW-4.jpg'],
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
    {
        "name": "MANGUSTA 80 HAPPY HOUR",
        "images": ['https://images.boatsgroup.com/images/1/56/60/6685660_20180823124239142_1_XLARGE.jpg'],
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
    }
]




function YachtDetails({ yacht }) {
    const { setSelectedYacht, } = useGlobalContext()
    const router = useRouter();
    const handleView = () => {
        setSelectedYacht(yacht);
        router.push('/book?category=yacht');
       
    }
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6  cursor-pointer">
            <div>
                <img src={yacht.images[0]} className='w-full h-[400px]' />
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
        <div className='py-2'>
            <div className='relative w-full '>
                <div class="relative h-screen">
                    <video autoPlay loop muted class="w-full h-full object-cover">
                        <source src="./yacht.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div class="absolute inset-0 bg-black opacity-50"></div>
                    <div class="absolute inset-0 flex flex-col items-center justify-center text-white px-10 py-5">

                        <div>
                            <h1 className='font-italian  text-6xl py-2'>YACHT<b className='font-bold'>RENTAL MARBELLA</b></h1>
                            <hr className='py-5' />
                            <p className='text-2xl font-italian'>
                                {` Browse our selection below to discover the ideal yacht for your Marbella holiday rental. If you can't find the specific yacht you have in mind, please don't hesitate to get in touch with us. Our extensive network of partners ensures that we can locate the yacht of your dreams.`}
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
                            <Link className='px-5  block text-xl font-italian py-1 rounded-full bg-gray-300 hover:bg-gray-200 text-black' href="#yachts">Yachts</Link>
                        </div>


                    </div>

                </div>

            </div>
            <div className='px-10 my-10' id='yachts'>
                <h1 className='text-4xl font-italian'>Yacht Details</h1>
                <div className='grid grid-cols-2 gap-5 my-10'>
                    {yachts.map((yacht, index) => (
                        <YachtDetails key={index} yacht={yacht} />
                    ))}
                </div>
            </div>

        </div >
    );
}
const page = () => {
    return <Yachts />
};

export default page;