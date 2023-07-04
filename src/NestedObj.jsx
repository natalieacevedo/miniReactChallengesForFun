import React, { useState, useEffect } from "react";
function NestedObj({ obj }) {
  const arrObj = Object.entries(obj);
  console.log(arrObj);

  return (
    <ul>
      {arrObj.map(([key, value]) => {
        if (typeof value === "object") {
          return <NestedObj obj={value} />;
        } else {
          return (
            <>
              <li>{`${key}: ${value}`}</li>
            </>
          );
        }
      })}
    </ul>
  );
}
export default NestedObj;
