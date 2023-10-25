'use client'
import Carousel from '@/components/resueable/Carousel';
import GalleryCarousel from '@/components/resueable/GalleryCarousel'
import useGlobalContext from '@/hooks/useGlobalContext';
import { useRouter } from 'next/navigation';
import useCollection from '@/hooks/useCollection';
import React, { useEffect } from 'react';
const hotels = [
    {
        "name": "Puente Romano Beach Resort",
        "rating": 7.9,
        "reviews": 2279,
        "location": "Marbella • 4 km from centre",
        "sustainabilityLevel": "Beachfront Travel Sustainable Level 1",
        images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/374467286.jpg?k=5895febf7f6adbca7e04f752197c5a4b60f59ebc37779aa66eb8c5f6521671e3&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/288153271.jpg?k=f8d388794e5089d7700d839d8e93437e3baa70df6fb38029a7b68e96c56429c1&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/106844564.jpg?k=f03952c6c33e6b62599ef65f8be6cd4830830c0620e2c604d2c1a9164df3cc50&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/374471385.jpg?k=fd6c568d095fc57cde146d91e12f74f83609557a24ec2602060fc02663ead999&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/288153180.jpg?k=d4b0a3e67f3fb854f1c3d11ae2b54a5c1bb167dafe9ba00fda0d0661f0faf57f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/325290522.jpg?k=680287598f84a86f2a0a57b778dcb5c697faaddd9f8d14757a19649e4f467436&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/287662227.jpg?k=3caea3c5de7d0e0768e1a69c43210a2e3a513c07aa813750b31f61adfce19e0e&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/287662230.jpg?k=28a19a6e7e84438cb3ec1a29090ee52b3728ff8adb1d4a4477c7144767540b5c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/325419663.jpg?k=a4a7160b71037ba1fb17c2ea2e25211db3dad96544b8a8f77b36be5e1b7129f1&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/288153268.jpg?k=381a140712f8d95d2c9ed622d192ff6ae07acd5baf82d53c4ee90c398997f367&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/325419642.jpg?k=f57242f512637c9449e30a2b9988b1d5eb2f296dfbfbbdf298fefd175d79a9c3&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/288153187.jpg?k=2941304e9bea849c33eda61b2ef92be12493cde868ea9a4e8e962633706c22b4&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/325419245.jpg?k=777ef6d41297b4fe21bae596ce666d25f022b06d9ead73497cc109f7aa1e513f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/288153274.jpg?k=1ed0b7dfc7491c50bf81f92b80ba128262060f120e62d8caa3cd94da092da718&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/325419178.jpg?k=f7963ec314d891a7c42afe712b34b100eb581748647f785fa81bff23cc95053d&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/287662405.jpg?k=2c21633ba3781a15f0ad316ae24250393b9ee3a7361b2b67d92fd63b77e59a16&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/288153181.jpg?k=84f9b7cf4a81deeffe8f90a6a99074d285ac1020d3c7a9ac74add7e0e0385bd7&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/325289636.jpg?k=bccfaf1200861f394ad65a75be890ed3d54be59fb5d8ac660bfc4c7f3d02fddc&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/325289627.jpg?k=f7ecb0221583cfd5e4e3c43dfd9b96a2259376eba29094e675ac19dd02bdad75&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/287662406.jpg?k=cd940c50a199d84e1edfdac56078d16bbc67130c718548ac53d9e3495761b878&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/325289612.jpg?k=4eac7220fe5b2cec93f0c5a5df85515a61b5a12751c178833d04b96e105e0b5f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/325289522.jpg?k=85dac4593a96ec296d4a95df16058e45ad1775c1ff593744d38ca2a8cc2252f6&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/287662225.jpg?k=419f34ed805f685d287d27a4f8f4fb14c01a418aa2b6150489967d26085b2ea7&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/325420476.jpg?k=ec3388649bb58d4f98ae13fc76e6604bc83f9d9c9c15aebde8293c14322e20c5&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/325420259.jpg?k=9f35fa087d5deba074ba73d479de6bdca7a4cce3a11dbbec9d5d17997f7f55db&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/325420282.jpg?k=dff3ad28f7f5b8c1578475c92d31c7dea24a14d103711a9539af06beb187e670&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/19344897.jpg?k=3b503f58b378f202a3c0fcd323f2be800e9b871b322b08354e9979fea5f307cc&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/142957614.jpg?k=04b1db739538911133c883c3d558bea9b94c24f138fce8e29abad1356fb9f9d4&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/374486750.jpg?k=5258928b8e24ef7d16efe758f336dff8124b7cf68608bf09484a3a27f6cc14c8&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/142957338.jpg?k=469555ea78e8e90ff87ca642db2ccf90f9e828dc78b1f8e3816624fb27807bd6&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/142957343.jpg?k=beb4d61a864de9bb5859cadc42626fac0f88d4b6ac00daa510b4adc3ed8b0a43&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/106844674.jpg?k=dc90d5bb66a7d1912cf048ddb7fdf37e60a825f5d434a895e35eb9aae19d781c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/106844712.jpg?k=e5d539f2cba2db973b07f81d2ef6cd43af26449e7857d9a538f430710887d260&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/52381032.jpg?k=b5ffb6531a1421d5671fde59b3cca2e1978c7d786fc588fa2dc2cb721e1ffe4b&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/374470058.jpg?k=12531a29f826dd4aa7e16b930b011fa709fd5a9691e229b61969b72465f1c296&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/374470059.jpg?k=3b2650caeb4612a0ade2194c79287fc38abb354bf15dbe6f7ffb82c74cc64e91&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/374470062.jpg?k=c692a0676783dee3ecb67619dba31c6dd42e288e6d8269c0019e68c8fdc4cd30&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/374470213.jpg?k=07576434ebbe3c84720842cf10081b94bed12e0dab87096862f8712137b0059a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/19345007.jpg?k=0388d0c0b6dd7ac615153992746d48830f0fbb9416249205c70c52bd85649828&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/374470430.jpg?k=58f12928fd160cf2745ed62721239da29e3c60b6c10c01f1479189a2411b827c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/355228683.jpg?k=787386c04595459710ebdf977e308c0c35c5c030da7e93d037e1073cdf380964&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/106844647.jpg?k=cb1395afe4eae91ba86dc2da1a4044d4f7e584fda7c94e8420f35a69976c15c8&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/106844638.jpg?k=56fabfbc5958eda968548fb875a376b77f5f85dcb35458bdb7891f779b581020&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/106844629.jpg?k=2e20386dc1df5bf937c796ef332dfc4ceee31f65f87771f4e68efd15453670b6&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/106840725.jpg?k=ce3456a5e78ec80ee33115a0cd14cbf60e69e3e3c23eb23e8a7e17293b2dd71d&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/374467286.jpg?k=5895febf7f6adbca7e04f752197c5a4b60f59ebc37779aa66eb8c5f6521671e3&o=&hp=1'
        ]

    },
    {
        "name": "Boho Club",
        "rating": 7.9,
        "reviews": 2279,
        "location": "Marbella • 5.8 km from centre, 300 m from beach",
        "sustainabilityLevel": "Travel Sustainable Level 2",
        images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/339073723.jpg?k=e215a7879d0769273a363e68136669d71b963c86bdacd5a91b7be6e8961dd65c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/231185683.jpg?k=87e926316a1ea158357325e156eda2f6f1ac8303002e796d28f62f9e39caccaf&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/496850829.jpg?k=2ff00a308cfe326291a222900ba407b54e94b58a052295689e4177f9dfabbe7d&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/303233824.jpg?k=d32f97b423b01154468602f2489884403eb787b01521411dd0f1e9b43d129d7b&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/496847945.jpg?k=e598633fd6cf00028639b0750b13e05e061c526e23177bb2235e6ae89f6e7f7e&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/265760253.jpg?k=b101460784bad2e3ecaebe97227190036ef9a3a3ea62d030540407cccdc02713&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/325424145.jpg?k=9e8f2e8ed8daa5dfc5b62f565595884996a827fd0aea5ca6af6804f498dc48ae&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/496845160.jpg?k=3e470b1c6639e2d7269ef52a6f096753ea845f70164a7e4e9263415d48038023&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/496844511.jpg?k=1a02bd9c712a6377c1d2061edd281d28c3d86fb0d78bfeeacda0d49e4482383c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/470343964.jpg?k=8a5d036baf8fd98ceb0ddcfbdf7aec0ce4aa55e2994b70732dbf452705e564f7&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/496847938.jpg?k=ba0b77f1c59e27776f501ad4cde343fb6460e5579c31aabf7127654f88a655da&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/496844508.jpg?k=d9ce48e680c6189f24f13ce57f94ac4d309d425e91b5fd8114597f3c4e9d4029&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/410794884.jpg?k=fd5a26f2e47affe4618349f5bffdb70f0bb8f6f429001643f161d6d3418b0f2e&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/306033431.jpg?k=526a29b454d65e477c58003a2dd092f51acf99353f70d13567afda82bb349dde&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/339074961.jpg?k=7de5cf25dec3b6c7941bea9e909455527d1b36b820bff6c8be5b1c6081b26b5a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/496844498.jpg?k=d04dabe46e7dab5dc8f21bff3913c7cecf82f94f3dc6b948f6e7ebc57eeb1e17&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/496844518.jpg?k=6036865ae1760fbdabf9c324fe203acb708ccee93c25973266d1e62220c106eb&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/496845164.jpg?k=e241467cfd355b3dc956d915fb5fdecf8f1fabb06e534ac58e6dc6dc7cb0e34f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/358201857.jpg?k=212dfe405c6829d0dbde2d3fc7049c0e091ceac6e78106f37fe3e56ad2b27457&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/339244265.jpg?k=f9550be05274740a1e3f3d852e53bb7c581775a5859b827a2fdd7196352c4c87&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/339242216.jpg?k=dae872f75b980bc610e6d2012b87431bef0cefcb286f24d933491abe57f6f806&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/367092914.jpg?k=5e2c6d82b261a0aef9cd6a40074feb6377db00f43417d2066112d9c4fc733a2a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/367092918.jpg?k=d7b715b8d8f088ecd5f07efd182505858eea721eb8a29593e3b926b4c24640e1&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/324800546.jpg?k=88a0cb32660359bf609bb48c8f1e8c068a280b3fa7ef1c41a1e72e82cc4700a2&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/301455024.jpg?k=6c42fa38af2ee297469840cfc2470c10f8e8f5c531fb1edfab563354360e095b&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/301454612.jpg?k=57a9196623b23f19c7ffd64da6d7ee4d7f99d3aa0c815eae249acbb74bcac57c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/301455018.jpg?k=29ef625058ec3574aec098ef4fd3f97359fceefdbab973dd1eedee169099c52e&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/496850828.jpg?k=6c8b46a78bd2ccd07598c5da6536b34e82a6bd92313e02eba7d6514dd1d28b25&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/339241783.jpg?k=668837caaf184fb7cac4edf2561e679f4541b088cdb48005aa3f27287b3ca3c5&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/300756425.jpg?k=5a0fe7a2faf3824ca46bb83597722eacbfb4556991081b950798ff432dad8b23&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/496844504.jpg?k=7f2d3ff6de2dcb439ed8d7033ecac94c03546a863e4174fbf54c2f44bd877150&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/325425051.jpg?k=3f9b19ad671c1d61b80b90b7ba6b316b01af17d80119a84feedc691f8d3ada3e&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/496850825.jpg?k=bdcd20a24199bc8b5c663f6864c95a815bf083ff80825000b36afa88c2c51237&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/496852178.jpg?k=5c843d256a5dc0f376900423d50eebf793fea18ddc53f01f83928b0eed24ebb4&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/231186139.jpg?k=40bc8a7cd3727b85da5feff6e5fad7698345e4d4b1a2e8fdb79e0426c3a6bc5d&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/410795398.jpg?k=a56afecf33a33463a9767001557fcc1fcc1f49450f084b06201ea74b3ef82e3a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/325424101.jpg?k=8d78794fe042dfeb77433c4643b1e16d7bae2df043f36db98df4e31c8aecdb18&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/301456291.jpg?k=35943e218d74210064f94bb2aab822ae2bc0080a2df3f8d79ab4bfb47cd534ac&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/301455966.jpg?k=40e92b3bb02ec3f0d23750eabbef1cd405abaa2c2add1eeed72efb0194e092f2&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/300756405.jpg?k=a3c8ad2702fb5f082762829f0089a8ff32b67cb36d80bcac63cb2730c663dfe1&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/339073779.jpg?k=209f1b582e29c2a456f884aead03c562261e3cb09db6819dbec2cc24ae7fd404&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/301453884.jpg?k=560464b6507f8daf18962cd033964420163860b706c50b860a663d767d2e93e8&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/470343840.jpg?k=878a94399e8ab73d242e5796d77d7d3b90a23cf238ae7c497cc6ae6b9127db1e&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/496847020.jpg?k=a54cc11afd9f46be0c2b23306d2d4b67d4198c686ce265daf62de77100f34e59&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/339073723.jpg?k=e215a7879d0769273a363e68136669d71b963c86bdacd5a91b7be6e8961dd65c&o=&hp=1'
        ]
    },
    {
        "name": "Hotel Don Pepe Gran Meliá",
        "rating": 7.9,
        "reviews": 2279,
        "location": "Marbella • 2 km from centre",
        "sustainabilityLevel": "Beachfront Travel Sustainable Level 2",
        images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/286292246.jpg?k=e887ea15083d13c20b9f455b6d319fc4de529ea77337f1afe11ec45da2a3ad2d&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/213178988.jpg?k=6d1bcad3f037c6af88b3279602e5d0fba55fca153f86846b87f98d8f2f87e2c7&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/146758218.jpg?k=2bf01e6591b9c9e13ebc48b1eb04328f62cf109c5454560332f2aea7298d1f0c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/286292220.jpg?k=745e35970c2f1dcfb5acbe68251be4c59d419a8259547baab3f957473517627a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/286292234.jpg?k=fe5938a0dc02067b0fa4cab2a5c0f622e12ec2f23d8274af6c7a59e3ac77e138&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/211015817.jpg?k=24038fbb80bb20b5163c37c01f1291123bdb77f975a1829fd3a97970f87506c5&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/146758259.jpg?k=8ddac741d5512743a4c0e0d30c20b8c7b7726ebb79b3eac51987bb7141348bb0&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/238358859.jpg?k=2dd02e7b59eae40e6c9d429525c0275d7c2a2ab67167560586580b8bdce85167&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/146758529.jpg?k=7f9fe6744d6046f7c5d2f936a5632019462c462cefc66c5c5a02b42e570d92bc&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/146774185.jpg?k=94703baed6a406d4c10f98f387fc40bf08e12aa9e6c348adb2989b5868260626&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/193821074.jpg?k=9e8f1c7de7e82e5560fe124f0a12c26d3272695472744731eff9da28e11f7aec&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/211015827.jpg?k=3999d53600d7eb66e8b4f23402afacfbae985b0003302edef3a258b47c92a13d&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/345594345.jpg?k=95698c9dd865218d3fc17eaf78af0c2ec80c6f7ba3d0b8365d6a4ad3c9ebf6c3&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/345594330.jpg?k=e62a8a8e030ec73c5e5ca6b00bfef2700e5a8ad813d881a1e1d03df5cd4cfbea&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/19064958.jpg?k=b901f4e765320c114f3162f8cf01ae2ca5c4c679053d1a20567ad2d0eaa7c680&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/146758090.jpg?k=1eaa1c25dd884e3e5bd116e09f45831d729bfd2288ee5d166fe58b0d050d74c6&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/146968935.jpg?k=7d207ded7c6555c0ab2b5a67db8ed9c99a32009004027e9a989c2f7e94700110&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/193821068.jpg?k=700863b3ba4bccee80f03dda9419466f7f1d7fd7d85a0d934a103971017632d6&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/146758097.jpg?k=d0934d22f1efd9acadf6d4cd0ffdac2f34e72c48cc59b5eea7f924d1a12d994e&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/146758236.jpg?k=2046ac9a36c0bfa90541341a63aca7271fc2640c9fdc29589467f9981674e8e1&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/297629377.jpg?k=9cc735bb60a7da4ec9b30cb365406baed347e02ca89ed36604d25a0096891e82&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/238358864.jpg?k=cdef304b69365801ba4a264be1696cfeb392c51f34036260897eac2a39e7638f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/238358849.jpg?k=042ec353f2e80d72d33b48338e3cc1389720deac73adc998b1b8662a1a9ade22&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/146758004.jpg?k=77cc4c38e80332a53c656a80d26ad99d0ac8bb5c3636bcf01f5a6da90a666f1f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/146758206.jpg?k=c0907f6737cda30a6b517a6e7bc83f5a51f25ea592bc0999cd93dc78e819478a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/146758325.jpg?k=6984e8c913e445a72843646278b813c1cd0af06deca52ba386bf801978a4dfdc&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/238358851.jpg?k=2c1a3b476cee00a152cf23d978eed38d1b246281d6c4a4d89959017c4c29e8d8&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/146758379.jpg?k=5776a29086768f7e92d3c6936fa72b3a2f294efa50537f2ac9588f183d496d4f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/345594341.jpg?k=afa63d2b9723f4ec646131a3c0cf2febed53d17c54193b45cb9f28368c86b8cb&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/345594327.jpg?k=4a3686f5334a3236eb16285fd9725dc77354656856bc8e390fd10c4667470964&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/146758402.jpg?k=c071f51f388b563170444a32247988584a2ce6c43598a9eb9b736482c9d310b3&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/345594323.jpg?k=9c7c3a2e82e1b9ba68ce47f2364fecc6e91162f5ed28231a7e2f84494a242232&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/345594270.jpg?k=76f075b60b5ef5d058275bb3b187e9edd4b9e37db41d38dca95e5597e384985a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/146758413.jpg?k=e6778d367f3f66adf89c6a5423cf674e2492037a98af1531fadf89a663291f12&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/345594326.jpg?k=faba1cf18ef5bd4d9d6c04b93c8a6ae5eb3d587762f073fd943822d4871656b9&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/21257508.jpg?k=dbd44db89fb57c5658271a73b7e8c1b0e35cf8e09b2d0ab26fd7a356de87d084&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/238358845.jpg?k=72c3753f1c52540eaba9830f0a7ec2458b9ceca36e3fd1988c5a97665051cd75&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/345594344.jpg?k=e5701e3b680283e6c208b2ea61443920dde0844ca5aad9166787ac5200757bd5&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/297626455.jpg?k=55576a39f06f32dd5240031e865ddb79864bc6f7c5910fa1fc0acdae22357ec6&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/345595147.jpg?k=2b1b2c9997978917d2df5051b01de2cf2297f917ab67e0efe8061b76b57dd35f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/297626454.jpg?k=2e96ac12afb33a1fe4986967ba91573c57158f1fa965bf39696b5acfc070b425&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/286292256.jpg?k=4fbd88e8e3d4a407a48ddad55376c1414a6cce85c30c7ab51456c22c97c57830&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/193821081.jpg?k=cf91e44c1013e2f7c81ea2aec44e64ff7ef225b5a60d0e0ee519cceaaf1a0137&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/286292246.jpg?k=e887ea15083d13c20b9f455b6d319fc4de529ea77337f1afe11ec45da2a3ad2d&o=&hp=1'
        ]
    },
    {

        "name": "Gran Hotel Guadalpín Banus",
        "rating": 7.9,
        "reviews": 2279,
        "location": "Puerto Banus, Marbella • 8.2 km from centre",
        "sustainabilityLevel": "Beachfront Travel Sustainable Level 1",
        "images": [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/132047141.jpg?k=a865341ab833126f596e8c9f9ef835e7799654f5dfa06770ce9bcdc69826a59e&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/252260583.jpg?k=1205ba148755d64c906f5f5ac47a44756b0a5f33b8bcba957ccf002781db88df&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/252269298.jpg?k=e7c6a735b08fe18f909a3b9637d3fad240c26ef6834a51ad807baca45bb984be&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/252103058.jpg?k=ac8bcca27954aa4a6ab8cb7db59a35a1b00cfca59aa7c9fae3a2258da89ec96d&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/252092364.jpg?k=16b4f16697bb8edef52e56315c8f88eaaee800d1acdc11e64ee3abb2977a4c1a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/252094303.jpg?k=609c0d5bdea657627eeee091363bc979b6bb280300e295293a02fc0e20f3e13f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/116708887.jpg?k=b7dc57efc53de34c68f424f01df90e3e5200a1e063e6fd284e3aa8231695c9c1&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/252093209.jpg?k=f9876f3abb99efdbb101066ed186564c0922056a0140642c5f8b89d582fc39c5&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207918460.jpg?k=ff3f80fcf475f8830e9a4fd7bdb5bd719bc4133b25eceda15512daa7be392282&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207918483.jpg?k=53cfe11aef5e27fc33cad050a9397ead4063a4dbd7a89ce441661c42376faf0d&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/203513911.jpg?k=7ddacfc8c7b49a4796c61edd006354001f833439a11ee19d078918f478a6b8eb&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/115292812.jpg?k=075899b651d7c8bba6c9101ab66b3f35cd6cea0de3615936d3da7b7005b92f8b&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/252262247.jpg?k=02be52599ac6ba31f83f63d9d0ea3c34abeaa3feb4120bfc530c5d5abd4ccd64&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/252261278.jpg?k=573fe27a973926f383d4cb0c82f74a211a3f17534d2c363db56bd8ff95b191a8&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/252102889.jpg?k=f78e69df8187c7b003fb29c1d87a762473312a26e1f6f0819768504341778e80&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/203532445.jpg?k=566d4c376d7ab3fd2dd7a4f8256e1abca41132b8cea6e974696ff58a0614122d&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/203532385.jpg?k=41eea36a587599212c7b12fa4de385c0bf4ff923495a40b7184723340630d076&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/23727929.jpg?k=a0a69c99ecec7c832d57fa5cfa2bb0c1d40cb9e0d2dae5dd98a7420d5176ecad&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/252092788.jpg?k=28cc9d7b336e6003b13caa7f6e90e194c1b8aa87d3108c2a5a4675b580ef51a5&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/203513824.jpg?k=a44980df072cdb278ac2c8d5e91f764bad616dc3f6002769772630e766447078&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/252090034.jpg?k=4a09d6d0808dccd10ccdb5cd5155f3e9d536d9e9c2b21d4e71cd9127f3c233bb&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207918440.jpg?k=d9f33a96cf0c2ff2326ef32b11ca7fbc7d60bb3511e98690cf2b215ced4d16de&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/203513795.jpg?k=59fc9b6a61284bbc48297547fa3981607d6d2985ec81d8c7f5ec0a38450421b2&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/203513783.jpg?k=67fc3569708fdcaa95b2b3d77136d86e557e7735d43bc85c9f7c18d68e7a2bff&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/203513801.jpg?k=d7b2c8ac4d99105eba152ef5995f3983f34b582cec74aac00553c547299eedc2&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/252089815.jpg?k=59dc27e3d46c2c944ceaeb4ef39cc6fe045682320648c068fb95e393003c6199&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207918448.jpg?k=f2287b895ede9f776b08d02c5ab09bff273bdfad99bf67d6990377a9ec97a260&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/203532417.jpg?k=fce234d8db642f5e9653d4078895ba6bed2c449e08a4dd84e5cfda62b0bedf68&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207918445.jpg?k=f0e0ad609436d743d2ade9b4023fd79cd756cfb019b464b52704f04e3f2b8c11&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/252260983.jpg?k=87659f632897476cdc0bae50ba5d5deef3050cccdc9bdcf6513f159e67dee48e&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/214301942.jpg?k=57336b13694f211b3b86277a83e17e36d4bd2dd701cb2e22e076421af99c7004&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/203513842.jpg?k=c43d08863558be23180eadbb3bcb69dc215b11baa2e830935e025c780ab3cc9a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/146981494.jpg?k=16426874c83b388cfd7ef0203c29ed315d59f5823837cde83502ddd09f247353&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/203532409.jpg?k=38a974c9e3f50c8a3738edead34414567790cb8b97fe8d6b5dc1000bea5a56f5&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/132047147.jpg?k=1bc0b8b0d2e8bf21b76e87ec1c5bb50dd2261f93cf838234321b63e2d4ac57b7&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207918439.jpg?k=a5f37af6348806fabb60c9f81e0679a505b79cf288bd1825430504b0364c7983&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207918451.jpg?k=2ebf65e28879a9985dcc67f24e94143bf16406e484627c16ac0bbe1443142f6e&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207918457.jpg?k=a66d8b1704b6088c8e05583f06be0f61c977e41791efdcedb521da7397258a1b&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/214088157.jpg?k=72a4db8222f1c3e6f7ed7498ed3ba42696a645a47911fa9642f94ac6e5be8913&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207918465.jpg?k=8082059347008385133e5e52a0480716bd9dd0b9f5a6ed12afa71d3d270f33ce&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/203532123.jpg?k=14e1f37e6e8db9497ed40da3c5393cb2712d16d273cb5e0d8077b69edce75f95&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207918421.jpg?k=d95202b810c7477945c41867ddd97b5ac69cc2b81a85d5eb4a225bdf2a533ecc&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207918480.jpg?k=a8b712b3d4e87b9f0a219284c717ed42ad4af17b6b124b1e309c7f689842c3bd&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207918433.jpg?k=a019741434c8a6547380d99aea506633c250e4790f014d83147d00ea376dedba&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/132047141.jpg?k=a865341ab833126f596e8c9f9ef835e7799654f5dfa06770ce9bcdc69826a59e&o=&hp=1'
        ]
    },

    {
        "name": "La Fonda Heritage Hotel Luxury, Relais & Châteaux",
        "rating": 7.9,
        "reviews": 2279,
        "location": "Marbella Old Town • 400 m from centre, 600 m from beach",
        "sustainabilityLevel": "Travel Sustainable Level 2",
        images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/490470601.jpg?k=55a1e35a17089d69841944e21b4edfcb23f731ba406862500a06725095fee8d5&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424863652.jpg?k=c7d57427fd049ba822a91322998d7a4667af433057aaf72cd37a9735659a9fe6&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424837159.jpg?k=80f765cee929bbdb722706f2efeb9ac94ca02a416910e46372ec343ab86bcbb7&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/436841471.jpg?k=2fa75a36ef1651747d24010db3b48e7afaabfb2fa7b1eaabf0c921b6730bf94f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/436841177.jpg?k=c74005214063c5c081ff918127fc2e81bcd4e38cdbbaa7f04e0a524ba7e2b731&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/439399283.jpg?k=aa886bf588427ad2628c31d20c457f314428a6f110845c1ec509926fdce5f81c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/436831961.jpg?k=b933c61b64740832f4888726d5632ec7210ed1bffb4dbfe0c5cb61a4f66be613&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/436841295.jpg?k=34c3e724772c03fae1168fd4bfcb70521e18fec13f67cddde84f7cbe5c623251&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/436835732.jpg?k=f6bc21b0485fc14b0592b35675181c24377866fba66ce796b503c8033d918723&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/436831986.jpg?k=cc8a4f819099d1571e3b1a906f7c6072d2e79841f7c3b12c3d64729bb23fd243&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/425119063.jpg?k=ea8cda86ce02f3dc2855bbfae0f545b00d2b92859e6137b52efe9dc6562e3a03&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/436832826.jpg?k=6915ae17c92de499d7b41812331fa905e623026a215dfd563c5c040df15c494a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/436832630.jpg?k=4950ae7ae04dea00c60a031b907c956dcb8e5a91ed7c4ac9cafaa2957c7aab49&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/425119006.jpg?k=7611cb5afde499352d91e7e847c01456aa11b1715a07f211ad4533f8a79ffc02&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/436832991.jpg?k=41cceb544c84217515c4638fa3939247d5829a6dc751aa661b13000b2ece8da3&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424836848.jpg?k=3ae0a9209b97c7393c46d91c6e0112062a877b0bb1cd59b46771939947b03ab9&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424836864.jpg?k=e16fc97d8f942a904318df837a6a0fcb509fa5ffe2adc77c8aa953b2ad490789&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424836855.jpg?k=64065ee61639ae7b4a1a53d7ece25c917dfcecd03186989744de52639249d700&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424837043.jpg?k=61963c4f29a187128011a5bdbb00d4fab23061173bd7e70cdf7e5d81fde36c10&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424837064.jpg?k=64ffe930e2e4262ce1af26dd84265813afd9462d11526cd8baac5ee41d7ec6ea&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424837088.jpg?k=07c85e1d6a707fc531182f09612ad1e4f68f3517cb51db047659aba57881918f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424837094.jpg?k=50e7cf55456668d7b72663d389e2397952266873898f99f4b4bf692d61de350f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424837198.jpg?k=dd1f2e349e09c0b3da677a8d6f0e2c3be94e1753100b75408ea042c0e39bcd40&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424837208.jpg?k=f421393508fae42eab67a9a4857f0d2efe566b26981807f525e50e8cfd4dbc5a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424863154.jpg?k=c91880df47b8fc5cd54258324f9d8a217ffea5320d743e0d35396dc9a98641c1&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424863182.jpg?k=cd7f149e47f0edf240d450ebb12931ac39e9a48bf97dcd9bbd2306a5e88c62cf&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424864029.jpg?k=7bca0dbad61c3c35c1df209c278d829924adcb18e162c492610b5bced71548e0&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424863601.jpg?k=784b0761d02c814acf0e9475b724f3c039a83208aae56197b5e0c6d796568708&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424865213.jpg?k=1d49e07748997ea454e97d37d3e363d8ad7092faf36f7d3cb58f2e420f8c6ca0&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424865200.jpg?k=1aea02012713e3bed56ed106ecb207a5b956100929660320070a657d19fe892e&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424865249.jpg?k=5ba25888d2191f244d95a62517023ae1037dc5e0b785a1e531f64c4346ca8604&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424865284.jpg?k=f3ec5c7339e96dd0f7f343edb93ee5220bb9d4a2119e6f8b729a7d5a06b47424&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424866717.jpg?k=9000aa1df349190b656bae7bffb0309f0acefe733b5f8aca982e625f9ac3d104&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424866715.jpg?k=bb64b1257130f340d80367629135361a797b49a95657687646b27a7eb80aa850&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424866690.jpg?k=c9c9411f1116f651bc04a8eb6dba5a304368ac64ad93e92f067f39eadde7bcd4&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424866744.jpg?k=181a8d63faa19678d57d64d10f3c921afa4a5246e632f738ed62a2d70e063c5b&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424867718.jpg?k=ebe78165a7806e7e14dab572f787c1e70bcaf792f90ccf3a6937ad6851dfa088&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424867671.jpg?k=134cf547639021147703b1e76682971d9d3a17b0647070ebebdb55ef5e169b3f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424867654.jpg?k=e5595d4493840d8e505662a11a0f53484274e5717bf11ea8a213fd24a320b224&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424867749.jpg?k=40650033c24695d40c6e23f19856b01e7c326fa21ec7bf9dc33a55cfe4a155bf&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424906878.jpg?k=298c6c7b40c0f1fa73adcc70c78c9e198966aa36e5147e94a9a92a459b6769ac&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/425178371.jpg?k=c1e7ef3bbe68449bd255b093230ee28482ab88aee3d344c37f229b329d0da06e&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/436786413.jpg?k=a16169457d69097f76854a9ae574f97e80d35585e9af4ce86a3698393c801901&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/436850289.jpg?k=73a98648cf2c278b2ea931a62fa915c67eadead0a4a616b060a4c0cf66e4c488&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/landmark/max1024/198462.webp?k=55292d9a5621c56860ebb93f14d5d08c50765c05fcff096987f9db3e6d48667b&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/490470601.jpg?k=55a1e35a17089d69841944e21b4edfcb23f731ba406862500a06725095fee8d5&o=&hp=1'
        ]
    },

    {
        "name": "El Fuerte Marbella",
        "rating": 7.9,
        "reviews": 2279,
        "location": "Marbella City Centre • 0.5 km from centre",
        "sustainabilityLevel": "Beachfront Travel Sustainable Level 2",
        images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/469034439.jpg?k=8f176e007be1443c4766ebf9565968a5bd75e2130c0dc284fe81d02bec30bf2b&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463015975.jpg?k=08595d379ae78a8ba44be10a36c479bb1f81df36b99f7ec6e9f150990cbaa45a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463011527.jpg?k=fe5a5a4dafe5fd755c61774f276c5e6ffddf0ba6e596dc7f160a1cb504abf664&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/466030399.jpg?k=c7c7d2f4cd8a79520f8570cf8c2b34ce914238364745c30d33ea62321a21b506&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463011512.jpg?k=66849566319f2a7b9a021ecc8e2fb8cd805098964684a6727d1e7f7e01a57544&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463015798.jpg?k=69b1e91917c3c68f89170b9cd50ae9b328def4f88f0355f6d7262cffd2468561&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/449246732.jpg?k=6f083f8e2d919cf2853e4a2792bfcfd370130068e343f8bfb9a5402d1cda7e20&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463011513.jpg?k=1ed50b5c083918b592a04046dff90c347df3d239377679be6ab0c11b699c43b1&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463015801.jpg?k=f4183e08bd12be06556ac97290a823500fdd07c207f2da7ec1e65c5e8a06fea4&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463011535.jpg?k=618b6fdd93e221541d8fcd12b028d11a236f27528f267e00e9f4d210d3b93b1b&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463015802.jpg?k=203c04048d39b6e559ec3b3f34237d389bebc58351859ef940f91f4c13219c09&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463015804.jpg?k=c00e0f65cc70c25a86c6d7d5da04f9cd1e6ac2f47c3e645ade99ec2862e6af84&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463015795.jpg?k=0504fa34bcc3066de1e379ec64c4919b7a5cd00cc3e8f48bad83a502cd1c81c6&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463011511.jpg?k=a48fac39d519610ba4b61d7cefc0b5bde16ee26eb347c8533067d0eb926ef451&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463011528.jpg?k=2fe7d9ec05e1e45a89c32a5a1a11c8d3bf92e1683e5b7e0af7113c1c2618c956&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463011516.jpg?k=d6aac78a6c4a0b6bb451112044770a5cde18baab105846006284a34030f11534&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463011538.jpg?k=1db624329eb91088f62e03dd15458b2d52531b0d325c1452e9e2e4ad0e045454&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/448475387.jpg?k=77fbeeea8f2a77d4df981f64dd305c6fa730a07fb0c5d8e64e9565901afca335&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/448475738.jpg?k=0b5c4b14ac6b151a5747c4d3a5969de34d59a80c857335e9b5d75358ec987600&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/448475430.jpg?k=90ad816f614cd399fe1ffe10ec5f78ecdae036f99d16b2b77ffaba829446b11c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/448475714.jpg?k=afbabe2ba575d0ed985cfa03dbd87301163574ee62358f3fd1533e9fa0bf9839&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/448475771.jpg?k=bb5e23aad8abd4b171bc6d88b86a8f36ad9cd951caae48f08ac3def074efb48c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/358204117.jpg?k=1e69793e6e9c525bb61764eb68ef31fb4911e089772c229b9a2bd5c8a606c1aa&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/358206338.jpg?k=6bf1fb0bc63c78cfef1d5945f4ccea52f78a286b2f8d00d967faac6b5e4466ad&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/358204242.jpg?k=d49d3f32c15bae2ab88b3a645a7aeac4d83ae4de7ad936c4c7e4460bf6eeaf64&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/358206415.jpg?k=83e872fd37b4bcacba7c0912cf3967c1128d1b319b2be30639f36630f4f83e27&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/358206487.jpg?k=9b3e25d9bf7611ed49735f9e2564264068346cb6c67fd6b011be17a30a4ceb6b&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/358196095.jpg?k=0c7d2fefc3458ebc4f7c14c4e389b382c8999ff480f31cf372de70412dda74c0&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/358199367.jpg?k=3dda2d9b899bb5975c398e573b35c4312d9e66b02946782c2cee8fa56f0a08cb&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/71339596.jpg?k=b7482bec1f3c57a177882fdaf590c2b4fd8326f3db3d02456167e0314fd13a14&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/358196170.jpg?k=998c8e5ee6cd0eed5520133bbb54cac7453b0b74f3c84c8e131904194dbc00d0&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/94173933.jpg?k=614a023cc4e5ffb3cc3994c0912f60c1fb488775954509acf7d204996bcd9827&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/291445987.jpg?k=a29b47094eee1b5a4e5044014ebccaa06bd928926319bac6334dfbec6cf7f6af&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/62385115.jpg?k=0e8be0e872dd3567b17592caae3aedd2ea601dfffee5203d5323eb4e98bd9d2f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/460919810.jpg?k=b4819707f3b4bd2ce729919b586c2ca0e8ef38346c287da000f55eb4d28334ed&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/460919647.jpg?k=6c04297665c7f719dbc55d272ed4a5622fc67f5aab3c9e07d6726ade4018aeea&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/406706400.jpg?k=ec6ea3f1926584427cc08f0449c69232c3e39ae351b7d945d1d6af651f6ba09b&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/415048647.jpg?k=1733141eb271edbc620a9da387f2b4471e5c8b79e61de6147fc92c3bbc0d751a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/415048844.jpg?k=d9c1ce0785d223bdc686c54f69365a8b23a7de1f618de84a56c492ba14656a25&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/415048842.jpg?k=3efba61b6aec5bf77d3ccd8c4e07617a049707f6a7b6904c7b5e8e177d1eaf8c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/415048830.jpg?k=9e3422345e9afe09d9e5e1fedd85844ef5f0a9b7b613ac23609706037f42bbec&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463297818.jpg?k=895431609c6524f0dda48e9ff5264995ed8e5f2221dbbe1d72e070f4e769146d&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463298179.jpg?k=ddc7eea7c6e23db7a7d8b61d247ce28930b90877760ae76bb9a4d9e0a2a71b25&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463298169.jpg?k=28a9bc6c3708a2a7c47a9a4f0ea034520abdfb60f201b89118d432912c09728c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/360431392.jpg?k=e0c36931e8fbbda2c53f3d266ce5a699b34ee28a1ea420238c1c0bdd583aa44d&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/landmark/max1024/198462.webp?k=55292d9a5621c56860ebb93f14d5d08c50765c05fcff096987f9db3e6d48667b&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/469034439.jpg?k=8f176e007be1443c4766ebf9565968a5bd75e2130c0dc284fe81d02bec30bf2b&o=&hp=1'
        ]
    },
    {
        "name": "Marriott's Marbella Beach Resort",
        "rating": 7.9,
        "reviews": 2279,
        "location": "Nikki Beach, Marbella • 10.2 km from centre",
        "sustainabilityLevel": "Beachfront",
        images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453259023.jpg?k=079f10d38148851751ce5f5b3732c695dc062fe6747c0072424200a074431b67&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453258941.jpg?k=51cb876afdac73c0efb61c5fd5f53eb172af18647707af29b33977c51d1f5aca&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453258946.jpg?k=68b5a28559aa64d59e73f3c6d09acc61be4f7b2d3fb56d7521fa4feefb2ee2ff&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453259047.jpg?k=52c6f3b0f9840f899cd83c0af549d3256c05dd7d30f6fb2697b65c6290501989&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453258993.jpg?k=a7861280bd7216a14a64e8040e8e80d55335ad443727aff118bffa63ec9c9900&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453259056.jpg?k=9bb5d8a4750e74c0e3aa91c06be678b06845bbb3a443b6891dd738d69b46759a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453259050.jpg?k=a81d1ec49046eab5b7c5ef1789c13f699a57ecd3eab752c167934c5a796e3ce1&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453258954.jpg?k=7e6e11868127353ecba4e016176a128ed1de0bf5a41018dd11a36c8bf20d7482&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453259008.jpg?k=8744414014a424ccca016a90133b870fd9120ed67b7b211b000615bb62be08b0&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453259015.jpg?k=315a3cb1254b34a8a1258eb1ff8c95dee081006588c9696337b7ac3b626b3c64&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453259024.jpg?k=a0721a5f6673bd49e3d577f074c94353d927140cbf68c3650bd9b7dd7addf091&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453258949.jpg?k=0a3e0b099e2912f9396fcc8ca6689e2f259c815f5038d5057dea44ed9f1db648&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453258957.jpg?k=a05d0fd57954cdb171bcb8cd7b18c2686695a5497c52ff386f02d4dbe3c26210&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453258948.jpg?k=45b2e87d23a2a24b9c829def2185bb17ae184c878c346a8c690a4802a7cd2233&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453258942.jpg?k=939f3a10af39d142c466306b97c6d9d02e79ffef443a5fb853b5c10f4b25f36b&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453258953.jpg?k=07a40917fa0ed7d12835145a2808925b7ea11f2a250d8f6592b8e9fe07ebae50&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453258962.jpg?k=0f62d512e0cab1cdb4e479977720091a951907f87b4a79769cef3fd92a5fd6d5&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453258975.jpg?k=f279b10b6c8f88e9b7fae54d510d949cae5009a30c47c1c7cbdc53e02ed3b611&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453259022.jpg?k=5cd47a70b881907229c181a02444c623cd7f65273b9d018c5d3fde9bc52036b8&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453258977.jpg?k=7fa3cad40853ca5c74ab48e061fee5889c468710357126563a2708766972efcf&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453259006.jpg?k=6daa87ee2e52a0819f36dcc50d3004aa263d0b9946f2060b2d9b19ff1aec5358&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453258979.jpg?k=368d58ff92d45ade6e69a130ba920998638170cd921541e6c982978edee8c1cf&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453258983.jpg?k=4c591144b2213b7bec742f6121a7f704fb8b0e3547644dcb0c658ce74691b73b&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453258986.jpg?k=32068a4c626e38751f66d9018c74ca24e90c2d73c846d1a51029817dfe200e5a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453258994.jpg?k=f9d7bda8e74f488056a8d69df4c91d5708bc8c3087bfd9c280187f9f941cc7af&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453259010.jpg?k=519094b48e8c1d6822cdbae3acac61cc21b535700925ffe0b936d74fceaafb49&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453259014.jpg?k=130b60b917449158e3fbd56b26a15c04c3afa9716ec17856a789daf82f6ef934&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453259025.jpg?k=a146a76ff70b6cb70630a58804274474de9e1632d1b913ca5197ac7463603c2c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453259044.jpg?k=0a3b6b3ee04c2069fa662d39afe5eaf84eb61bcf2146f0025237e619b5efc681&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453259037.jpg?k=2d0b39f2d92c7b3de094811fdb0ef8730c59c37a369d2af38ec40b7c054504e1&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453259052.jpg?k=121923b8bf43968f558fbc541e1731be238772dbb040c38c73708814405e1cfd&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453259053.jpg?k=6e4d8604b44f3fa574c1f247610bea6996396764ba61f605822839357fb270ac&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453259054.jpg?k=a632645aecc02360b6f2eff371e7a95c387ba2f997c5bc606c5141d2052ea1ed&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453259062.jpg?k=862ecbe9aeec556d023799fe41ca210b0345209a5b2c336f6c6b5606c137f22f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453259070.jpg?k=354d5730aae36ea423421682e2ac05a011c5ae7da0cf8d634e82738f388d7758&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/453259023.jpg?k=079f10d38148851751ce5f5b3732c695dc062fe6747c0072424200a074431b67&o=&hp=1'
        ]
    },
    {
        "name": "Alanda Marbella Hotel",
        "rating": 7.9,
        "reviews": 2279,
        "location": "Marbella • 4.1 km from centre, 550 m from beach",
        "sustainabilityLevel": "Travel Sustainable Level 1",
        images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/478286136.jpg?k=ca41eafbd636b1872e6578c2f594fbad85ff050156a345e9fa4fef74bb12e70d&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/449697528.jpg?k=a0be8d2f71da87755fa339f03834bacf6b4f273c9079a88fa3eaa5c78ce29fe3&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/478286183.jpg?k=e026fd4a48c4f74ef93986e34063b24252a67002740573a43cf9ec14530867e0&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/338374465.jpg?k=6e4493ab9c88320ea6be26befea7f1a2b5b76bcb2ee4454c43cc91f4cd8ace90&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/268356406.jpg?k=f5f6ceee491ace29d2d5aee8361252211b3f5a694ca969872f6a63d9ef3fa1fe&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/339023166.jpg?k=09c677c1374e5caab656fc3adae97f1714c9b536ba5009dccf9c8af78efcb55a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/268674436.jpg?k=d3bed788fb4457a494c25a743529269c2d837a0ff7a0e2a394bc8d7b2acb1d5c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/449696669.jpg?k=325f82231258d3d719ba69ce3b836437d360bef9df0b3920fb129faa95a21913&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/354974771.jpg?k=8d67882a8ae3df4d7f7a81fa647eaefaf4d0fc68142f8a2f20c13903fff950b7&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/268752819.jpg?k=09358fd8851902d46f3fe0450d8f84e6df0f602d31717553ac7a493e09a943ac&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/339027279.jpg?k=09400cfe7d7f84f08c4166fd86d041c0f9d88714235c43aa3551e17f0ab447bc&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/252076558.jpg?k=5397e2e99e511d2bac06b7c8209e8a3cf7f77a1f4c6fed0741e4e2f866775de1&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/422284381.jpg?k=6ec61f980170386e800ca41ba929f74b2b229e777114cdb0561e640c8ba409b7&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/266089850.jpg?k=20939232790d95910de24d45bdeef8f01a62dca4052850adfa2df00a4ffb2d3f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/339027280.jpg?k=dd9bb73f94eaad7ad69388ee8b9dc2da43eb9a7ef0862980bc10ee4498cdedb7&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/268348073.jpg?k=dfe1fbe3dcea70fc648f22c628831f5a4bdae34c06c1f16a7231d19a488884af&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/339027284.jpg?k=262907b9219112cf94cd7e6d4c0d1bc8d03366483ff70c676eb1060978be754f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/422284235.jpg?k=dd349da8bb0c66c9afc45a49fef75ae33a316d0826e1396ad46711975eb078c1&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/268327539.jpg?k=d505b37636e32ae0e5320176a695dc9fd4f9a98594334876f2da409f88ccca13&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/422284336.jpg?k=71cb6af994cbcfa4b6225a74024e0af880e7b9e0c64f99a16a1f5c9de8fa2d36&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/268755028.jpg?k=54d2d694a3ffef6e870b4a35614c798f994f7e8ed4738327fd401a1a25e4f637&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/268348059.jpg?k=0eb9a93247d568962cbbac3296c07eae266d74dfde4fc690b2b17d8138b45864&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/339027282.jpg?k=b33bb4783fadeae80ca43db1476413a1af6e0d887507f687922133576e6a2277&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/422284397.jpg?k=9f462c16e63e574aea5d75d8268f31edaf541dcc2b2aab2b490d4114fc446fd5&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/291177578.jpg?k=eb54f57027f9003ec4d415035c6fd3814bd5d8135acb01042ca578e54d7672ab&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/268356399.jpg?k=76271ff896b968fd0c23c591f7fe99ceb3d5002a178bb75492025b79145fbf56&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/339029979.jpg?k=e1ddd68996000a7363a6967d1ccb8e6bebea4fafc8be858616903c8c7829e954&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/478286180.jpg?k=c4fb26512dc31f1048e862246d14c1d632e6e5cf5f82b1e5fc93cff3f88c4afb&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/252076709.jpg?k=9482bca9fde10749a570d6c5d0890555694f5c8a611b5d4a26ac118767c12721&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/252076668.jpg?k=bb4beac626709731125588062018f3ac941f067544762f1da92287acf0656a92&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/252076626.jpg?k=24c37e4a1bc5bf89a3777b81e89225c9b60a0bac6bb704f18629e8747c586c2d&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/252076692.jpg?k=c16745748bd7f570757a177899143d597d177dc960e7f09c4b60f6abcc4e99f9&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/339030195.jpg?k=555fbadc97ac6c1b24a467adb4f79131e38f3b80f8e8b918a1295257b1379580&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/268348051.jpg?k=77b4416032cec080ac67b3c1231f0522c083165d795aadab99e1680a890cfcfe&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/281703662.jpg?k=de7f360a05153c33ad45509c9bdd108b0ef916951bd85304a824ede18357ffe9&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/266089530.jpg?k=b09c8303c64c820e7505453fd4f288b6294bd967c79cb59b8c2200bc3daf9799&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/266089596.jpg?k=f7d4e8a4cb67d26d405d73961f1fef0df19360ce115e03edf02d751277541db0&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/266089731.jpg?k=e500941447c3e5f029b19824b767e8c71099bf49f35019864923d2bf96cbfa29&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/266089940.jpg?k=d0e3660d207b601c5f8891ccb112c6a7a99254e3876e046ca1c21b81ee9f4481&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/339027281.jpg?k=4f0adb5b60e5af38b2e62cb2b0b98f7640ea2e9251fd1443953be1bdfa14d4f0&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/268356403.jpg?k=9e9b7c1cd937f077be495ecc78e6f73f3bd1e0ff47730ec82c1604bad41814b0&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/339030745.jpg?k=3df57c4cde6694aa484f4714bbf25b67ddb2e7a53e39aa8603e29f2439676ffc&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/478286136.jpg?k=ca41eafbd636b1872e6578c2f594fbad85ff050156a345e9fa4fef74bb12e70d&o=&hp=1'
        ]
    },
    {
        "name": "Nobu Hotel Marbella",
        "rating": 7.9,
        "reviews": 2279,
        "location": "Marbella • 4 km from centre, 550 m from beach",
        "sustainabilityLevel": "Travel Sustainable Level 1",
        images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/150029986.jpg?k=f0eaccb5f1b0375a5d2544fb75697841e7c56ef90d11e6e53deedfb505541848&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/122109428.jpg?k=c2c8bdc31f9eaa11ea06896dff9baf182ca75d1cb1c2a13b3a70ffa300070f98&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/471420777.jpg?k=b89738bfb8129c4dcfdeba51073ea782342e49c098c5264b02df01a407288565&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/150030389.jpg?k=f891f292514d1e102dc62641d35b2472e6ac75ed32cd68bd7048e16c8c85fc0a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/122109460.jpg?k=3461c9bdc372e97dcafdad17a32f09b99ccb13928c5a3b2ea4498970de729db1&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/374484389.jpg?k=40e9b56cf3acd5caf652a17fd72872e60064a8e63be72e7b63ce92cca298df71&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/374489349.jpg?k=d3c271853bde9dfb73756823a29e5a085a8f64b5a097d7cba50adefe031e6c93&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/122109431.jpg?k=b7fac6c21d137f707aa78ef065945352d366cfbd529ac54ecba2951cfee40980&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/122109426.jpg?k=3c48653eb13a135ad5ba62e7c61afef355eca2f522b24c8fe4fdf2b31b2a827e&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/150029583.jpg?k=3d3492edfc2a0e89fdccbbf87b5fe13b06a1a8d7d1cc4f87d5cb3ae194d6f896&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/150030624.jpg?k=1f4a085d6b54fd64be576f957468b3fd91632d3541093c64e32cb419f04f74fb&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/150030621.jpg?k=7e5dfa8c6b336a775164fc1e5d405e74b3773c103cdcbe1e61ac209687dbcd9e&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/150028999.jpg?k=99bf080908def6a363c3e3c804d97e5dfe4a0ef2483d48f8e1b7eb72c568d09d&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/150028749.jpg?k=f43ef9be5b0d568f7c6efcf68aded5a6e4c574fc5dc42b14e00083dbad57b23f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/122109466.jpg?k=5e9569856ac45fb14a7710a24703751a3085fa8ffe528c8b4fdd758933f94255&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/122109451.jpg?k=60ccbcdeb39c0be1b6defb65346e4ce4d7f228967005ef68ab87bffaaaceeb17&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/122109439.jpg?k=491610c3aa60fc26407908e71d9dd3b7091c01a6bffbce72773a9e0ab5e7a935&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/122109443.jpg?k=8aed2933b4ea29d3a3f95f505c60f5bc0286095cdc2c33daa07c94b571ff1f8a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/374485381.jpg?k=2793410491e7716db2a2718c8c369bc814b41f037448ec5883d4157d0df27d6e&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/150028543.jpg?k=ebf74f669c683b31480fcddcc11c15757aca1face5a3a7fc3014ed380e6d1ab7&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/150029852.jpg?k=d3c0378a7c6ff8df5a0c3a9a8aeecd6f3d1d36af4ead4a03b5b52c9a47137595&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/374489343.jpg?k=7a7b6745f708e998e9fab2ebcec294ad35764c9e030ce175c5094319cb58c00f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/150027784.jpg?k=3644c59d6569d863c61cb1516d6f68c8f53b42fc86e1c988db21ab17318f77b0&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/150027744.jpg?k=43e21455b9763b20ab698f3b9689e5cc6c85ae3b1582636a326a909dfa87ccd5&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/140572709.jpg?k=08630a622116c9c471e1167dca0cf8cb1c43ed1a087e7b8501b2c6912576f27f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/126197611.jpg?k=d20d9a0d8caf77f30c2855a52315a2782f338832d1e691f89c09bb83b3656804&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/126197617.jpg?k=11ad1d52605a5c6d6e4b8945d397a9eb6c088361dab818f35ab0301e360f2bb3&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/126197620.jpg?k=6dea4ac6ff27e6909b6e4220e39663e2725e54ad227d91c6950bd8ab1c96ccfa&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/126197624.jpg?k=33c16b3c1b64849bd4e8036427e2dc4f597b2ad1dfb1d41f6af602b80462bc53&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/126197627.jpg?k=658ecc93ed5f83778cd817e4765d3d08c88007106c07a2ad7d4e61cde95e5a90&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/126197636.jpg?k=ca91536db0fc876afd7ea8639e1cfafbaf2a21c5f2e78d1fb7f85fb11a27ec97&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/122109463.jpg?k=d14b60ed82961f20d689284a5f96a005563552d11c837ca963bb0e3faec4a348&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/122109434.jpg?k=5fa726467de3e2888942c6834a9fa51d40d72897beaa78d035e49f1df2bdb754&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/364977609.jpg?k=fd204b988c61bf3c21515c6c4163af3213a3f6d345db157195f15234b0b505d2&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/364977741.jpg?k=3abbc122bbeb6ca29c07417957f4f82b253159ea822561e497be86864345feac&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/374484578.jpg?k=0e060e16de830f81c52e4567cf8136a2b590d3088d34a134ed7fa220498f749b&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/364977977.jpg?k=13b7a2bf98113625744ef7bc5e39bf451901ec50cb39297c98cadc443f211654&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/374484415.jpg?k=179fc7f9c49aad9e62426e622dbfd1cec1142ffdb6848f528b4da363d22c1257&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/471420459.jpg?k=293ff48e4c18f05de57ab9dbc2498fd5fbdee45146c0be8f0cd54458c6fd5589&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/471420647.jpg?k=4590b3ffcec66d40781249a51d7a169380e7d2d171c50d6993a48ef2eb7f71d9&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/471420643.jpg?k=198d3144e8397be44489c5aa92631629d14533846742b62450804019a188f5cb&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/471420665.jpg?k=acd2a786073674afab2eb85b8fb5d604b5fefe36715a4ece9c25213f703120e2&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/471420745.jpg?k=54a23403796fd8f02ee5b777f58a48db05085ebc3906dea26c3ffc2c101a9876&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/471420766.jpg?k=a90f5fbd860725f9aa4ac9b1ea8fec035a79c55125144547c3543937e262ea59&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/471421037.jpg?k=43fce1f9546cd94a3e07265e7d86cb31016ffb2d80ade158e343b3f27a27a159&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/150029986.jpg?k=f0eaccb5f1b0375a5d2544fb75697841e7c56ef90d11e6e53deedfb505541848&o=&hp=1'
        ]
    },
    {
        "name": "The Westin La Quinta Golf Resort & Spa, Benahavis, Marbella",
        "rating": 7.9,
        "reviews": 2279,
        "location": "Marbella • 10.2 km from centre",
        "sustainabilityLevel": "Travel Sustainable Level 3",
        images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465555094.jpg?k=33d4e4c296598a5747cf718426f936ffe33e71746c72d20ab625c5a5c1c46871&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465554971.jpg?k=5e68192a114063eedd506cac2cd6f750b92a35e775fde7246275b41d1fe54f30&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/475742959.jpg?k=27f24be964330193cdb9a01ceb1862f87db93ad838234656e3c857f11f2d4a62&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/336961462.jpg?k=d71491405bb0a76f29207bcd4eced91840c8a6aef8a958a6088e0a561ec93b71&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/473710673.jpg?k=c470fca30e049407c6e6feb5479f7006fe12cca22ebd75b9d1e88ac6032059d9&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/473710701.jpg?k=c25b117279e7f877eb0d9bffa73a471aad62086e67281170f08c8864b39a32f9&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465555062.jpg?k=d2e2cd7fec2e2fbe27983653b3e1e2ddf6dc454c1fd761b92839b1091a062466&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465554967.jpg?k=a5e984176ced6799c0eb74ebfe80d779e38c4f17a85ac5ad538793894c3923b3&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465555093.jpg?k=2d528e4918a1732f7ef6d560ba50fcdcb0459743b7b7447807dfeace14e75d47&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465554976.jpg?k=d8a19abb1018fb30980b220534717a58cb40b23105bab9eb7cc5dba9cf1af38f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/483526745.jpg?k=cadf8ec8f66108260c1fdf76ee955611b3fbe8535cd20894d14bc57f0f98d489&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465555100.jpg?k=312e00d80d6be925d6812237b99db491bda687c4bdfa6d216e716746422f47a0&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/495840050.jpg?k=ef4a898576c28206a060c06abdcfe1f5ac5686a2f4d3cc661cbeed2c44505f73&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/495840051.jpg?k=669cafeed46414fac2b499a426b1cfa790ef65aba19fbb76434b24d4fdf8d0ed&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/477177920.jpg?k=33e7bff8374a579529358972bde6738a456a0a51348cc4c90d66ed1aa380232c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465555107.jpg?k=47207fb08283bf440e7642930fa43361e75ba37c87cb356e032159d97ec7c164&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465555119.jpg?k=ca4f65c86e42aef2401aa921a0b259fd579030296a7cbffc441b3cf3a055aac2&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465555106.jpg?k=3499120a566194e655179662e97b939504b4bcf90e6718c3b560b6fcd933fdfe&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/498289984.jpg?k=30053cdb5e52479f9d0560d1abd4ca2e85eb2efcfd72e6fce3fe65965256d9ea&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/483526750.jpg?k=8a8c0f34602de7763f103f689e2d81fe456fbb78d23d34ab987f2d5f65b2a926&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/491377277.jpg?k=2a2a597ba91a02077f701ac0ab835213acef0aca4de74726adf6fdbe5be2e9cf&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465555102.jpg?k=e21fba7a567694e89165bdd4f5cbdd7904314ee40f0bf1cb2e74b662cf9d46a8&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/483526743.jpg?k=4d152a1cfbc8e86182abef896f7db401f6e0f1c5a6507d74422962e9f19fa160&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/475742949.jpg?k=7d58f41ff8e2aaf4f25dc2c076d925753cc7b41219f83248368b679689dbe9e7&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/475742925.jpg?k=d9275b759ef6a35c93701a83bbbc11fa43b45664643d209c01ae61c544c80e70&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/475742924.jpg?k=c7353830af3f353fac04edd4885ed47c7d0e066fe0d2a307c672d20e61ca6061&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/475742927.jpg?k=a1d323ecf89a14b9e7f569de2e6687af385d929848e2f7160c52fc01552c2db5&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/497457740.jpg?k=f25f8ccd8009aa3811b21bc3a427a8fc69775b35383b285c7e524f53454f118d&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/475742933.jpg?k=e4fcc7bfe25e612b3af4f31cdf2f9e3b4847699e4a6b3c15cf41aba738bf7a76&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/475742940.jpg?k=0459dca6363c7a4a7d9e9a905824ae33d861f5c6d83847c5e01bade6bc60aeac&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/475742943.jpg?k=bf15e19bf25e79f4036ee845f3c01d53c609a5cc3e045f0ea479c351e4aaffe3&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465555088.jpg?k=c1ccf9aee4da3e31c75fab9c3550e3159ccb923114a5d6cc87eafc643215edb8&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/475742945.jpg?k=5427bf85538b246c8e2acc3f43d09f279e07470e22b38f9444de4c2992a4654d&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/475742947.jpg?k=906518a9ba8d8e73ba096c8016bc220f270547bf784b3eaf1e10e78d3f83bb2c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/475742931.jpg?k=d4c0da7b0ed3c00f47977a1780aedc7ad1b1679c2818e8db38d6c250958bf12f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/466124422.jpg?k=0dbc3321e4581dc5cfff8cf5fc43d0127617469c8ad43571173266777270e5a8&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465555078.jpg?k=004793d6114336a5feafade2ac54b4303093f9012aec625922297171a0d33e20&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465555082.jpg?k=86731f6ccc4d787a829de06799f1d82b8f98bb4275ef486999c74d4a7a38c6b3&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465555084.jpg?k=8bff4d9a7a2b058c7b540101b5d96df7265400d6ca1a67d0fdc15aa9bbb96589&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/483526746.jpg?k=10eebebd1811e79eedb9f55f2bcf3fccf08489e15a970c7666b85d161ff13a87&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/473710682.jpg?k=92e58c60b5f8658a22e59408eecab4cf3fd915f7c11775214760e29b26e03c4f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/473710685.jpg?k=c1f096a556edc6523957866d412302f0f9cdf1f80a6a861e6879ab836c2b3020&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/473710690.jpg?k=1f7ce90183626477e6d7cd94502b572cc41b4d9ed76bb5e68124f1c0e327f9a8&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/473710693.jpg?k=a10b33b2411ed2863aef27f60420360ec98fc347bda8cac44182ea6fb0f17a63&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/473710697.jpg?k=c484b0c1bef2e3ae0deb95ca42f15922ae6a70777494f17e4b572ed4eabc1067&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465555094.jpg?k=33d4e4c296598a5747cf718426f936ffe33e71746c72d20ab625c5a5c1c46871&o=&hp=1'
        ]
    },
    {
        "name": "Marbella Club Hotel · Golf Resort & Spa",
        "rating": 7.9,
        "reviews": 2279,
        "location": "Marbella • 3.3 km from centre, Beachfront",
        "sustainabilityLevel": "Travel Sustainable Level 1",
        images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/27060435.jpg?k=83d21c66485f8b61f7f4d6b5b4f48fcaae3cc86083f92b8f3ca0075b8297cf54&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/363642960.jpg?k=66ad7de5049beaf24784de6a9dd110588e643b5fa6886f3fa1034e3c71c9897e&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/26306003.jpg?k=5e058cd08819a0698c76b02b0bed111e3669099e9564a0279f00e0bb37968038&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/307385623.jpg?k=8b6b3b636b47a83c0e2a3b65ce89e1aa12c641ac5abe90bfa3f55a4d80ebb9dc&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/27060403.jpg?k=3187e4287b5dd6a725de7d70ae6761c407cc04b6ea61fe2dd385e3e1f54c2b98&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/133188832.jpg?k=eaf202ec5c7b60ddf13034d3ed619da066c5066244a8b7d36b0b45c135888494&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/133187936.jpg?k=8677eb08c91d9f149ff03b6a12f717bc40b469dd3a8cb26539edb4832431ad2f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/133187909.jpg?k=984b6ccc1bad1022d0c46f42a810d55583540fbb2e0cdd728898855e5a985de2&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/133187890.jpg?k=bcb53076c3e5f81194b8cff808aab7d596f06417b29175dca31947f8af049066&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/133187892.jpg?k=f5871f0279f245c77c68fde73e38d8684be3c1ec563779205deaf9836c72cdc5&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/133187839.jpg?k=2f8de8df1aafee9beda75c36644a7ad843bd0294d138a3f7a7ac1cbab988f932&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/133187600.jpg?k=fafdddde81cb9cc0761cadf2bdfd28d47dbd865126c32d3c59ef3e3738786e65&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/13090643.jpg?k=5aaaa6c0acad1a408639095f257877826ecffdbac76b1dc1db498eec89670b03&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/115903630.jpg?k=35d8e2a3a5dd24901538b74c6446981f1104e74d2ae7e40e89507347219edf5d&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/26306102.jpg?k=d6f69feac3b6b9adb1af7a20e0753d79e350fedf4ac60cefaacaa567b94e9e95&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/115903635.jpg?k=59b10cb00ef9c5b13a295c3e525325251941301f2628fe94f9d1ca2a154c77ce&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/27060432.jpg?k=6f9793754573b1e39490635c302f752c9bd346313383834206b00b01d3934ab7&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/115903640.jpg?k=06f5fd7a23157bb48fc67d843cbe3862f323628bd749aa4770433a7bf65fece3&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/27055697.jpg?k=50d90ef4ee7dda0b81169360143c64d89b8f3fee27b82697897cff295ea0032b&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/115903642.jpg?k=561c2fd46d06641aafe5fd7b4c6b7e82381908732ef5d413e75adea803b56787&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/26305919.jpg?k=2194dcbd4300548209cf030f3e8ffbf9abf127023b6e9e308ebebcabdf6863ff&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/26305935.jpg?k=0d0580a5eb36cdbbe2a317233cd1e2e35ca140a8d22b0d0e0992b3e62c5edf13&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/44361790.jpg?k=a48b21f9bc304abcf79258c83c52bfe123e766a4d6acd2eba1cd8f87c23a3c55&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/27060408.jpg?k=00f8cfe302cd209ee8f47dd69d7bec09c54de4016e9132d20fba499396274dca&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/26306051.jpg?k=531faa28a293fb35fecba0bdb47feb0a75b436b7eb16644fc06d6c69dae4dc87&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/26306237.jpg?k=fde27dddc26f53222d93e2f6e894c0121b39b2ed0dab968dd5731a2850496fce&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/26306233.jpg?k=12141abe50eb0ccccea2773000d7e2584d28cfbeda32b4f12124beccce9394f6&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/27615900.jpg?k=ca4e70553323b7aa80da0e571aced853aeefd77d70d74deb06d3f2abf528a7a0&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/13091163.jpg?k=53b2dc1731b0184d904e7c2df8065e72fc6535679f57e72f84fd4bc0e11fcbf1&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/27249001.jpg?k=dbf3b82227ac3c91b0b55faaadae94fec469bddd303d3759364b5ad459a4d49d&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/27060398.jpg?k=dc7981917a4b5bbecd6aad6c9a7ab33214b331d299e994c461688dbc3556b204&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/44362012.jpg?k=c9d195273317826539ecb48c85a13282e2c99ec6c0e9ff73e9c9c9eff20f54a4&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/27060581.jpg?k=1180b87d6297fb69e30569d9f71b5945b8c00acea779cd7d0a5d8663f94dcd31&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/27249657.jpg?k=b78da0454211a91e7d570a0637e403075e43d5fe648e912d708309cadc660ba3&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/27060440.jpg?k=1834fb1424646f74d8797d79aae90eeff5905b91bed2aea8f7d5512ebcc94b83&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/307385618.jpg?k=0b078edfbaa4eaeb71c9df92974138f56eca3ad38643584941f2ebe54a65fe1f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/307385615.jpg?k=5ba334512c9e034e6bf36224c2921871d3de4b356fbfdf3a8574a6485b2cff6b&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/307385609.jpg?k=98add354ca90a13efe5a4fe0fa0b7f922a2a7be796c420b91e1cffc4cb224622&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/307385605.jpg?k=50ea15133b5602ffb44ab843933bdeabab2bbc2540cf98940af9285e30cfa407&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/307385603.jpg?k=a3e8dffb815a0dd8eb7efd9adaa3270075dfb65005924fdb855281dc95cd5cc7&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/307385764.jpg?k=b93bccc1e81f0cdcf3cb31a1c5e7d4c698493aa5d2412cbe75b4a2affb33991d&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/307385821.jpg?k=52f08c700f715563064266e0ad5e6e04ce0b6b0f703c97fb781d1513e01b5d95&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/363641846.jpg?k=f4189126095ad530a84b1debd96a5a8b5a91fbacac5dbf15907f07f1aadafc8c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/363641831.jpg?k=a27ad091fb11d6e66bca8c30f336a402d423a3da9dc0009c7c93bb2cb704dffe&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/363641824.jpg?k=4e137124d1292ce16b7a347cee6f827d8e574a1117e8b8dc9132d2996ed3866c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/27060435.jpg?k=83d21c66485f8b61f7f4d6b5b4f48fcaae3cc86083f92b8f3ca0075b8297cf54&o=&hp=1'
        ]
    }
]



const Hotel = ({ hotel }) => {
    const router = useRouter();
    const { setSelectedHotel } = useGlobalContext()
    useEffect(() => {
        setSelectedHotel(null)
    }, [])
    const handleBook = () => {
        setSelectedHotel(hotel);

        router.push('/book?category=hotel')
    }
    return <>
        <div className='border  flex flex-col justify-between shadow-sm p-2 rounded-lg bg-gray-50'>
            {/* <div className='overflow-hidden'>
                <Carousel photos={hotel?.images} />
            </div> */}
            <div >
                <GalleryCarousel slidesPerView={1} images={hotel?.images} />
            </div>


            <div className='flex flex-col justify-between  items-center'>
                <div>
                    <p className='uppercase font-black mt-5 font-italian text-lg'>{hotel?.name}</p>
                    <p className='py-2'>
                        <span className='font-thin'>{hotel?.price}</span>
                    </p>
                </div>
                <div className=''>
                    <button onClick={() => handleBook()} className='text-xl hover:bg-gray-400 font-italian bg-gray-500 px-5 py-1 rounded-lg block mx-auto text-white'>Book Now</button>
                </div>
            </div>
        </div>

    </>
}
const HotelLanding = () => {
    const [collection, setCollection] = useCollection('/api/hotels?populate=*')
    useEffect(() => {
        console.log(collection)
    }, [collection])
    const getObject = (singleObject) => {
        const backend = `${process.env.NEXT_PUBLIC_API_URL}`
        return {
            name: singleObject.attributes.name, price: singleObject.attributes.price, details: singleObject.attributes.details, images: singleObject.attributes.images.data.map((singleImage) => {
                return `${singleImage.attributes.url}`
            }), rating: singleObject.attributes.rating, location: singleObject.attributes.location, sustainabilityLevel: singleObject.attributes.sustainabilityLevel
        };

    }
    return (
        <div className='px-2 lg:px-10 py-5' id='hotel'>
            <div>
                <h1 className='text-5xl font-italian py-5'>Hotels</h1>
            </div>
            <div className='grid w-full grid-cols-1 md:grid-cols-2  2xl:grid-cols-3 gap-5'>
                {hotels && hotels.length > 0 ? <>
                    {
                        hotels?.map((hotel, indx) => {

                            return <Hotel key={`hotel- ${indx}`} hotel={hotel} />
                        })
                    }
                </> : null}
            </div>

        </div>
    );
}
const page = () => {
    return <HotelLanding />
};

export default page;