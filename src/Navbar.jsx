import React, { useContext, useState } from "react";
import Apperence from "./Apperence";


function Navbar(props) {
  const [value, setValue] = useState("");


  function getData(e) {
    setValue(e.target.value);
  }

  function postData(e) {
    e.preventDefault();
    console.log(value)
    props.getSearhData(value);
  }

  return (
    <>
      <div className="container-fluid  mt-3">
        <div className="row ">
          <div className="col bg-primary text-light">
            <h1 className="text-center my-3">Welcome to Movie Mania</h1>
          </div>
        </div>
        <div className="my-4">
          <form className="form" onSubmit={postData}>
            <input
              type="text"
              className="form-control p-3 text-center text-primary"
              placeholder="Enter a movie name"
              onChange={getData}
            />
            <button
              type="submit"
              className="btn bg-secondary text-light w-100 my-3"
            >
              Get Movie
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Navbar;
// export {value}
