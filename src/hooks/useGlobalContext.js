import { GlobalContext } from '@/GlobalContext/GlobalContext';
import React, { useContext } from 'react';

const useGlobalContext = () => {
    const context = useContext(GlobalContext)
    if (!context) {
        throw new Error(
            'Context Must be in ThemeProvider'
        )
    }
    return context
};

export default useGlobalContext;