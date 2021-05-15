import React from "react";
import SignUpL from "./components/SignupL";
import 'bulma/css/bulma.min.css'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <>
  {/* <SignUpL /> */}
  <Router>
      <Navbar />
      <Switch>
        <Route path = '/' exact component =
        {Home} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
