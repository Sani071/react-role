import React, { useState, useEffect } from 'react'
import TagInput from './tag/tagInput';
import FeelingInput from './feeling/feelingInput';
import Location from './location/location';
import ModalBody from '../../../../common/ModalBody';
import Modal2header from './modal2header';

function FeatureContent({ activityTag, activity, setActivityTag, modal, clickHandler }) {
    const createMarkup = () => {
        switch (activityTag) {

            case "tag": {
                return <div><TagInput activity={ activity } clickHandler={ clickHandler } /></div>
            }

            case "act": {
                return <div><FeelingInput clickHandler={ clickHandler } setActivityTag={ setActivityTag } activity={ activity } /></div>
            }

            case "loc": {
                const data = { prependText: "Location", placeholder: "Where are you now?" }
                return <Location setActivityTag={ setActivityTag } activity={ activity } />
            }

            case "schedule": {
                const data = { prependText: "Schedule", placeholder: "When you want to make the post?" }
                // setActivity(data);
                // setActivityTag(activity)
                break;
            }
            case "priv": {
                const data = { prependText: "Privacy", placeholder: "Privacy?" }
                // setActivity(data);
                // setActivityTag(activity)
                break;
            }
            default:
                return <div></div>;
                break;
        };
    };
    // console.log(activity)
    return (
        <ModalBody
            classNames={ ["status-box-modal-2"] }
            modal={ modal }
            toggle={ clickHandler }>
            <div className="status-box-modal-2-content">
                <Modal2header clickHandler={ clickHandler } headerTitle={ activity.prependText } icon={ <i class="fas fa-user-tag"></i> } />
                { createMarkup() }
            </div>
        </ModalBody>
    )
}

export default FeatureContent;