import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useCollection = (path) => {
    const [collection, setCollection] = useState(null)
    useEffect(() => {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}${path}`;
        const token = `${process.env.NEXT_PUBLIC_API_TOKEN}`

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