﻿import { useEffect, useState } from "react";

export default function (request){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            request()
            .then(response=> setData(response.data))
            .catch(err=>setError(err))
            .finally(()=>setLoading(false));
        }, 1500)
        
    }, [])

    return [data, loading, error];
}