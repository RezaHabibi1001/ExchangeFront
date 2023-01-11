import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
