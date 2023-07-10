import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import ExplicitIcon from '@mui/icons-material/Explicit';

const SellsTerget = () => {
  return (
    <div className='widget'>
            <div className="left">
                <span className="title">Sells Target</span>
                <span className='amount'>Tk. 1234</span>
                <span className="link">See all Target</span>
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

export default SellsTerget;
