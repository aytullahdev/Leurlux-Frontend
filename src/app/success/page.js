"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Link from 'next/link'
import useGlobalContext from '@/hooks/useGlobalContext';
const SuccessBooking = () => {
    const searchParams = useSearchParams();
    const { links } = useGlobalContext()
    const session_id = searchParams.get("session_id");
    const email = searchParams.get("email");

    const name = searchParams.get("name");
    return (
        <>
            <div className="h-full min-h-screen w-full flex flex-col justify-start py-10 items-center">
                <h1 className='text-3xl lg:text-6xl font-bold text-center py-10'> Thank you for your booking.</h1>
                <p className='lg:text-xl text-center'>  If you have any questions or need assistance, <br />please feel free to reach out to us on <Link href={`https://wa.me/${links.whatsapp}`} target="_blank" className='text-xl font-bold text-green-500'>WhatsApp👇</Link>.</p>
                {/* <div className="text-gray-500 flex flex-col gap-2 py-5 ">
                    {name && (
                        <div className="w-full ">
                            <h1>
                                Name: <span>{name}</span>{" "}
                            </h1>
                        </div>
                    )}
                    {email && (
                        <div className="w-full ">
                            <h1>
                                Email: <span>{email}</span>{" "}
                            </h1>
                        </div>
                    )}
                    {session_id && (
                        <div className="w-full ">
                            <h1>
                                Payment ID: <span>{session_id}</span>{" "}
                            </h1>
                        </div>
                    )}
                </div> */}
                <div className="my-10">
                    <Link href={"/#services"} className="font-italian text-base  lg:text-3xl underline">Our Services</Link>
                </div>
            </div>
        </>
    );
};
const page = () => {
    return <SuccessBooking />;
};

export default page;
