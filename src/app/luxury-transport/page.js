'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'
const LuxuryTransfer = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/transfer')
    }, [])
    return (
        <div>

        </div>

    );
}
const page = () => {
    return <LuxuryTransfer />
};

export default page;