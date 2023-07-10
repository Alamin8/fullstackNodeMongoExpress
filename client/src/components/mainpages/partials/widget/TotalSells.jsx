import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import ExplicitIcon from '@mui/icons-material/Explicit';
const TotalSells = () => {
  return (
    <div className='widget'>
            <div className="left">
                <span className="title">Total Sells</span>
                <span className='amount'>Tk. 1234</span>
                <span className="link">See all Sell</span>
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

export default TotalSells;
