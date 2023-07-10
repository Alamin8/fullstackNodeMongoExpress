import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ExplicitIcon from '@mui/icons-material/Explicit';

const Expense = () => {
  return (
    <div className='widget'>
            <div className="left">
                <span className="title">Expense</span>
                <span className='amount'>Tk. 1234</span>
                <span className="link">See all expense</span>
            </div>
            <div className="right">
                <div className="percentage negative">
                    <KeyboardArrowDownIcon/>
                    20%
                </div>
                <ExplicitIcon className='icon'/>
            </div>
        </div>
  );
};

export default Expense;
