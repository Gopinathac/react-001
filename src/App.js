import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Details from './components/dashboard/Details';
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
                <Route exact path='/deatils' component={Details}/>
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
