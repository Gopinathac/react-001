import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { getCards } from '../../store/actions/dashboardActions';
import { Redirect } from 'react-router-dom';

class Modules extends Component {
    
    constructor(props) {
        super(props);
        console.log('SM::props', props.match.params);
        this.state = {cards: [
            {
                heading: "SubModule 1",
                id: 1,
                subheading: "SubModule 1",
                titleClass: "card-header-success",
            },
            {
                heading: "SubModule 2",
                id: 2,
                subheading: "SubModule 2",
                titleClass: "card-header-danger",
            },
            {
                heading: "SubModule 3",
                id: 3,
                subheading: "SubModule 3",
                titleClass: "card-header-success",
            }
        ]};

        if ( props.match && props.match.params && props.match.params.id == '1') {
            this.state = {cards: [
                {
                    heading: "Hire",
                    id: 1,
                    subheading: "Hire",
                    titleClass: "card-header-success",
                },
                {
                    heading: "Termination",
                    id: 2,
                    subheading: "Termination",
                    titleClass: "card-header-danger",
                },
                {
                    heading: "Leaves",
                    id: 3,
                    subheading: "Leaves",
                    titleClass: "card-header-success",
                }
            ]};
        }
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
        document.body.classList.add("sub-modules");
        
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