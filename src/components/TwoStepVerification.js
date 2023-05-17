import React, { useState } from 'react'

const TwoStepVerification = () => {
    const[code, setCode] = useState("");

    const handleChange = (event) => {
        setCode(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // do something with the code, like send it to the server for verifictaion
    };

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Two-factor authentication code:
            <input type="text" value={code} 
            onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
    </form>
  );
};

export default TwoStepVerification