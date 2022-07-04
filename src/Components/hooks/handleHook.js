import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleFecth = async() => {

            const {data: response} = await axios.get(url);
            console.log(response);
            setData(response);
        

    }

    useEffect(() => {
        handleFecth();
    }, []);    

    return(
    {
        data, error, loading  
    }    
    )
}