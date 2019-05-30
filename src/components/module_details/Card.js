import EXE from '../../images/myexe.exe';

import React, { Component } from 'react';

export class Card extends Component {
    cards;
    constructor(props) {
        super(props);
        
        // this.cards = props.cards;

        this.state = {
            selectedFile: null,
            cards: props.cards
        };
    };
    
    onChangeHandler=event=>{
        console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })    
    }

    onClickHandler = (event) => {
        var cardId = event.target.getAttribute('data-id');
        console.log('onClickHandler', sessionStorage.getItem('jwtToken'), cardId);
        
        const bearer = 'Bearer '+ sessionStorage.getItem('jwtToken');
        const formData = new FormData() 
        formData.append('file', this.state.selectedFile);
        
        fetch('http://localhost:3000/api/upload', {
            method: 'post',
            mode: "cors", // no-cors, cors, *same-origin
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer
            },
            body: formData
        })
        .then(response => response.json())
        .then(data =>  {
            console.log('data', data);
            if (data.message === 'success' && data.file) {
                var fname = 'http://localhost:3000/' + data.file.filename;
                var obj = {
                    id: cardId,
                    fname: fname
                };
                sessionStorage.setItem('uploadedFile', JSON.stringify(obj));
                
                for (let i = 0; i < this.state.cards.length; i++) {
                    if (obj.id == this.state.cards[i].id) {
                        this.state.cards[i].attachment = obj.fname;
                    }
                }

                this.setState({
                    cards: this.state.cards
                });
                
                alert('File uploaded successfully!.');
                document.querySelector('form').reset();
            }
        }).catch((err) => {
            console.log(err);
        });

        
    }

    runExe = () => {
        const bearer = 'Bearer '+ sessionStorage.getItem('jwtToken');
        fetch('http://localhost:3000/api/execute_exe', {
            method: 'GET',
            mode: "cors", // no-cors, cors, *same-origin
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data =>  {
            alert('EXE executed!.');
        }).catch((err) => {
            console.log(err);
        });
    };

    render() {
        return (
            <div >
                
                { this.state.cards && this.state.cards.map(card => {
                    return (
                        <div className='apps row justify-content-md-center h-100' key={card.id}>
                            <div className="col-md-6"  >
                                <div className="card card-chart">
                                    <div className="card-header-success" >
                                        <h4 className="card-title" id="tit-hand">
                                            <a href="{card.attachment}" target="_blank">Click below link to download</a>
                                        </h4>
                                        <p className="card-category"></p>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            <a href={card.attachment} target="_blank">Download</a>
                                        </h4>                           
                                    </div> 
                                </div>
                            </div>

                            <div className="col-md-6" >
                                <div className="card card-chart">
                                    <div className="card-header-warning" >
                                        <h4 className="card-title" id="tit-hand">
                                            <a href="" target="_blank">Select the file to upload</a>
                                        </h4>
                                        <p className="card-category"></p>
                                    </div>
                                    <div className="card-body">
                                        <form method="post" encType="multipart/form-data">
                                            <input type="file" name="file" onChange={this.onChangeHandler} />
                                            <input type='button' className="btn btn-primary" value='Upload' data-id={card.id} onClick={this.onClickHandler}  />
                                        </form> 
                                    </div>  
                                </div>
                            </div>

                            <div className='apps exe-btn col-md-6'>
                                <input type='button' className="btn btn-primary btn-lg" value='Run' data-toggle="tooltip" data-placement="bottom" title="click here to execute the automation file" onClick={this.runExe} />
                            </div>
                        </div>
                    )
                })
                }
                
                
                
                
            </div>
        )
    }
}

export default Card

