import { useEffect, useState } from "react";
function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    return data
}

export default useCurrencyInfo;


// useCurrencyInfo Custom Hook:

// Purpose: Fetches currency exchange rates from an API
// Key Features:
// Uses useState to store currency data
// Uses useEffect to fetch data when currency changes
// Returns the exchange rates object
