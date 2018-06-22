import React, { Component } from 'react';



class BuyVbucksPage extends Component {


    render() {

        return (
            <form className="offset-md-2 col-md-4 acc-form">
                <div className="d-flex justify-content-center form-group col-md-12">
                    <i className="fas fa-exclamation-triangle icon-fz"></i>
                    <span>The minimum purchase is $5 for 500VBucks</span>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <div className="input-group">
                            <input type="text" className="form-control form-control-lg bg-dark text-white" />
                            <div className="input-group-append">
                                <button className="btn btn-lg btn-outline-light">
                                    <span className="fz-but">100$</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-3">
                        <button className="btn btn-lg btn-light col-md-3 text-dark col-md-12">
                            <i className="fab fa-paypal fz-but"></i>
                            <i className="fab fa-cc-paypal fz-but"></i>
                        </button>
                    </div>
                    <div className="form-group col-md-3">
                        <button className="btn btn-lg btn-danger text-white col-md-12">
                            <i className="fab fa-paypal fz-but"></i>
                            <span className="fz-but">PayPal</span>
                        </button>
                    </div>
                </div>
                <div className="form-group ">
                    <div className="form-check col-md-6 offset-md-3">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">I agree to the Terms of service</label>
                    </div>
                </div>
                <div className="form-row">
                    <button className="col-md-6 offset-md-3 btn btn-outline-danger text-white btn-lg">
                        <span className="fz-but">PURCHASE</span>
                    </button>
                </div>


            </form>
        )
    }
}

export default BuyVbucksPage;