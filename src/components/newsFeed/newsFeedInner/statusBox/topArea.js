import React from 'react'
import ProfileThumb from '../../../common/ProfileThumb'
import Tags from './postData/tags'
import { connect } from 'react-redux'

function TopArea({ selectedTags, selectedFeeling }) {
    // const selectedTags = useSelector(state => state.createPostData.tagedFriends);


    return (
        <div className="pl-2 stb-toparea">
            {/* <div className="stb-toparea-profile">
                <ProfileThumb isHideen={ true } />
            </div> */}

            <div className="stb-toparea-post-data ml-2">
                <span className="mr-1"><ProfileThumb isHideen={ true } /></span>
                <span className="stb-toparea-post-data-host">Rosemary Flores </span>
                <span>
                    { selectedFeeling && <><span className="mx-1 stb-toparea-post-data-tik">is </span>
                        <span className="stb-toparea-post-data-flng">Feeling</span>
                        <span>
                            <span className="stb-toparea-post-data-flng ttmx5">{ selectedFeeling.icon }</span>
                            <span className="stb-toparea-post-data-flng">{ selectedFeeling.text }</span>
                        </span></> }
                </span>
                <span >
                    { selectedTags.length ? <><span className="mx-1 stb-toparea-post-data-tik">with</span>
                        <span className="">
                            { selectedTags.map((itm, id) => {
                                return <span key={ itm.id } className="tile">
                                    <ProfileThumb isHideen={ true } classNames={ ['tile-thumb'] } />
                                    <span>{ itm.name }</span>
                                    {/* <i onClick={ () => { removeFriend(itm.id) } } className="tile__icon fa fa-times" ></i> */ }
                                </span>
                            }) }

                        </span></> : <></> }
                </span>
                {/* <Tags selectedTags={ selectedTags } /> */ }
            </div>

        </div>
    )
};

const mapStateToProps = state => ({
    selectedTags: state.createPostData.tagedFriends
})

export default connect(mapStateToProps, {})(TopArea)
