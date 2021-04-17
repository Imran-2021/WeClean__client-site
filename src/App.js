import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./Components/Deshboard/About";
import Admin from "./Components/Deshboard/Admin";
import Dashboard from "./Components/Deshboard/Dashboard";
import DynamicReview from "./Components/Deshboard/DynamicReview";
import User from "./Components/Deshboard/User";
import Home from "./Components/Home/Home/Home";
import Navbar from "./Components/Home/Navbar/Navbar";
import Login from "./Components/LogIn/Login";
import PrivateRoute from "./Components/LogIn/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value = {[loggedInUser,setLoggedInUser]}>
<Router>
  <Navbar/>
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <PrivateRoute path="/user">
        <User/>
      </PrivateRoute>
      <PrivateRoute path="/wreview">
        <DynamicReview/>
      </PrivateRoute>
      <PrivateRoute path="/admin">
            <Admin/>
      </PrivateRoute>
      <PrivateRoute path="/dashboard/:abc">
            <Dashboard />
          </PrivateRoute>
    </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
