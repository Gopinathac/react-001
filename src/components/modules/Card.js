import React from 'react'

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
                                    <a href={'/submodules/' + card.id}>{card.heading}</a>
                                </h4>
                                <p className="card-category"></p>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">{card.subheading}</h4>                           
                            </div>
                            
                        </div>
                    </div>
                )
            })
        }
     
        </div>
    )
}

export default Card
