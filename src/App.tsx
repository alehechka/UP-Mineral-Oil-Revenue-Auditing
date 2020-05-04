import React from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import PrivateRoute from './components/auth/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import OperatorDetails from './components/operators/OperatorDetails';
import EditProperty from './components/properties/EditProperty';
import CheckDetails from './components/checks/CheckDetails';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard}/>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/operator/:id" component={OperatorDetails} />
        <PrivateRoute path="/editProperty/:id" component={EditProperty} />
        <PrivateRoute path="/check/:id" component={CheckDetails} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
