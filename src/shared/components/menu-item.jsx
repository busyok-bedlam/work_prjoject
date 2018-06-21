import React from 'react';


const MenuItem = ({ title, nameOfClass}) => {
    return (
        <div className=" d-flex justify-content-between list-group-item list-group-item-action none-border menu-item">
            <i className={nameOfClass}></i>
            <a>{title}</a>
        </div>
    )
}
export default MenuItem;