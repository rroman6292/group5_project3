import React from "react";
// import SignUpL from "./components/SignupL";
import 'bulma/css/bulma.min.css'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignUpH from './components/SignupH'
import SignUpL from './components/SignupL'




class App extends React.Component {

  state = {
    user: {},
    loggedin: false
  }


  login = () => {
    //Import API file than does an AJAX call (axios) to log the user in. Return user object. 
    //Response will be user object from the database. Set user in state = to user object from database
    //Change state to loggedin to true
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login'>
              <Login login={this.login}/>
            </Route>
            <Route path='/sign-up' component={SignUp} />
            <Route path='/sign-up-homeowner' component={SignUpH}/>
            <Route path='/sign-up-landscaper' component={SignUpL}/>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
