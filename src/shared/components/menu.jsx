import React from 'react';
import MenuItem from './menu-item';

const Menu = () => {
    const menuList = [
        { title: "Play",nameOfClass: "fas fa-gamepad"},
        { title: "FAQ",nameOfClass: "fas fa-question"},
        { title: "Support",nameOfClass: "fas fa-gamepad"},
        { title: "Buy VBucks",nameOfClass: "fas fa-shopping-basket"},
        { title: "Account",nameOfClass: "fas fa-user"},
        { title: "Withdraw VBucks",nameOfClass: "fas fa-dollar-sign"}
    ]
    return (
        <div className="col-md-2 list-group main-color-1 main-nenu" >
            {
                menuList.map( (item,index) => {
                    const { title,nameOfClass} = item;
                    return(
                        <MenuItem title={title} nameOfClass={nameOfClass} key={index} />
                    )
                })
            }
        </div>
    )
}

export default Menu;