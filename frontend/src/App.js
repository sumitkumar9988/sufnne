import React from 'react';
import HomePage from './Home/App'
import AppPage from './app/App'
import  './bootstrap.min.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <Router >
         <Route path='/' component={HomePage} exact/> 
         <Route path='/home' component={AppPage} />
    </Router>
  );
}

export default App;
