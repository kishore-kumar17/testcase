import React, { useState } from "react";

const Loginform = () => {
  const [input, setinput] = useState("");

  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
    // console.log(input);
  };
  const handleSubmit = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>LOGIN FORM</h1>
      <form>
        <div>
          <label>NAME</label>
        </div>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          data-testid="name"
          value={input.name}
        ></input>
        <br />
        <br />
        <div>
          <label>MAIl</label>
        </div>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          data-testid="mail"
          value={input.mail}
        ></input>
        <br />
        <br />
        <div>
          <label>MOBILE NUMBER</label>
        </div>
        <input
          type="number"
          name="mobilenumber"
          onChange={handleChange}
          data-testid="mobilenumber"
        ></input>
        <br />
        <br />
        &nbsp;
        <div>
          <button onClick={handleSubmit}>LOGIN</button>
        </div>
      </form>
    </div>
  );
};

export default Loginform;
