import React from 'react'
import EXE from '../../images/myexe.exe'
import SHEET1 from '../../images/sheet1.xlsx'
const CardView = (props) => {

    const { cards } = props;

    return (
        <div className='apps row'>
            <ul class="links">
                <li>
                    <a href={SHEET1} target="_blank">File 1</a>
                </li>
                <li>
                    <a href={SHEET1} target="_blank">File 2</a>
                </li>
                <li>
                    <a href={SHEET1} target="_blank">File 3</a>
                </li>

                <li>
                    <a href={EXE} className="btn btn-primary" target="_blank">EXEC</a>
                </li>
            </ul>

            <div>
                <a href="/">Go Back to Dashboard</a>
            </div>
            
        </div>
    )
}

export default CardView
