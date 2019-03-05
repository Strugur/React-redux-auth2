import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch,Redirect} from "react-router-dom";



import NavBar from './components/NavBar'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'





const App = props=> {
 


   
    return (
  <Router >
    <div className="app">
      <div >
       <NavBar />
       </div>      
        <div>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />
         <Redirect from="*" to="/" />
        </Switch>
        </div>
      </div>
  </Router>
    
    );
  
}



export default App;

