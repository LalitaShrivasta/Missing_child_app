import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/signUp.js';
import Home from './components/home';
import antd from'antd/dist/antd.css';
import {  BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Login from './components/login';
import Description from './components/description';
import Card from './components/card.js';
// import slider from './components/s'
// import CommentBox from './components/comment.js';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/description' component={Description} />
          <Route path='/card' component={Card} />
          {/* <CommentBox /> */}
          {/* <Demo /> */}                                                                                                                                                                                                                                      
          {/* <Route exact path='/login' component={Login} /> */}
          {/* <Login /> */}

        </div>
      </Router>
    );
  }
}

export default App;
