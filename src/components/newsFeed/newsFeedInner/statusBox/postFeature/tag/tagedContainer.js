import React from 'react';
import ProfileThumb from '../../../../../common/ProfileThumb';
import { useSelector, useDispatch } from 'react-redux';
import { removeTag } from '../../../../../../store/actions/createPostAction';

export default function TagedContainer({ removeFriend, clickHandler }) {
    const selectedFrnds = useSelector(state => state.createPostData.tagedFriends);
    const dispatch = useDispatch()
    return (
        <div className={ selectedFrnds.length ? "position-relative" : "d-none" }>
            <div className="tagedContainer" >
                {/* <span className="InputAddOn-item"> {activity.prependText}</span> */ }
                <div className="tiles d-flex flex-wrap">
                    {/* .filter(itm => itm.isSelected) */ }
                    { selectedFrnds.map((itm, id) => {
                        return <span key={ itm.id } className="tile">
                            <ProfileThumb isHideen={ true } classNames={ ['tile-thumb'] } />
                            <span>{ itm.name }</span>
                            <i onClick={ () => { dispatch(removeTag({ id: itm.id })) } } className="tile__icon fa fa-times" ></i>
                        </span>
                    }) }

                </div>
            </div>
            <div>
                <button onClick={ () => clickHandler() } className="stb-doneBtn">
                    <span>Done</span>
                </button>
            </div>

        </div>
    );
}
