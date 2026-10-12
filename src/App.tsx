import { useState, useCallback } from "react";
import Child from "./Child";



function App() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Button clicked!");
    console.log("me render")
  };

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <p>{message}</p>
      <Child />
    </>
  );
}
export default App;