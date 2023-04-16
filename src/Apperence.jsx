import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Apperence(props) {
  // const [get, setget] = useState("war");
  // const handleData = (sendData) => {
  //   setget(sendData);
  // };

  // const [movies, setmovies] = useState([]);
  // async function apiCalling() {
  //   var res = await fetch(
  //     `https://www.omdbapi.com/?t&apikey=2599a2b8&s=${get}`
  //   );
  //   res = await res.json();
  //   setmovies(res.Search);
  // }

  // useEffect(() => {
  //   apiCalling();     
  // }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {props.data.map((item, key) => {
            return (
              <div className="col-4 my-2 " key={key}>
                <img
                  src={item.Poster}
                  alt=""
                  height="450px"
                  width="300px"
                  className="text-center"
                />
                <h4 className="text-left mt-1">{item.Title}</h4>
                <h6>{item.Year}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// const Data = async()=>{
//     const responsse = await fetchData()
//     console.log(responsse, "Respnse")
// }

// useEffect(()=>{
// Data()
// },[])
