import React from 'react'
import ProfileThumb from '../../../../common/ProfileThumb'

export default function Tags({ selectedTags }) {
    return (

        <span className="tiles d-flex flex-wrap">
            { selectedTags.map((itm, id) => {
                return <span key={ itm.id } className="tile">
                    <ProfileThumb isHideen={ true } classNames={ ['tile-thumb'] } />
                    <span>{ itm.name }</span>
                    {/* <i onClick={ () => { removeFriend(itm.id) } } className="tile__icon fa fa-times" ></i> */ }
                </span>
            }) }

        </span>
    )
}
