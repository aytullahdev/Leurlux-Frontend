"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Link from 'next/link'

const SuccessBooking = () => {
    const searchParams = useSearchParams();
    const session_id = searchParams.get("session_id");
    const email = searchParams.get("email");

    const name = searchParams.get("name");
    return (
        <>
            <div className="h-full min-h-screen w-full flex flex-col justify-start py-10 items-center">
                <h1 className=" text-6xl font-italian text-green-700">Thank you for booking</h1>
                <div className="text-gray-500 flex flex-col gap-2 py-5 ">
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
                </div>
                <div>
                    <Link href={"/#services"} className="font-italian text-3xl underline">Our Services</Link>
                </div>
            </div>
        </>
    );
};
const page = () => {
    return <SuccessBooking />;
};

export default page;
