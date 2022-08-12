import React, { Component } from 'react'
import './App.css';
import Home from './components/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddUser from './components/users/AddUser';
import Users from './components/users/Users';
import AddContract from './components/contracts/AddContract';
import Contracts from './components/contracts/Contracts';
import AddItem from './components/items/AddItem';
import Items from './components/items/Items';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/adduser' component={AddUser} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/addcontract' component={AddContract} />
          <Route exact path='/contracts' component={Contracts} />
          <Route exact path='/additem' component={AddItem} />
          <Route exact path='/items' component={Items} />
        </Switch>
      </BrowserRouter>
    )
  }
};

export default App;
/*
            <Route exact path='/users' component={Signup} />
            <Route path='/users/:id' component={AddPatient} />
            <Route path='/contracts' component={AuthForgot} />
            <Route path='/contracts/:id' component={StudyListRoute} />*/