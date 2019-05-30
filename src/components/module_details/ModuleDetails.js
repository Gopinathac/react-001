import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { getCards } from '../../store/actions/dashboardActions';
import { Redirect } from 'react-router-dom';
import SHEET1 from '../../images/sheet1.xlsx';

class Modules extends Component {
    
    constructor(props) {
        super(props);
        
        console.log('CDCDCDCD', props);
        var attachment = 'http://localhost:3000/sheet1.xlsx';
        var attachmentObj = {};
        if (sessionStorage.getItem('uploadedFile')) {
            attachmentObj = JSON.parse(sessionStorage.getItem('uploadedFile'));
        } 

        var cards = [
            {
                heading: "Click below link to download",
                id: 1,
                subheading: "Download",
                titleClass: "card-header-success",
                attachment: attachment
            }
        ];

        for (let i = 0; i < cards.length; i++) {
            var c = cards[i];
            if (attachmentObj.id == c.id) {
                c.attachment = attachmentObj.fname;
            }
            
        }
        this.state = {cards: cards};

        
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
        document.body.classList.add("module-details");
        // $('[data-toggle="tooltip"]').tooltip();
        return (
            <Card cards={this.state.cards}/>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('EEEEEEEE', state);
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