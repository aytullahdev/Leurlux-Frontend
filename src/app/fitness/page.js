'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'
const Fitness = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/lifestyle/personal-training')
    }, [])
    return (
        <div>

        </div>

    );
}
const page = () => {
    return <Fitness />
};

export default page;