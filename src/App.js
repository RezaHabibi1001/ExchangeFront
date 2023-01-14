import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { Safe } from "./Components/Safe/Safe";
import { About } from "./Components/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Login />
            </Fragment>
          }
        />
        <Route
          path="/home"
          element={
            <Fragment>
              <Home />
            </Fragment>
          }
        />
        <Route
          path="/safe"
          element={
            <Fragment>
              <Safe />
            </Fragment>
          }
        />
        <Route
          path="/about"
          element={
            <Fragment>
              <About />
            </Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
