import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'

class AccountPage extends Component {


    render() {
        return (
            <form className="col-md-4 offset-md-2 acc-form">
                <div className="form-group">
                    <label htmlFor="" className="col-form-label col-form-label-sm">YOUR ACCOUNT ID IS:</label>
                    <div className="input-group">
                        <input type="text" className="form-control form-control-lg bg-dark text-white" />
                        <div className="input-group-append">
                            <button className="btn btn-lg btn-outline-light">
                                <span className="fz-but">copy</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="col-form-label col-form-label-sm">YOUR DISPLAYED NAME IS:</label>
                    <div className="input-group">
                        <input type="text" className="form-control form-control-lg bg-dark text-white" />
                        <div className="input-group-append">
                            <button className="btn btn-lg btn-outline-light">
                                <span className="fz-but">edit</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <button className="btn btn-outline-danger btn-lg col-md-12 text-white">
                            <span className="fz-but">
                                DEPOSITS & WITHDRAWALS
                        </span>
                        </button>
                    </div>
                    <div className="form-group col-md-6">
                        <button className="btn btn-outline-danger btn-lg col-md-12 text-white">
                           <span className="fz-but">MY BETS</span> 
                        </button>
                    </div>
                </div>


            </form>
        )
    }
}

export default AccountPage;


