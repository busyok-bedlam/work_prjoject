import React from 'react';
import MenuItem from '../containers/menu-item-cont';

const Menu = () => {
    const menuList = [
        { title: "Play",nameOfClass: "fas fa-gamepad", path: "/play"},
        { title: "FAQ",nameOfClass: "fas fa-question",path: "/faq"},
        { title: "Support",nameOfClass: "fas fa-gamepad",path: "/support"},
        { title: "Buy VBucks",nameOfClass: "fas fa-shopping-basket",path: "/buy-vbucks"},
        { title: "Account",nameOfClass: "fas fa-user",path: "/account-page"},
        { title: "Withdraw VBucks",nameOfClass: "fas fa-dollar-sign", path: "/withdraw-vbucks"}
    ]
    return (
        <div className="col-md-2 list-group main-color-1 main-nenu" >
            {
                menuList.map( (item,index) => {
                    const { title,nameOfClass} = item;
                    return(
                        <MenuItem title={title} nameOfClass={nameOfClass} path={item.path} key={index} />
                    )
                })
            }
        </div>
    )
}

export default Menu;