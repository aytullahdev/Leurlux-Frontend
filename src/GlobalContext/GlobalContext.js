"use client";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [selectedSuperCar, setSelectedSuperCar] = useState();
    const [selectedYacht, setSelectedYacht] = useState();

    return (
        <GlobalContext.Provider
            value={{
                selectedSuperCar,
                setSelectedSuperCar,
                selectedYacht,
                setSelectedYacht,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};