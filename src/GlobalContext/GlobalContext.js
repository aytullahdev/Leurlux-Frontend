"use client";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [selectedSuperCar, setSelectedSuperCar] = useState();
    const [selectedYacht, setSelectedYacht] = useState();
    const [selectedVilla, setSelectedVilla] = useState();
    const [selectedNightClub, setSelectedNightClub] = useState();
    const [selectedRestaurant, setSelectedRestaurant] = useState();
    const [selectedHotel, setSelectedHotel] = useState();
    const [selectedApartment, setSelectedApartment] = useState();
    const [selectedTransport, setSelectedTransport] = useState({
        PricingOptions: [
            {
                "apiid": "price_1O1SJQF65j8JGYI7ebPYLLA8",
                "price": "197",
                "title": "Malaga Airport - Marbella",
                "pricetag": "€"
            },
            {
                "apiid": "price_1O1SJQF65j8JGYI7ebPYLLA8",
                "price": "197",
                "title": "Marbella - Malaga Airport",
                "pricetag": "€"
            },
            {
                "price": "225",
                "title": "Full day (8 Hours)",
                "pricetag": "€/hour"
            }
        ],
        ExtraPricing: [
            {
                "price": "225",
                "title": "By the hour (Minimum 4 hours)",
                "pricetag": "€"
            },
            {
                "price": "185",
                "title": "Full-day additional rate (After 9 Hours)",
                "pricetag": "€/hour"
            }
        ],
        vehicle: "Hongqi",
    });
    const [isBooked, setIsBooked] = useState(false)
    const [links, setLinks] = useState({
        'address': ' Rua Eng. Lúcio de Azevedo, no 21-A 2700-347 Amadora, Portugal ',
        'phone': '+46 736 700 548',
        'whatsapp': '+46736700548',
        'instagram': 'https://www.instagram.com/leurlux',
        'mail': 'info@leurlux.com'

    })

    return (
        <GlobalContext.Provider
            value={{
                selectedSuperCar,
                setSelectedSuperCar,
                selectedYacht,
                setSelectedYacht,
                links,
                setLinks,
                selectedVilla,
                setSelectedVilla,
                selectedApartment,
                setSelectedApartment,
                selectedHotel,
                setSelectedHotel,
                isBooked,
                setIsBooked,
                selectedTransport,
                setSelectedTransport,
                selectedNightClub,
                setSelectedNightClub,
                selectedRestaurant,
                setSelectedRestaurant
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};