import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/inicio'
import Catalogo from './pages/catalogo'
import Login from './pages/cuenta/login'
import Register from './pages/cuenta/register'
import Acount from './pages/cuenta';
import Footer from './components/footer'

const App = () => {
  const [login, setLogin] = useState(false)
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/catalogo/:id' exact component={Catalogo} />
        {
          login
            ?
            <Route path='/acceder' exact component={Acount} />
            :
            <Route path='/acceder' exact component={Login} />
        }
        <Route path='/cuenta' exact component={Acount} />
        <Route path='/registrarse' exact component={Register} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
