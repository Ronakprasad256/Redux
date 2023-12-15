import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../state/index';

const Home = () => {
    const dispatch = useDispatch();
    // const action = bindActionCreators(actionCreator, dispatch) or
    const {WithdrawMoney, DepositeMoney} = bindActionCreators(actionCreator, dispatch)
    return (
        <>
            <div className="container">
                <h2>Deposite / Withdraw Money</h2>
                <button className='btn btn-primary mx-1' onClick={()=>{WithdrawMoney(100)}}>-</button>
                Update Balance
                <button className='btn btn-primary mx-1' onClick={()=>{DepositeMoney(100)}}>+</button>
            </div>
        </>
    )
}

export default Home
