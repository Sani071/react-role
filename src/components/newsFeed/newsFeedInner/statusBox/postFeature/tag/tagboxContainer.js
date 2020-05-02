import React, { useState } from 'react'
import ProfileThumb from '../../../../../common/ProfileThumb';
import Tagbox from './tagbox';
import { useSelector } from 'react-redux';

function TagBoxConatier({ setFriend, initItems, isShow, setTemp }) {
    const searchKeyword = useSelector(state => state.createPostData.searchKeyword);

    return (
        <div className={ "stb-tagbox-wrapper" }>
            <div className="tagbox-top">
                <span >{ searchKeyword ? "Select  Friend" : "Suggestion" }</span>
            </div>
            <div>
                <Tagbox searchKeyword={ searchKeyword } setTemp={ setTemp } initItems={ initItems } setFriend={ setFriend } />
            </div>
        </div>
    )
}

export default TagBoxConatier