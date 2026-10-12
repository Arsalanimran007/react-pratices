import React, { useRef } from 'react'

const Ref = () => {
    const inputBox = useRef(null)

    function handleRef(){
         inputBox.current.focus()
         inputBox.current.style.color="red"
         console.log(inputBox)
    }
  return (
    <div>
        <input ref={inputBox} type='text' name='name' />
        <button onClick={handleRef}>click me </button>
    </div>
  )
}

export default Ref