import { useEffect } from "react"

export const Products=()=>{
    useEffect(()=>{
        console.log("render hogya mnan")
    },[])
    return (
        <>
        <h1>products hau man</h1>
        </>
    )
}