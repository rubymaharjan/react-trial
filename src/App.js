import React from 'react'; 
import {Switch,Route, NavLink} from "react-router-dom";
import Signup from './pages/signup';
import Signin from './pages/signin';
import './App.css';
function App() {
  return (
    <router>
      <div className="App">
        <div className="main-container">
                <div className="formtitle">
                  <NavLink to="/" activeClassName="formtitle-link-active" className="formtitle-linS">Signup</NavLink>
                  or <NavLink exact to="/signin" activeClassName="formtitle-link-active" className="formtitle-link">Signin</NavLink>
                </div>
                
                <div>

               <Switch>
                <Route exact path='/' component={Signup}>
                </Route>
                <Route  path='/signin' component={Signin} >
                </Route>
               </Switch>
                </div>
        </div>
      </div>
    </router> 
  );
}
export default App;
