import React, { Component } from 'react';

class AccountPage extends Component {


    render() {
        return (
            <form action="" className="bg-dark col-4 ">
                    <div className="form-group col-12">
                        <label htmlFor="" className="col-12">label1</label>
                        <input 
                            type="text" 
                            d="login-input" 
                            className="form-control" 
                        />
                    </div>
                    <div className="form-group col-12">
                        <label htmlFor="" className="col-12">label2</label>
                        <input 
                            type="password" 
                            id="password-input" 
                            className="form-control col-12 bg-secondary text-white" 
                        />
                    </div>
                    <div className="form-row col-12">
                        <div className="form-group col-6">
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group col-6">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>              
                </form>
                

        )
    }
}

export default AccountPage;