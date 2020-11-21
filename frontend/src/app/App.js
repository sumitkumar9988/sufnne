import React from 'react';
import Header from './component/Header'
import Footer from './component/Footer'
import {Container} from 'react-bootstrap'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <Router >
      <Header/>
        <main className="py-3">
          <Container>
              <Route path='/' component={HomeScreen} /> 
              <Route path='/login' component={LoginScreen} />
              <Route path='/profile' component={ProfileScreen} />
              <Route path='/register' component={RegisterScreen} />
          </Container>
        </main>
      <Footer/>
    </Router>
  );
}

export default App;


