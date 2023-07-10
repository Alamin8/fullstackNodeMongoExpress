import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import ExplicitIcon from '@mui/icons-material/Explicit';
const Earning = () => {
    return (
        <div className='widget'>
            <div className="left">
                <span className="title">Earning</span>
                <span className='amount'>Tk. 1234</span>
                <span className="link">See all Earning</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon/>
                    20%
                </div>
                <ExplicitIcon className='icon'/>
            </div>
        </div>
    );
};

export default Earning;