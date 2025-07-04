import { useState, useEffect } from "react";
import { peticionPaisNombre } from "../api/MapServices";

export function useCountry(countryName){
    const [country, setCountry]=useState(null);
    const [loading, setLoading]=useState(false);
    const [error, setError]=useState(null)


    useEffect(()=>{
        if(!countryName) return; 

        const fetchData = async () => {
            setLoading(true);
            setError(null);

         try{
            const result = await peticionPaisNombre(countryName);
            setCountry(result);
         }   catch(err){
            setError(err.message);
            setCountry(null);
         }finally{
            setLoading(false);
         }

        };

        fetchData();

    },[countryName])

    return{country, loading, error};
}