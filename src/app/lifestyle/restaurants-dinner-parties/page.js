'use client'
import Carousel from '@/components/resueable/Carousel';
import useGlobalContext from '@/hooks/useGlobalContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
const RestaurantsDinner = () => {
    const restaurantList = [
        {
            name: 'MOSHFUN KITCHEN',
            description: `Occo Marbella’s mystical experience and gastronomic concept does not end on the first floor. If you are looking for a casual setting for sunset cocktails and snacks, visit our unique open-air rooftop located on the second level.

            It's natural and beautiful setting, filled with elegant features and greenery, will take you right back to the Middle Eastern world, while overviewing. A hidden location overviewing La Concha Mountain, perfect for any occasion.`,
            images: [
                '/restaurants/moshfunkitchen/moshfunkitchen1.jpg',
                '/restaurants/moshfunkitchen/moshfunkitchen2.jpg',
                '/restaurants/moshfunkitchen/moshfunkitchen3.jpg',
                '/restaurants/moshfunkitchen/moshfunkitchen4.jpg',
                '/restaurants/moshfunkitchen/moshfunkitchen5.jpg',
                '/restaurants/moshfunkitchen/moshfunkitchen6.jpg',
                '/restaurants/moshfunkitchen/moshfunkitchen7.jpg',
            ]
        },
        {
            name: 'OCCO RESTAURANT',
            description: `The elements of Momento music are pitch, rhythm, dynamics, and the sonic qualities of timbre and texture (which are sometimes termed the "color" of a musical sound). The Taste of our food, and essence of the environment makes of Momento a unique temple in Marbella.`,
            images: [
                '/restaurants/occorestaurant/occorestaurant1.jpeg',
                '/restaurants/occorestaurant/occorestaurant3.jpeg',
                '/restaurants/occorestaurant/occorestaurant5.jpeg',
                '/restaurants/occorestaurant/occorestaurant6.jpeg',

                "https://scontent-fra3-1.cdninstagram.com/v/t39.30808-6/387760247_18386507617005097_8347950623649327463_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08&_nc_ht=scontent-fra3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=pF5ftwZnW08AX-ZCMw7&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfBWC0Mi8lYc3DJUDyx_bvPKOKX8Fn7ShxgNwKKSIDg-Ng&oe=653AB3BD&_nc_sid=8b3546",
                "https://scontent-fra3-1.cdninstagram.com/v/t39.30808-6/391619203_18387789085005097_3688453795857224091_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08&_nc_ht=scontent-fra3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=pRU8xnLBAMcAX_02lbU&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfDiP9syxPfAhd6k063ao0T2ADVOiYpdLY8HHfaqnH-9Ug&oe=6539BC9A&_nc_sid=8b3546",
                "https://scontent-fra3-1.cdninstagram.com/v/t39.30808-6/381040797_18382952686005097_3184504872404441343_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-fra3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=yTWGv6Un7gYAX9zGelo&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfASeIr6Jj40fiXDcRegnXCePN4sG99zmNpasEDHCXonIw&oe=653B440D&_nc_sid=8b3546",
                "https://scontent-fra3-1.cdninstagram.com/v/t39.30808-6/375219303_18380397250005097_7181241234943702404_n.jpg?stp=c47.0.1270.1270a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-fra3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=SdW6JBqjAwQAX8D9q1g&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfDB_g4qHwdvDEkuRt9nsFI3t-nMu6Ux_Vl5Ps_JVa9Wbw&oe=653B0516&_nc_sid=8b3546",
                "https://scontent-fra3-1.cdninstagram.com/v/t39.30808-6/384316822_18383901208005097_6588940865325600027_n.jpg?stp=c0.179.1440.1440a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-fra3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=lPb7qAiaKo0AX_WZaQO&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfC3NsuwnN2Xuv9ycjU_7rRiL_4rJrt3p0TOyh8UgvgYpA&oe=653A8DEB&_nc_sid=8b3546",
                "https://scontent-fra3-1.cdninstagram.com/v/t39.30808-6/379334944_18381675973005097_4834785387524584947_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-fra3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=sccBol-XUoMAX_woGAa&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfAP_49l-L1UBS1eWlMu5TAztQPN2aUFPoSIDuuFcv2pAQ&oe=653A77F6&_nc_sid=8b3546",
                "https://scontent-fra3-1.cdninstagram.com/v/t39.30808-6/384499668_18384278740005097_4593192401843832520_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-fra3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=7cZO1NzJDfMAX-aSxZr&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfC_t0VBbNFBiX_BG5nX4Mhhlu3DNIah70aa9kPUgslryA&oe=653A6B23&_nc_sid=8b3546",
                "https://scontent-fra3-1.cdninstagram.com/v/t39.30808-6/384316822_18383901208005097_6588940865325600027_n.jpg?stp=c0.179.1440.1440a_dst-jpg_e15_s320x320&_nc_ht=scontent-fra3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=lPb7qAiaKo0AX_WZaQO&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfCOYS8XPicJBToA8ZDavrmQvugfO0w4okkMS7tq1cAvPQ&oe=653A8DEB&_nc_sid=8b3546",
                "https://scontent-fra3-1.cdninstagram.com/v/t39.30808-6/384499668_18384278740005097_4593192401843832520_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e15_s320x320&_nc_ht=scontent-fra3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=7cZO1NzJDfMAX-aSxZr&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfDdBf_Zp02vha2pAB90gf7qyPFjOKO6dsZfZScmqHQIeg&oe=653A6B23&_nc_sid=8b3546",
            ]
        },
        {
            name: 'BREATHE',
            description: `BREATHE is a multifaceted gastronomic concept dedicated to connecting people,
            nature and fresh-thinking gastronomy.This multifaceted gastronomic concept offers a place in Marbella where you can relax, dine, meet, socialise, enjoy a cocktail and be inspired by quality food made with care. A way of life that adds another dimension to breakfast, lunch, dinner and drinks in Marbella. BREATHE OPENING HOURS:
            Every Day from 18:00 `,
            images: [
                '/restaurants/breathe/breath1.jpg',
                '/restaurants/breathe/breath2.jpg',
                '/restaurants/breathe/breath3.jpg',
                '/restaurants/breathe/breath4.jpg',
                '/restaurants/breathe/breath5.jpg',
                '/restaurants/breathe/breath6.jpg',
            ]
        },
        {
            name: 'PUENTEROMANO',
            description: `Taking guests on an immersive journey for the senses, COYA Marbella prides itself on its innovative menus which fuse traditional Peruvian dishes with Japanese, Chinese and Spanish cooking techniques. Showcasing complexity and intensity in its flavours, yet simplicity in its execution and presentation.

            Drawing inspiration from the oldest bars in Lima, the COYA Marbella Pisco Bar provides a luxurious and zestful setting for any occasion. When visiting, you'll find a vast selection of COYA signature homemade infusions, Peruvian classics & localised specials.
            
            Guests joining us at COYA Marbella will enjoy the unique sounds of COYA Music. Discover the entrancing beats of our resident DJs who play nightly, as well as the frequent music events taking place across the year with special guest DJs.`,
            images: [

                "https://curator-assets.b-cdn.net/39267d23-fbd9-46c9-865f-c3b073863e3e/335921302.jpg?width=480&quality=75",
                "https://curator-assets.b-cdn.net/39267d23-fbd9-46c9-865f-c3b073863e3e/335465801.jpg?width=480&quality=75",
                "https://curator-assets.b-cdn.net/39267d23-fbd9-46c9-865f-c3b073863e3e/336064495.jpg?width=480&quality=75",
                "https://www.puenteromano.com/media/xcefkk5e/puente-romano-coya9334.jpg?width=525&height=590&quality=80&v=1da001e8dc07470",
                "https://curator-assets.b-cdn.net/39267d23-fbd9-46c9-865f-c3b073863e3e/335394797.jpg?width=480&quality=75",
                "https://curator-assets.b-cdn.net/39267d23-fbd9-46c9-865f-c3b073863e3e/336507694.jpg?width=480&quality=75",
                "https://www.puenteromano.com/media/4dddvvj5/8pedrojaencom_l1070628.jpg?width=405&height=360&quality=80&v=1d9bf3aadc6b6f0",
                "https://www.puenteromano.com/media/n3upnjnf/monkey-club-6.jpg?rxy=0.4242196027588574,0.5027092208961587&width=405&height=360&quality=80&v=1d9dcc06c8494c0",
                "https://curator-assets.b-cdn.net/39267d23-fbd9-46c9-865f-c3b073863e3e/337027982.jpg?width=480&quality=75",
                "https://www.puenteromano.com/media/g0tdplbu/hero2puenteromano_cipriani_3.jpg?rxy=0.5073245376895887,0.8510662129383424&width=405&height=360&quality=80&v=1d9f0853137d700",
                "https://www.puenteromano.com/media/pa2faf2s/celicioso-4.jpg?width=405&height=360&quality=80&v=1d9aa7ce0a09ff0",
                "https://www.puenteromano.com/media/lekotwdn/hero3puenteromano_kids_club_2.jpg?rxy=0.5101585221379324,0.5067695016582004&width=420&height=250&quality=80&v=1d9bfa0ce44d3b0",

            ]
        },
        {
            name: 'NOBU HOTELS',
            description: `Designed for the trendsetters. Curated for the playful. Join us at Nobu Hotel Marbella, a destination for entertainment, food and indulgence.  Located on the swish ‘Golden Mile’ in Southern Spain, you are just steps from the sandy beaches and turquoise waters of the Mediterranean.
            ​
            Check into one of our sleek open plan guestrooms, with expansive terraces overlooking La Plaza, Marbella’s social and epicurean hotspot.  Creamy tones, light wood and a hint of contemporary coastal cool make each room a chic space in which to enjoy the subtropical surroundings. Our hotel is located a few meters away from the beach.`,
            images: [
                "https://marbella.nobuhotels.com/wp-content/uploads/2021/08/CLE-DE-PEAU-2.jpg",
                "https://marbella.nobuhotels.com/wp-content/uploads/2019/05/Home1.jpg",
                "https://marbella.nobuhotels.com/wp-content/uploads/2022/11/Nobu-bar.jpg",
                "https://marbella.nobuhotels.com/wp-content/uploads/2019/05/Home3.jpg",
                "https://marbella.nobuhotels.com/wp-content/uploads/2022/10/NobuSuite-1-optimized.jpg",
                "https://marbella.nobuhotels.com/wp-content/uploads/2019/02/NOBU-Interiors-and-Entrance-4-1.jpg",
                "https://marbella.nobuhotels.com/wp-content/uploads/2019/08/NOBU-Interiors-and-Entrance-3.jpg",
                "https://marbella.nobuhotels.com/wp-content/uploads/2019/02/MeetingsEvents.jpg",
                "https://marbella.nobuhotels.com/wp-content/uploads/2019/07/Nobu-Marbella-Pool-1.jpg",
            ]
        },
        {
            name: 'NOMAD MARBELLA',
            description: `Nomad Restaurant & Club opened March 2023 in the village of Aloha, Nueva Andalucia, Marbella.
            An impressive renovation has taken place with interior design by Studio Hick.
            
            Open for dinner everyday 18:00- 24:00
            
            (kitchen last orders 23:30)`,
            images: [
                "https://static.wixstatic.com/media/decd00_3dc6e0e72fdf4936af857f9ccef7080a~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_3dc6e0e72fdf4936af857f9ccef7080a~mv2.jpg",
                "https://static.wixstatic.com/media/decd00_df12b4550f8d4a8f9ec6a38d8f99ba0e~mv2.jpeg/v1/fit/w_533,h_355,q_90/decd00_df12b4550f8d4a8f9ec6a38d8f99ba0e~mv2.jpeg",
                "https://static.wixstatic.com/media/decd00_2d743c799e204113b588cce640bd3055~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_2d743c799e204113b588cce640bd3055~mv2.jpg",
                "https://static.wixstatic.com/media/decd00_5ae3ecfaa96c405abc360f1b232a69e2~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_5ae3ecfaa96c405abc360f1b232a69e2~mv2.jpg",
                "https://static.wixstatic.com/media/decd00_2f43c116ccea46e0af57102a417639bb~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_2f43c116ccea46e0af57102a417639bb~mv2.jpg",
                "https://static.wixstatic.com/media/decd00_698fd82b7c97421fa9be925747dfcfc6~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_698fd82b7c97421fa9be925747dfcfc6~mv2.jpg",
                "https://static.wixstatic.com/media/decd00_b7243ccf2a3346f489485de69af6db66~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_b7243ccf2a3346f489485de69af6db66~mv2.jpg",
                "https://static.wixstatic.com/media/decd00_eafe07023986436d8c905f9b30feb787~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_eafe07023986436d8c905f9b30feb787~mv2.jpg",
                "https://static.wixstatic.com/media/decd00_9618410539324f028eb6d51234b0cab5~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_9618410539324f028eb6d51234b0cab5~mv2.jpg",
                "https://static.wixstatic.com/media/decd00_996739ea3f8f48bbbbedfc4697527eb0~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_996739ea3f8f48bbbbedfc4697527eb0~mv2.jpg",
                "https://static.wixstatic.com/media/decd00_3dc6e0e72fdf4936af857f9ccef7080a~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_3dc6e0e72fdf4936af857f9ccef7080a~mv2.webp",
                "https://static.wixstatic.com/media/decd00_e99d903391dc4b96aa3faad63a0516eb~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_e99d903391dc4b96aa3faad63a0516eb~mv2.jpg",
                "https://static.wixstatic.com/media/decd00_698fd82b7c97421fa9be925747dfcfc6~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_698fd82b7c97421fa9be925747dfcfc6~mv2.webp",
                "https://static.wixstatic.com/media/decd00_69bffe4bf323431187b7b39d59318ace~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_69bffe4bf323431187b7b39d59318ace~mv2.jpg",
                "https://static.wixstatic.com/media/decd00_3b7550ac9ed0477b803d0cc0eb5514ab~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_3b7550ac9ed0477b803d0cc0eb5514ab~mv2.jpg",
                "https://static.wixstatic.com/media/decd00_df12b4550f8d4a8f9ec6a38d8f99ba0e~mv2.jpeg/v1/fit/w_533,h_355,q_90/decd00_df12b4550f8d4a8f9ec6a38d8f99ba0e~mv2.webp",
                "https://static.wixstatic.com/media/decd00_2d743c799e204113b588cce640bd3055~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_2d743c799e204113b588cce640bd3055~mv2.webp",
                "https://static.wixstatic.com/media/decd00_ddf7b5e1574a48e8bd8f76eaf276daf6~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_ddf7b5e1574a48e8bd8f76eaf276daf6~mv2.jpg",
                "https://static.wixstatic.com/media/decd00_648dea42cb89440487a64297ae1db5ee~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_648dea42cb89440487a64297ae1db5ee~mv2.jpg",
                "https://static.wixstatic.com/media/decd00_a52c4dcedd194161b31a2cb12e2e425b~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_a52c4dcedd194161b31a2cb12e2e425b~mv2.jpg",
                "https://static.wixstatic.com/media/decd00_5ae3ecfaa96c405abc360f1b232a69e2~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_5ae3ecfaa96c405abc360f1b232a69e2~mv2.webp",
                "https://static.wixstatic.com/media/decd00_9618410539324f028eb6d51234b0cab5~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_9618410539324f028eb6d51234b0cab5~mv2.webp",
                "https://static.wixstatic.com/media/decd00_2f43c116ccea46e0af57102a417639bb~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_2f43c116ccea46e0af57102a417639bb~mv2.webp",
                "https://static.wixstatic.com/media/decd00_f45b23ba55444de693697978e42454bb~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_f45b23ba55444de693697978e42454bb~mv2.jpg",
                "https://static.wixstatic.com/media/decd00_b7243ccf2a3346f489485de69af6db66~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_b7243ccf2a3346f489485de69af6db66~mv2.webp",
                "https://static.wixstatic.com/media/decd00_eafe07023986436d8c905f9b30feb787~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_eafe07023986436d8c905f9b30feb787~mv2.webp",
                "https://static.wixstatic.com/media/decd00_e99d903391dc4b96aa3faad63a0516eb~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_e99d903391dc4b96aa3faad63a0516eb~mv2.webp",
                "https://static.wixstatic.com/media/decd00_ddf7b5e1574a48e8bd8f76eaf276daf6~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_ddf7b5e1574a48e8bd8f76eaf276daf6~mv2.webp",
                "https://static.wixstatic.com/media/decd00_2af1c03cd3fe407398bc5d90b50d4aa6~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_2af1c03cd3fe407398bc5d90b50d4aa6~mv2.jpg",
                "https://static.wixstatic.com/media/decd00_2af1c03cd3fe407398bc5d90b50d4aa6~mv2.jpg/v1/fit/w_533,h_355,q_90/decd00_2af1c03cd3fe407398bc5d90b50d4aa6~mv2.webp",
            ]
        }
    ]
    const { setSelectedRestaurant } = useGlobalContext();
    useEffect(() => {
        setSelectedRestaurant(null)
    }, [])
    const router = useRouter();
    const handleSelect = (selecteClub) => {
        setSelectedRestaurant(selecteClub)
        router.push('/book?category=restaurant')
    }
    return (
        <div className='py-8 px-2 lg:px-0'>
            <h1 className='text-4xl lg:text-6xl font-italian' >Restaurants <span style={{ color: 'rgb(193, 182, 134)' }}>Dinner</span> Parties</h1>
            <div className='grid lg:grid-cols-3 gap-5 my-10'>
                {
                    restaurantList.length ? restaurantList.map((singleRestaurant, indx) => {
                        return (
                            <div key={indx} className='flex flex-col gap-5 shadow-sm border rounded-lg'>

                                <div className='lg:p-5'>
                                    <Carousel photos={singleRestaurant.images} />

                                </div>
                                <div className=' pb-3 lg:p-5 flex gap-5 lg:gap-0 flex-col lg:flex-row justify-around items-center'>
                                    <h1 className='text-xl font-italian'>{singleRestaurant.name}</h1>
                                    <button onClick={() => { handleSelect(singleRestaurant) }} className='text-white bg-black font-italian px-5 block py-2 rounded-lg'>Book Now</button>
                                </div>
                            </div>
                        )
                    }) : null
                }
            </div>

        </div>
    );
}
const page = () => {
    return < RestaurantsDinner />

};

export default page;