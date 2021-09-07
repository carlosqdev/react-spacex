import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Error404 from "./Error404/Error404";
import Latest from "./Latest/Latest";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          <Route
            path={`${process.env.PUBLIC_URL}/ultimo`}
            element={<Latest />}
          />
          <Route path={`${process.env.PUBLIC_URL}*`} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
