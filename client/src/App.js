import React from "react";
// import SignUpL from "./components/SignupL";
import 'bulma/css/bulma.min.css'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import SignUp from './components/SignupL';


function App() {
  return (
    <>
  <Router>
      <Navbar />
      <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path = '/login' component = {Login} />
        <Route path = '/sign-up' component = {SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
