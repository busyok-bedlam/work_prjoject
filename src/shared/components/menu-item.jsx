import React from 'react';


const MenuItem = ({ title, nameOfClass}) => {
    return (
        <div className="list-group-item">
            <i className={nameOfClass}></i>
            <a>{title}</a>
        </div>
    )
}
export default MenuItem;