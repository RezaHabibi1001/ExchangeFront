import React, { Fragment} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import './App.css';
import { AddDrug } from './Components/Drugs/AddDrug';
import { Drugs } from './Components/Drugs/Drugs';
import { BuyFactor } from './Components/Factors/BuyFactor';
import { SaleFactor } from './Components/Factors/SaleFactor';
import { Customers } from './Components/Customers/Customers';
import { Stacks } from './Components/Stacks/Stacks';
import { Users } from './Components/Users/User';
import { RecievedCheck } from './Components/Checks/RecievedCheck';
import { GivenCheck } from './Components/Checks/GivenCheck';
import { Roznamcha } from './Components/Roznamcha/Roznamcha';

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
        <Route 
        path='/saleFactor'
        element={
          <Fragment>
            <SaleFactor />
          </Fragment>
        }
        />
        <Route
        path='/customers'
        element={
          <Fragment>
            <Customers />
          </Fragment>
        }
        />
        <Route 
        path='/stacks'
        element={
          <Fragment>
            <Stacks />
          </Fragment>
        }
        />
        <Route 
        path='/users'
        element={
          <Fragment>
            <Users />
          </Fragment>
        }
        />
        <Route 
        path='/recievedCheck'
        element={
          <Fragment>
            <RecievedCheck />
          </Fragment>
        }
        />
        <Route 
        path='/givenCheck'
        element={
          <Fragment>
            <GivenCheck />
          </Fragment>
        }
        />
        <Route 
        path='/roznamcha'
        element={
          <Fragment>
            <Roznamcha />
          </Fragment>
        }
        />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
