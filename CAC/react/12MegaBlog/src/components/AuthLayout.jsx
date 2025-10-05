import React, {useEffect, useState} from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Protected({children, authenticatoin = true}) {

    const navigate = usenavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(()=>{
        if (authenticatoin && authStatus !== authenticatoin) {
            navigate("/login")
        } else if(!authenticatoin && authStatus !== authenticatoin){
            navigate("/")
        }
        setLoader(false)
    },[authStatus, navigate, authenticatoin])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}
