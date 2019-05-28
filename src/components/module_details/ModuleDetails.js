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
                heading: "Link 1",
                id: 1,
                subheading: "Click below link to download",
                titleClass: "card-header-success",
                attachment: attachment
            },
            {
                heading: "Link 2",
                id: 2,
                subheading: "Select the file to upload",
                titleClass: "card-header-danger",
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