import React from 'react';


const MenuItem = ({ title, nameOfClass,history,location,path }) => {
    const { replace } = history;
    const { pathname } = location;
    const checked = (path === pathname);
    const clickHandler = e => {
        e.preventDefault();

        replace(path,{
            from: pathname
        })
    }
    return (
        <div
            onClick={clickHandler}
            className=" d-flex justify-content-between list-group-item list-group-item-action none-border menu-item"
        >
            <i
                className={nameOfClass}
                style={{
                    color: checked ? "red" : "#fff"
                }}
            />
            <a>{title}</a>
        </div>
    )
}
export default MenuItem;