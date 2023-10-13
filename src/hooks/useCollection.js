import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useCollection = (path) => {
    const [collection, setCollection] = useState(null)
    useEffect(() => {
        const apiUrl = `http://localhost:1337${path}`;
        const token = '3896ced7d8b888791ee26d6499c43de7961291cdee3dcea00a7f8108ecec808094b3f057b19083397cd80bf8fb4ebb5214f422ab4b3e6ad04d001f162cefd99ce46c386985263bfd32fa7645c00a3305e2e89a936cbc69120b3615c73cde5042ee5b9138a69f33b2792ea8cdcdb62aadee11a4283ea91b5155e125b3798430fd';

        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios.get(apiUrl, { headers })
            .then((response) => {
                // Handle the response data here
                setCollection(response.data.data);
                console.log(`Collection for ${path} `, response.data.data)
            })
            .catch((error) => {
                // Handle any errors here
                console.error(error);
            });
    }, [path])

    return [collection, setCollection]
};

export default useCollection;