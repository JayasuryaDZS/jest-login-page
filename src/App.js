import React from "react";
import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "./router/index";

const App = () => {
  return(
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route 
            key = {idx}
            path = {route.path}
            element = {route.component}
            exact = {true}
          />
        ))}
      </Routes>
    </React.Fragment>
  )
}

export default App;