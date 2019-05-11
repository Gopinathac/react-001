import React, { Component } from 'react';
import CardView from './CardView';
import { connect } from 'react-redux';
import { getCards } from '../../store/actions/dashboardActions';
import { Redirect } from 'react-router-dom';

class Details extends Component {

    componentDidMount() {
        const { token } = this.props;

        if(token){
            this.props.getCards();
        }
    }

    render () {

        const { cards, token } = this.props;

        // if(!token){
        //     return <Redirect to='/login' />
        // }

        document.body.classList.add("dashboard");
        
        return (
            <CardView cards={cards}/>
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
        getCards: () => dispatch(getCards())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);