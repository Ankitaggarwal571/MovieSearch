import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Apperence from "./Apperence";
import Navbar from "./Navbar";

import { MoviesContext } from "./Store/MovieManiaContextProvider";

function Main() {
  var { getMovies, getSearh } = useContext(MoviesContext);
  const [data, setData] = useState([]);

  const getApiData = async () => {
    let res = await getMovies();
    setData(res.data.data.Search);
  };

  const getSearhData = async (props) => {
    // let res = await getSearch();
    console.log(props.value)

  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <Navbar getSearhData={getSearhData} />
      <Apperence data={data} />
    </>
  );
}
export default Main;
