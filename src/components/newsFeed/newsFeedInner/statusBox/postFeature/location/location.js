//https://www.npmjs.com/package/react-places-autocomplete

import React from 'react'
import LocationContainer from './locationContainer';

function Location({ activity }) {
    return (
        <div className={ "post-feature-activitis-wrapper" }>
            <div className="stb-m2-search-area-input-icon">
                <div className="stb-m2-saii-inner">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder={ activity.placeholder } />
                </div>
            </div>
            <LocationContainer />
        </div>
    )
}
export default Location;
// /value={searchKeyword} placeholder={activity.placeholder} onChange={changeHandler}