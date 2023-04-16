import { createContext } from "react";
import axios from "axios";
export const MoviesContext = createContext();

var search = "War";

const apiURL = "https://www.omdbapi.com/?t&apikey=2599a2b8&s=";

const getSearch = async (props) => {
  console.log("Hello");
  // search = props.search;
};

const getMovies = async (pr) => {
  try {
    var res = await axios.get(`${apiURL}/${search}`);
    // console.log(res);
    if (res) return { result: "Done", data: res };
    else return { result: "Done", message: "Internal Server Error" };
  } catch (error) {
    console.log(error.message);
  }
};

export default function MovieContextProvider(props) {
  return (
    <MoviesContext.Provider
      value={{
        getMovies: getMovies,
        getSearch: getSearch,
      }}
      }}>
      {props.children}
    </MoviesContext.Provider>
  );
}
