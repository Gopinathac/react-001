import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions';
import BannerImg from '../../images/automation.jpg'
import { Redirect } from 'react-router-dom';


class Login extends Component {

    state = {
      username: '',
      password: ''
    }

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      console.log("on submit", this.state);
      this.props.signIn(this.state);
    }

    render() {

        if(this.props.token){
            return <Redirect to='/' />
        }
        document.body.classList.add("login-page");

        return (
            <div className="row justify-content-md-center h-100">
                <div className="banner-image d-none d-xl-block col-xl-9 h-100">
                    <img src={BannerImg} alt="Banner" />
                </div>
                <div className="col-xl-3 col-xs-12 h-100">
                    <div className="brand">
                        <h3 className="text-center">Oracle Cloud Automation</h3>
                    </div>
                    <div className="card fat">
                        <div className="card-body">
                            <h4 className="card-title">Login</h4>
                            <form className="my-login-validation" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>User Name</label>
                                    <input id="username" type="text" className="form-control" name="username" required autoFocus onChange={this.handleChange}/>
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input id="password" type="password" className="form-control" name="password" required data-eye  onChange={this.handleChange}/>
                                </div>
                                                                <div className="form-group m-0">
                                    <button type="submit" className="btn btn-primary btn-block">
                                        Login
                                    </button>
                                          </div>

                                <div className="form-group">
                                    <div className="center">
                                        { this.props.authError ? <p>{this.props.authError}</p> : null }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return{
      authError: state.auth.authError,
      token : state.auth.token
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
