import { BrowserRouter, Route, Routes } from "react-router-dom";
import Apperence from "./Apperence";
import Navbar from "./Navbar";
import Main from "./Main";

function App() {
  return (
    <>
    <Main/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/data-page" element={<Apperence />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
