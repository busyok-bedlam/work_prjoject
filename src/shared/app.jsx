import React, { Component } from 'react';

import Menu from './components/menu';
import AccountPage from "../shared/components/account-page";

class App extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Menu />
                    <AccountPage />
                </div>
            </div>

        )
    }
}
export default App;