import React from 'react'; 
import { BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";
import axios from 'axios';
class signin extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:"",
            body:"",
            data:""
        }
    }
    componentDidMount() {
        
        
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        console.log(res);
        this.setState({
            data:res.data
        });
    })
    
    }
    handleInput=({target:{name,value}})=>{
        this.setState({[name]:value});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        
        console.log("dfas",this.state);
        const data={
            title: this.state.title,
            body: this.state.body
        }
        axios.post('https://jsonplaceholder.typicode.com/posts',{data})
        .then(res => {
            console.log(res);
        })
    
      }

    
    render(){
        const {data} = this.state;
        console.log(data);
         return(
            <div className="login-container">
            <NavLink to="/signin" className="formlink">Login</NavLink>
            <form onSubmit={this.handleSubmit} method="post">
                    <div className="form-group" id="name">
                            <label for="your_name"></label>
                            <input type="text" onChange={this.handleInput} name="title" id="usernamee" placeholder="Username" required/>
                    </div>
                    <div className="form-group" id="pwd">
                            <label for="your_name"><i className="fas fa-lock"></i></label>
                            <input type="password" onChange={this.handleInput} name="body" id="password" placeholder="Password" required/>
                    </div>
                    <div id="forgot-pwd">
                        <p><a href="password.html">Forgot password?</a></p>
                    </div>
                    <div className="form-group bd" id="button">
                        <button type="submit" className="btn">Login</button>
                    </div>
              </form>
              <div>
                  name: {this.state.username}
              </div>
              <div>
                 password: {this.state.password}
              </div>
              {
                  data && data.map(d=>(
                      <div>
                          <h1>Name :{d.title}</h1>
                          <div>Body :{d.body}</div>
                    </div>
                  ))
              }
     </div>

         )
     }
}
export default signin;