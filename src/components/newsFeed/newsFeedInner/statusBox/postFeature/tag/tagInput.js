import React, { useState, useEffect } from 'react';
// import ProfileThumb from '../../../../../common/ProfileThumb';
import TagBoxConatier from './tagboxContainer';
import TagedContainer from './tagedContainer';
import { useDispatch, useSelector } from "react-redux";
import { getTagOption, setTagOption, searchTagOption } from '../../../../../../store/actions/createPostAction';

function TagInput({ activity, clickHandler }) {
    const dispatch = useDispatch();
    const [isShow, setShow] = useState(false);
    const [selectedFrnds, setFriend] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [initItems, setInitItems] = useState([]);
    const [options, setOptions] = useState([]);
    // useEffect(() => {
    //     if (!searchKeyword) {
    //         setOptions(suggestItems)
    //     }
    // }, [searchKeyword])

    const pushFriend = (data) => {
        setFriend([...selectedFrnds, data]);
        if (data) {
            removeOptions(data.id);
        };
    };

    const removeFriend = (id) => {
        const filterdData = [...selectedFrnds].filter(itm => {
            return itm.id !== id;
        });
        setFriend([...filterdData]);
    };

    const removeOptions = (id) => {
        const filterItems = [...options].filter(itm => {
            return itm.id !== id;
        })
        setOptions(filterItems);
        removeInitItems(id)
    };

    const removeInitItems = (id) => {
        const filterItems = [...initItems].filter(itm => {
            return itm.id !== id;
        })
        setInitItems(filterItems);
    };

    const push2option = (keyword) => {
        if (keyword) {
            const data = [...initItems].filter(itm => {
                return itm.name.toLowerCase().includes(keyword.toLowerCase());
            })
            setOptions([...data]);
        };
    };

    useEffect(() => {
        setShow(options.length < 1 && true);
    }, [options]);

    const changeHandler = (e) => {
        dispatch(searchTagOption({ keyword: e.target.value }));
        setSearchKeyword(e.target.value || "")
    };

    useEffect(() => {
        setShow(!searchKeyword && true);
    }, [searchKeyword]);

    const setTemp = (temp) => {
        setSearchKeyword(temp.name)
    }
    const tagOptions = useSelector(state => state.createPostData.tagOptions);

    useEffect(() => {
        dispatch(setTagOption([{ id: 1, name: "Rajib Ray", isSelected: false, isSuggested: false, isTagDisable: true },
        { id: 2, name: "MD Noyon", isSelected: false, isSuggested: false, isTagDisable: true },
        { id: 3, name: "Emran Ahmed", isSelected: false, isSuggested: true, isTagDisable: false },
        { id: 4, name: "DIganto Farabi", isSelected: false, isSuggested: false, isTagDisable: false },
        { id: 5, name: "G Rabbi", isSelected: false, isSuggested: true, isTagDisable: false }]));
    }, []);

    return (
        <div className="post-feature-activitis-wrapper">
            <div className="stb-m2-search-area-input-icon">
                <div className="stb-m2-saii-inner">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder={ activity.placeholder } onChange={ changeHandler } onBlur={ (e) => changeHandler(e) } />
                </div>
            </div>
            <TagedContainer clickHandler={ clickHandler } selectedFrnds={ selectedFrnds } removeFriend={ removeFriend } />
            <TagBoxConatier searchKeyword={ searchKeyword } setTemp={ setTemp } isShow={ isShow } initItems={ tagOptions } setFriend={ pushFriend } />
        </div>
    )
}

export default TagInput;