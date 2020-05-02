import React from 'react'
import ProfileThumb from '../../../../../common/ProfileThumb';
// import "./styless.css"

function ListItem({ item, active, setSelected, setHovered }) {
    // console.log(item)
    return (
        <div
            className={ `tb-list-item ${active ? "active" : ""}` }
            onClick={ () => setSelected(item) }
            onMouseEnter={ () => setHovered(item) }
            onMouseLeave={ () => setHovered(undefined) }
        >
            <ProfileThumb isHideen={ true } classNames={ ["tagbox-thumb"] } />
            <p>{ item.name }</p>
        </div>
    );
}

export default ListItem;
