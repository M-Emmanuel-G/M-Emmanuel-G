import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData=(url)=>{

    const [ error, setError] = useState("")
    const [ data, setData] = useState([])
    

    useEffect(()=>{
        axios.get(url)
            .then((resp)=>{
                setData(resp.data)
            })
            .catch((err)=>{
                setError(err)
            })
    },[url])
    return [data, error];
}

export default useRequestData