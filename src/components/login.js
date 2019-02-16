import React, { Component } from 'react';
import '../css/main.css';
import '../css/util.css';
import axios from 'axios';
import bgImage from '../images/bg-01.jpg';
import { Redirect} from 'react-router';


class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            emailid:'',
            password:'',
            redirect: ''
        }
    }

              
    datachange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    setRedirect = () => {
        this.setState({
            redirect : true
        })
    }

    postData = (e)=>{
        e.preventDefault()

        const firstname = this.state.firstname
        const lastname = this.state.lastname
        const emailid = this.state.emailid
        const password = this.state.password
        // const address = this.state.address
        // const state = this.state.state
        // const city = this.state.city
        // const mobile = this.state.mobile
        // const pincode = this.state.pincode
        // const gender = this.state.gender

        const data = {
            firstname,
            lastname,
            emailid,
            password,
        }
        console.log(data);
        
        axios.post('https://missingchild.herokuapp.com/user/login', data)
        .then(res=>{
            console.log(res);
            this.setState({
                message:res.data,
            });
        })
        .catch(err=>{
            console.log(err);
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname : '/',
                state : this.state
            }} />
        }
    }

    
    render() {
        
    return (
      <div className="signUp">
        <div className="limiter">
            <div className="container-login100" style={{backgroundImage: `url(${bgImage})`}}>
                <div className="wrap-login100">
                    <form  className="login100-form validate-form" onSubmit={this.postData} >
                        <span className="login100-form-logo" >
                            <i className="zmdi zmdi-landscape"></i>
                        </span>

                        <span className="login100-form-title p-b-34 p-t-27">
                            Login
                        </span>
                        <div className="wrap-input100 validate-input" data-validate="Enter email">
                            <input className="input100 loginpassword" type="email" name="emailid" placeholder="Enter your email Id" value={this.state.emailid} onChange={this.datachange.bind(this)}/>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter password">
                            <input className="input100 loginpassword" type="password" name="password" placeholder="pasword" value={this.state.password} onChange={this.datachange.bind(this)}/>
                        </div>

                        <div className="contact100-form-checkbox">
                            <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
                            <label className="label-checkbox100" for="ckb1">    
                                Remember me
                            </label>
                        </div>

                        <div className="container-login100-form-btn">
                            <button type="submit" className="login100-form-btn" onClick={this.setRedirect}>
                                Login
                            </button>
                        </div>
                        <div className="text-center p-t-90">
                            <a className="txt1" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>
                {this.renderRedirect()}
            </div>
        </div>
	    <div id="dropDownSelect1"></div>
      </div>             
    );
  }
}

export default Login;
