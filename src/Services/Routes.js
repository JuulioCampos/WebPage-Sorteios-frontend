import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Index.jsx";
import Sobre from "./Sobre";
import Usuario from "./Usuario";

export const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Sobre }  path="/sobre" />
           <Route component = { Usuario }  path="/usuario" />
       </BrowserRouter>
   )
}