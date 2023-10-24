'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'
const Accomodation = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/property')
    }, [])
    return (
        <div>

        </div>

    );
}
const page = () => {
    return <Accomodation />
};

export default page;