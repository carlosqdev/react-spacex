import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav/Nav";
import Error404 from "./Error404/Error404";
import Latest from './Latest/Latest';
import All from './All/All';
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
