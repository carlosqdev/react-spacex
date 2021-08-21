import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav/Nav";
import Error404 from "./Error404/Error404";
// import axios from "axios";

// let apiEndPoint = "https://api.spacexdata.com/v4/launches/latest";

// const getSpacex = async (url) => {
//   try {
//     let response = await axios.get(`url`);
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// };

const Latest = () => {
  return (
    <h1>Ultimo lanzamiento</h1>
  )
}

const All = () => {
  return (
    <h1>Todos los lanzamiento</h1>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/ultimo" element={<Latest />} />
          <Route path="/todos" element={<All />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
