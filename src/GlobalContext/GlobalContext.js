"use client";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [selectedSuperCar, setSelectedSuperCar] = useState();
    const [selectedYacht, setSelectedYacht] = useState();
    const [selectedVilla, setSelectedVilla] = useState();
    const [selectedHotel, setSelectedHotel] = useState();
    const [selectedApartment, setSelectedApartment] = useState();
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
                setSelectedHotel
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};