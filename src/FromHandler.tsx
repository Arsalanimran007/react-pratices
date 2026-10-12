import { useState } from "react";

function FormHandler({ render }) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return render({ name, handleChange });
}

export default FormHandler;