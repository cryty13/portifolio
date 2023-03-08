import { Route, Routes } from "react-router-dom";
import Home from "./contents/Home";

import React from 'react';

//remover
import ReactGA from 'react-ga4'
ReactGA.initialize('G-xxxxxxxxx');
ReactGA.send('Home')
//remover

function App() {
  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <div className="col-span-3">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App