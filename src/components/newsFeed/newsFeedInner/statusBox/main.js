import React, { useState } from 'react'
import ModalBody from '../../../common/ModalBody';
import BottomArea from './bottom';
import Top from './top';
import TopArea from './topArea';

export default function Main({ modal, toggle }) {
    const [file, setFile] = useState([".nj"])
    const [feeling] = useState();
    return (
        <div>
            <ModalBody
                modal={ modal }
                toggle={ toggle }
                header={ false }
                classNames={ ["status-box-modal"] }
                title="Update Profile Picture"
            >
                <div className="status-box-modal-wrapper">
                    <div className="status-box-top">
                        <TopArea selectedFeeling={ feeling } />
                        <Top />
                    </div>
                    <div >
                        <BottomArea />
                    </div>
                    <hr className="p-0 m-0" />
                    <div>
                        <button className="status-post-btn">Post</button>
                    </div>
                </div>
            </ModalBody>
        </div>
    )
}
