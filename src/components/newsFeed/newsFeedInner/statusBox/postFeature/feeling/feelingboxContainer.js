import React from 'react'
// import ProfileThumb from '../../../../../common/ProfileThumb';
import Feelingbox from './feelingbox';

function FeelingBoxConatier({ feeling, setFeeling, initItems, isShow, clickHandler }) {

    return (
        <div className={ isShow ? "d-none" : "stb-fleelingbox-wrapper mt-3" }>
            {/* <div className="feelingbox-top">
                <span><i class="fas fa-chevron-left"></i></span>
                <span className="ml-2">😄 Feeling...</span>
            </div> */}
            <div>
                <Feelingbox clickHandler={ clickHandler } feeling={ feeling } initItems={ initItems } setFeeling={ setFeeling } />
            </div>
        </div>
    )
}

export default FeelingBoxConatier