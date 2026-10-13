import React, { useEffect, useRef } from 'react'

const Ref = () => {
    const inputRef = useRef(0)
    const [count,setCount]
    let val=0;
    const handleref = () => {
        val+=1;
        console.log(val)    
        // inputRef.current += 1
        // console.log(inputRef.current)
    }

    useEffect(()=>{
        console.log("me render ho rha hua");
    })

    return (
        <div>
           
            <button onClick={handleref}>me</button>
        </div>
    )
}

export default Ref