import React from 'react';
import { BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes"


export function Navigation() {

  console.log("routes -->", routes);
  return <h2>Hola</h2>;
  
  // return (
  //      <BrowserRouter>
  //       <Routes>
  //           <h2>Navigation...</h2> 
  //       </Routes>
  //      </BrowserRouter> 
        
  // );
}
