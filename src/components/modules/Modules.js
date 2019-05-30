import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { getCards } from '../../store/actions/dashboardActions';
import { Redirect } from 'react-router-dom';

class Modules extends Component {
    
    constructor(props) {
        super(props);
        this.state = {cards: [
            {
                heading: "HCM",
                id: 1,
                subheading: "HCM",
                titleClass: "card-header-success",
            },
            {
                heading: "COMPENSATION",
                id: 2,
                subheading: "COMPENSATION",
                titleClass: "card-header-danger",
            },
            {
                heading: "BENEFITS",
                id: 3,
                subheading: "BENEFITS",
                titleClass: "card-header-warning",
            }
        ]};
    }
    componentDidMount() {
       
    }

    render () {

        // const { cards, token } = this.props;
        
        console.log('Modules', this.state.cards);
        // if(!token){
        //     return <Redirect to='/login' />
        // }

        document.body.classList.add("dashboard");
        document.body.classList.add("modules");
        
        return (
            <Card cards={this.state.cards}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Modules);