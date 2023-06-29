import React from "react";
import axios from "axios";
// What axios enables us to do is to use the exact same promise syntax as fetch – but instead of using our first then callback to manually determine whether the response is okay and throw an error, axios takes care of that for us.

function AxiosCall() {
  return (
    <>
      <h1>Call with axios ahora</h1>
    </>
  );
}
export default AxiosCall;
