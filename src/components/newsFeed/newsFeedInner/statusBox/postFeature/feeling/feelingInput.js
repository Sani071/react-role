import React, { useState, useEffect } from 'react';
// import ProfileThumb from '../../../../../common/ProfileThumb';
import FeelingBoxConatier from './feelingboxContainer';
// import TagBoxConatier from './tagboxContainer';

function TagInput({ activity, setFeelingShow, setActivityTag, clickHandler }) {
    const [isShow, setShow] = useState(false);
    const [selectedFeeling, setFeeling] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");

    const [initItems] = useState([
        { id: 1, icon: "🙂", text: "Happy" },
        { id: 4, icon: "😇", text: "Blessed" },
        { id: 2, icon: "🥰", text: "Loved" },
        { id: 3, icon: "😥", text: "Sad" },
        { id: 5, icon: "🤗", text: "Thankful" },
        { id: 6, icon: "🤩", text: "Excited" },
        { id: 7, icon: "😜", text: "Crazy" }

    ]);
    const changeHandler = (e) => {
        setSearchKeyword(e.target.value)
    };

    const data = [...initItems].filter(itm => {
        return itm.text.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1;
    });
    // console.log(selectedFeeling);
    return (

        <div className={ !isShow ? "post-feature-activitis-wrapper" : "d-none" }>
            <div className="stb-m2-search-area-input-icon">
                <div className="stb-m2-saii-inner">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder={ activity.placeholder } onChange={ changeHandler } onBlur={ (e) => changeHandler(e) } />
                </div>
            </div>
            <FeelingBoxConatier clickHandler={ clickHandler } feeling={ selectedFeeling } isShow={ isShow } initItems={ data } setFeeling={ setFeeling } />
        </div>
    )
}

export default TagInput;

{/* <span>{itm.icon}</span>
<span>{itm.text}</span> */}