
import './App.css';
import React from 'react'
import Registration from './pages/Registration'
import Players from './pages/Players'
import Navigation from './components/Navigation.jsx'
import {BrowserRouter,Switch, Route} from 'react-router-dom'

import 'bootstrap'

const App=()=>
{
  
  return (
    <div className="App">
    <Navigation/>
    <BrowserRouter>
      <Switch>
        <Route path="/registration"><Registration/></Route>
        <Route path="/players"><Players/></Route>
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
