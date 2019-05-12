import React from 'react'
import EXE from '../../images/myexe.exe'
import SHEET1 from '../../images/sheet1.xlsx'

const Card = (props) => {

    const { cards } = props;

    return (
        <div className='apps row justify-content-md-center h-100'>
            
            { cards && cards.map(card => {
                return (
                    <div className="col-md-4" key={card.id} >
                        <div className="card card-chart">
                            <div className={card.titleClass} >
                                <h4 className="card-title" id="tit-hand">
                                    <a href={SHEET1} target="_blank">{card.heading}</a>
                                </h4>
                                <p className="card-category"></p>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href={SHEET1} target="_blank">{card.subheading}</a>
                                </h4>                           
                            </div>
                            
                        </div>
                    </div>
                )
            })
            }

            <div className='apps row'>
                <a href={EXE} className="btn btn-primary" target="_blank">EXEC</a>                
            </div>

            
        </div>
        
    )
}

export default Card
