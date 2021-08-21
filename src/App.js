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

const Home = () => {
  return (
    <>
      <Nav />
      <h1>Home</h1>
    </>
  )
}


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          <Route path={`${process.env.PUBLIC_URL}/ultimo`} element={<Latest />} />
          <Route path={`${process.env.PUBLIC_URL}/todos`} element={<All />} />
          <Route path={`${process.env.PUBLIC_URL}*`} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
