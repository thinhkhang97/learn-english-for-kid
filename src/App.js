import React, { Component } from 'react';
import Home from './components/home';
import Login from './components/authentication/login';
import Register from './components/authentication/register';
import Learn from './components/learn';
import Satisfy from './components/satisfy';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div className='app-container'>
          <Route path='/' exact component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/register'  component={Register}/>
          <Route path='/learn'  component={Learn}/>
          <Route path='/satisfy'  component={Satisfy}/>
        </div>
      </Router>
      </Provider>

    );
  }
}

export default App;
