import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'

const idValidateFunc = (str) => {
    let idReg = /\b\d+\b/
    return !!str.match(idReg);
}
const loginValidateFunc = str => {
    let logReg = /^[a-z]+([-_]?[a-z0-9]+){0,2}$/i;
    return !!str.match(logReg);
}

class AccountPage extends Component {
    constructor(){
        super();
        this.submitHandler = this.submitHandler.bind(this);
    }
    submitHandler(e){
        e.preventDefault();

        let idInputValue = this.inputId.value;
        let loginInputValue = this.inputName.value;
        if(idInputValue && loginInputValue){
            // debugger;
            let idValid = idValidateFunc(idInputValue),
                logValid = loginValidateFunc(loginInputValue)
            if(idValid && logValid){
                alert("SUCCESS");
                this.inputName.value = "";
                this.inputId.value = "";
                return;
            }
            alert("WRONG PASSWORD OR LOGIN")
            this.inputName.value = "";
            this.inputId.value = "";
        }

    }
    render() {
        return (
            <form className="col-md-4 offset-md-2 acc-form" onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="" className="col-form-label col-form-label-sm">YOUR ACCOUNT ID IS:</label>
                    <div className="input-group">
                        <input type="text" className="form-control form-control-lg bg-dark text-white" ref={node =>  {this.inputId = node} } />
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
                        <input type="text" className="form-control form-control-lg bg-dark text-white" ref={ node => { this.inputName = node}} />
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


