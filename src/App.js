import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Details from './components/dashboard/Details';
import Modules from './components/modules/Modules';
import SubModules from './components/sub_modules/SubModules';
import ModuleDetails from './components/module_details/ModuleDetails';
import { connect } from 'react-redux'
import { updateToken } from './store/actions/authActions';


class App extends Component {

  componentDidMount() {
    this.props.updateToken();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <section className="App">
            <div className="container-fluid h-100">
              <Header></Header>
              <Switch>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/modules' component={Modules}/>
                <Route exact path='/submodules' component={SubModules}/>
                <Route exact path='/module_deatils' component={ModuleDetails}/>
                <Route exact path='/' component={Dashboard}/>
              </Switch>
            </div>
          </section>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateToken: () => dispatch(updateToken())
  }
}

export default connect(null, mapDispatchToProps)(App);
