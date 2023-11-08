"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ArrowDown from '@/components/resueable/ArrowDown'
import Link from "next/link";
const services = [
    {
        title: "Beach Club",
        id: 'beach_club',
        img: require("@/assets/images/beachclub.jpg").default.src,
        to: "/beach-club#top",
        next: '#restaurant',
    },
    {
        title: "Restaurants / Dinner Parties",
        id: 'restaurant',
        next: '#night_club',

        img: require("@/assets/images/resturent-dinner.jpg").default.src,
        to: "/restaurants-dinner-parties#top",
    },
    {
        title: "Night Club",
        id: 'night_club',

        next: '#personal_training',
        img: require("@/assets/images/night-club.jpg").default.src,
        to: "/night-club#top",
    },
    {
        title: "Personal Training",
        id: 'personal_training',
        next: '#massage',
        img: require("@/assets/images/personal-training.jpg").default.src,
        to: "/personal-training#top",
    },
    {
        title: "Massage",
        id: 'massage',
        next: '#private_runner',
        img: require("@/assets/images/massage.jpg").default.src,
        to: "/massage#top",
    },
    {
        title: "Private Runner",
        // img: require("@/assets/images/private-runner.jpg").default.src,
        img: '/privaterunner.webp',
        to: "/private-runner#top",
        id: 'private_runner',
    },
];
const SingleServices = ({ service }) => {
    const { title, list, img, to, id, next } = service || {};
    const [isHover, setIsHover] = useState(false);
    const router = useRouter();
    return (
        <>
            {service && title && (
                <div
                    id={id}
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
                    {title !== 'Private Runner' && <Link onClick={(e) => e.stopPropagation()} href={next} className=" absolute bottom-0 py-5 lg:hidden w-full flex flex-row justify-start items-center">
                        <ArrowDown />
                    </Link>
                    }
                </div>
            )}
        </>
    );
};
const page = () => {
    return (
        <div className="">
            <div id="services" className="w-full lg:px-5  grid lg:grid-cols-3 h-screen">
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
