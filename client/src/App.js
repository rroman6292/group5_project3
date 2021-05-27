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
import ProfileH from './components/ProfileH'
import ProfileL from './components/ProfileL'
import LogInHome from './components/LogInHome'
import LogInLand from "./components/LogInLand";




class App extends React.Component {

  state = {
    user: {},
    loggedin: false,
  }


  login = async (loggedinuser) => {
    this.setState({user: loggedinuser})
    console.log(this.state)
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login-section'>
              <Login/>
              </Route>
            <Route path='/sign-up' component={SignUp} />
            <Route path='/sign-up-homeowner' component={SignUpH}/>
            <Route path='/sign-up-landscaper' component={SignUpL}/>
            <Route path='/profile-homeowner' component={() => <ProfileH user={this.state.user} />}/>
            <Route path='/profile-landscaper' component={ProfileL}/>
            <Route path='/login-home' component={() => <LogInHome login={this.login} />}/>
            <Route path='/login-land' component={() => <LogInLand login={this.login} />}/>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
