import React, { Fragment} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import './App.css';
import { AddDrug } from './Components/Drugs/AddDrug';
import { Drugs } from './Components/Drugs/Drugs';
import { BuyFactor } from './Components/Factors/BuyFactor';

function App() {
  return (
   <BrowserRouter>
   <Routes>

   <Route
          path="/"          
          element={
            <Fragment>
                <Home />
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
        path='/addDrug'
        element={
          <Fragment>
            <AddDrug />
          </Fragment>
        }
        />
        <Route 
        path='/drugs'
        element={
          <Fragment>
            <Drugs />
          </Fragment>
        }
        />
        <Route 
        path='/buyFactor'
        element={
          <Fragment>
            <BuyFactor />
          </Fragment>
        }
        />

   </Routes>
   </BrowserRouter>
  );
}

export default App;
