import React, { useState } from "react";

function AddDeleteItems() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function valueInput(e) {
    setItem(e.target.value);
  }

  function valuesInput(e) {
    e.preventDefault();
    setItems((prev) => [...prev, item]);
    setItem("");
  }
  function removeItem(e, element) {
    e.preventDefault();
    setItems((prev) => prev.filter((el) => el !== element));
  }
  return (
    <>
      <h1>You can add or delete whatever you want</h1>

      <form onSubmit={valuesInput}>
        <label>
          Enter info:
          <input
            type="text"
            placeholder="item here"
            value={item}
            onChange={valueInput}
          />
          <input type="submit" placeholder="clickit" />
        </label>
      </form>
      <ul>
        {items.length > 0 &&
          items.map((el, ind) => {
            return (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <li key={ind}>
                  {el}{" "}
                  <buttond onClick={(e) => removeItem(e, el)}>
                    remove me
                  </buttond>
                </li>
              </div>
            );
          })}
      </ul>
    </>
  );
}
export default AddDeleteItems;
