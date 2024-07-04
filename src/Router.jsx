import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import App from "./App";
import Women from "./Women";
import Men from "./Men";
import Login from "./Login";
import Signup from "./Signup";

const Main = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/app" element={<App />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
export { Main };
