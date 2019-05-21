import React from 'react'; 
import { BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";

class signup extends React.Component{
      
      state={
              username:"",
              password:""
      }
        componentDidMount() {
                
        }
        
    handleInput=({target:{name,value}})=>{
        this.setState({[name]:value});
        
        console.log("fasdf",name,value)
    }
    render(){
         return(
            <div className="signup-content">
            <form onSubmit={this.handleSubmit} method="post">
                    <div className="form-group" id="name">
                             <label for="your_name"></label>
                            <input type="text" name="username" onChange={this.handleInput} id="username" placeholder="Firstname">
                            </input>
                     </div>

        <div className="form-group" id="email">
                <label for="email"></label>
                <input type="text" name="email" id="email"  onChange={this.handleInput} placeholder="email"></input>
        </div>
        <div class="form-group" id="pwd">
                <label for="pwd"></label>
                <input type="text" name="password" onChange={this.handleInput} id="password"  placeholder="Password"></input>
        </div>
        
<div className="grid-item"><p>Terms and Condition</p>
                        </div>

  
        <div className="form-group" id="register-button">
              <button type="submit" id="check" className="btn">Signup</button>
            
    </div>
  </form>
  <div>
          name: {this.state.username}
  </div>
  
  <div>
          Email: {this.state.email}
  </div>
  <div>
          password: {this.state.password}
  </div>
  </div>

         )
     }
}
export default signup;