import React from 'react'
import Logo from '../../images/cog-logo.svg'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions';


const Header = (props) => {

  if(props.token){

    return (
      <div className="header row h-100">
        <div className="col-xl-3 col-xs-6 h-100">
          <div className="brand-logo">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className="col-xl-8 col-xs-1 h-100">
        </div>
        <div className="col-xl-1 col-xs-5 h-100">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#" onClick={props.signOut} className="nav-link">Log out</a>
            </li>
          </ul>
        </div>
      </div>
    )

  }else{

    return (
      <div className="header row h-100">
        <div className="col-xl-3 col-xs-6 h-100">
          <div className="brand-logo">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className="col-xl-8 col-xs-1 h-100">
        </div>
        <div className="col-xl-1 col-xs-5 h-100">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            </li>
          </ul>
        </div>
      </div>
    )

  }

}

const mapStateToProps = (state) => {
  return {
      cards : state.dashboard.cards,
      token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);