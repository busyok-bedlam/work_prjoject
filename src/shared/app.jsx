import React, { Component } from 'react';
import { Route,Link } from 'react-router-dom';


import Menu from './components/menu';
import AccountPage from "../shared/components/account-page";
import BuyVbucksPage from './components/buy-vbucks-page';

class App extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Link to="/account-page" children="account page "/>
                    <Link to="/buy-vbucks" children="vbucks page "/>
                    <Menu />
                    <Route path="/account-page" component={AccountPage} exact />
                    <Route path="/buy-vbucks" component={BuyVbucksPage} exact />

                </div>
            </div>

        )
    }
}
export default App;