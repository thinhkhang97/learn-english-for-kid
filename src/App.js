import React, { Component } from 'react';
import Home from './components/home';
import Login from './components/authentication/login';
import Register from './components/authentication/register';
import Learn from './components/learn';
import Satisfy from './components/satisfy';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css'
class App extends Component {
  render() {
    return (
      <Router>
        <div className='app-container'>
          <Route path='/' exact component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/register'  component={Register}/>
          <Route path='/learn'  component={Learn}/>
          <Route path='/satisfy'  component={Satisfy}/>
        </div>
      </Router>

    );
  }
}

export default App;
