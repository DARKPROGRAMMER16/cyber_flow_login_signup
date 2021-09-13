import React, { Fragment } from 'react'
import { Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'

const App = () => {
  return (
    <Fragment>
      <Navbar/>

      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/signup">
          <SignUp/>
        </Route>

      </Switch>

    </Fragment>
  )
}

export default App
