'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'
const BeachClub = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/lifestyle/beach-club')
    }, [])
    return (
        <div>

        </div>

    );
}
const page = () => {
    return <BeachClub />
};

export default page;