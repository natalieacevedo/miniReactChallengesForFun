import React, { useState } from "react";
function PersonInfo() {
  const [allInfo, setAllInfo] = useState({
    name: "",
    lastname: "",
    email: "email",
  });
  const { name, lastname, email } = allInfo;

  function addInfo(e) {
    const { name, value } = e.target;
    setAllInfo((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="your name here"
          name="name"
          value={name}
          onChange={addInfo}
        />
        <input
          type="text"
          placeholder="your last name here"
          name="lastname"
          value={lastname}
          onChange={addInfo}
        />
        <input
          type="text"
          placeholder="your email here"
          name="email"
          value={email}
          onChange={addInfo}
        />
        <input type="submit" placeholder="submit please" />
      </form>
      <h1>your name is {name}</h1>
      <h2>your lastname is {lastname}</h2>
      <h2>your email is {email}</h2>
    </div>
  );
}
export default PersonInfo;
