import React, { Fragment} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import './App.css';
import { AddDrug } from './Components/Drugs/AddDrug';

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

   </Routes>
   </BrowserRouter>
  );
}

export default App;
