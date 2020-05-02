import React from 'react';
import { isEqual } from "lodash";
import "./styless.css"


function FeelingListItem({ feeling, item, active, setSelected, setHovered, removeItem, setFeeling }) {
    const isSelected = isEqual(item, feeling);
    const clcker = (e) => {
        // e.preventDefault();
        e.stopPropagation();
        setFeeling("")
    }
    return (
        <div
            className={ `f-list-item position-relative ${isSelected || active ? " active" : ""}` }
            onClick={ (e) => setSelected((e, item)) }
            onMouseEnter={ () => setHovered(item) }
            onMouseLeave={ () => setHovered(undefined) }
        >
            <p className="text-dark">{ item.icon }</p>
            <p className="text-black">{ item.text }</p>
            <span onClick={ clcker } className={ `f-list-item-remove ${!isSelected && "d-none"}` }>x</span>
        </div>
    );
}

export default FeelingListItem;
