import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'


class Routes extends Component {
  render() {
    return(
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    )
  }
}

export default Routes