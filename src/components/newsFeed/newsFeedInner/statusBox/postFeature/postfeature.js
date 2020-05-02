import React, { useState, useEffect } from 'react'
// import PostFeatureInput from './tag/tagInput'
import FeatureContent from './featureContent';

export default function PostFeature() {
    const [activity, setActivity] = useState({ prependText: "With", placeholder: "Who were with you?" });
    const [activityTag, setActivityTag] = useState("");
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState(false)
    const modalHandler = () => {
        setModal(!modal);
    }

    const setData = (activityParam) => {
        if (activityTag === activityParam) {
            setActivityTag(activityParam);
        } else {
            switch (activityParam) {
                case "tag": {
                    const data = { prependText: "Tag", placeholder: "Who were with you?" }
                    setActivity(data);
                    setActivityTag(activityParam)
                    break;
                }

                case "act": {
                    const data = { prependText: "How are you feeling?", placeholder: "What are you doing? " }
                    setActivity(data);
                    setActivityTag(activityParam)
                    break;
                }


                case "loc": {
                    const data = { prependText: "Location", placeholder: "Where are you now?" }
                    setActivity(data);
                    setActivityTag(activityParam)
                    break;
                }

                case "schedule": {
                    const data = { prependText: "Schedule", placeholder: "When you want to make the post?" }
                    setActivity(data);
                    setActivityTag(activityParam)
                    break;
                }
                case "priv": {
                    const data = { prependText: "Privacy", placeholder: "Privacy?" }
                    setActivity(data);
                    setActivityTag(activityParam)
                    break;
                }
                default:
                    break;
            };
        }
    }

    useEffect(() => {
        if (activityTag) {
            setShow(true)
            setModal(true)
        } else {
            setShow(false)
        }
    }, [activityTag]);

    useEffect(() => {
        if (!modal) {
            setActivityTag("")
        }
    }, [modal])

    return (
        <div className="mt-3 mb-3">
            <div className="post-feature">
                <button onClick={ (e) => { setData("tag") } } className={ activityTag === "tag" ? "btn " : "btn" }>
                    <span>
                        <i class="fa fa-user-tag    "></i>
                    </span>
                    <span>Tag</span>
                </button>

                <button onClick={ (e) => { setData("act") } } className={ activityTag === "act" ? "btn " : "btn" }>
                    <span>
                        <i class="fas fa-grin"></i>
                    </span>
                    <span>Feelings </span>
                </button>

                <button onClick={ (e) => { setData("loc") } } className={ activityTag === "loc" ? "btn " : "btn" }>
                    <span>
                        <i class="fas fa-map-marker-alt    "></i>
                    </span>
                    <span>Location</span>
                </button>

                <button onClick={ (e) => { setData("schedule") } } className={ activityTag === "schedule" ? "btn " : "btn" }>
                    <span>
                        <i class="fas fa-calendar-alt    "></i>
                    </span>
                    <span>Schedule</span>
                </button>

                <button onClick={ (e) => { setData("priv") } } className={ activityTag === "priv" ? "btn " : "btn" }>
                    <span>
                        <i class="fas fa-lock" aria-hidden="true"></i>
                    </span>
                    <span>Privacy</span>
                </button>

            </div>
            <div className={ show ? "mt-3" : "d-none" }>
                <div> <FeatureContent clickHandler={ modalHandler } modal={ modal } setActivityTag={ setActivityTag } activityTag={ activityTag } activity={ activity } /></div>
            </div>
        </div>
    )
}
