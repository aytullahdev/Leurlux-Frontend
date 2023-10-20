"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ArrowDown from '@/components/resueable/ArrowDown'
const services = [
    {
        title: "Beach Club",

        img: require("@/assets/images/beachclub.jpg").default.src,
        to: "beach-club",
    },
    {
        title: "Restaurants / Dinner Parties",

        img: require("@/assets/images/resturent-dinner.jpg").default.src,
        to: "restaurants-dinner-parties",
    },
    {
        title: "Night Club",

        img: require("@/assets/images/night-club.jpg").default.src,
        to: "night-club",
    },
    {
        title: "Personal Training",

        img: require("@/assets/images/personal-training.jpg").default.src,
        to: "personal-training",
    },
    {
        title: "Massage",

        img: require("@/assets/images/massage.jpg").default.src,
        to: "massage",
    },
    {
        title: "Private Runner",
        img: require("@/assets/images/private-runner.jpg").default.src,
        to: "private-runner",
    },
];
const SingleServices = ({ service }) => {
    const { title, list, img, to } = service || {};
    const [isHover, setIsHover] = useState(false);
    const router = useRouter();
    return (
        <>
            {service && title && (
                <div
                    onClick={() => {
                        router.push(`/lifestyle/${to}`);
                    }}
                    className="border w-full border-black hover:border-white h-[300px] lg:h-full text-white relative  bg-cover origin-center bg-center cursor-pointer"
                    onMouseLeave={() => {
                        setIsHover(false);
                    }}
                    onMouseOver={() => {
                        setIsHover(true);
                    }}
                    style={{
                        backgroundImage: !isHover
                            ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${img})`
                            : `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)),url(${img})`,
                    }}
                >
                    <div className="absolute bottom-0 left-0 px-10 h-[200px]">
                        <h1 className=" font-italian text-3xl">{title}</h1>
                        <ul className="text-base font-thin flex flex-col gap-2 my-10">
                            {list &&
                                list.map((singleItem, indx) => {
                                    return <li key={`servicelist${indx}`}>{singleItem}</li>;
                                })}

                        </ul>

                    </div>
                    <div className=" absolute bottom-0 py-5 lg:hidden w-full flex flex-row justify-start items-center">
                        <ArrowDown />
                    </div>
                </div>
            )}
        </>
    );
};
const page = () => {
    return (
        <div className="">
            <div id="services" className="w-full  grid lg:grid-cols-3 h-screen">
                {services.map((singleServices, indx) => {
                    return (
                        <SingleServices key={`service${indx}`} service={singleServices} />
                    );
                })}
            </div>
        </div>
    );
};

export default page;
