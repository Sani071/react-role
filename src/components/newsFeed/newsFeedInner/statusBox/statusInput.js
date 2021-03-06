import React, { useEffect, useState, useRef } from 'react'
import ProfileThumb from '../../../common/ProfileThumb'
import SummerNote from '../../../common/SummerNote'
import smileIcon from "../../../../assets/images/profile/smile.svg"
import EmojiPicker from '../../../common/emojiPicker'

export default function StatusInput() {
    const [emojiPickerState, SetEmojiPicker] = useState(false);
    const [status, setStatus] = useState("");
    const ref = useRef(null);
    const emojiRef = useRef(null);
    const summerRef = useRef(null);

    useEffect(() => {
        document.addEventListener("mouseup", emojiPickerShowHandler);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mouseup", emojiPickerShowHandler);
        };
    }, [status, emojiPickerState])

    const emojiPickerShowHandler = (e) => {
        e.preventDefault()
        SetEmojiPicker(true);
        if (ref.current && ref.current.contains(e.target) && !emojiRef.current.contains(e.target)) {
            SetEmojiPicker(!emojiPickerState);
        } else if (emojiRef.current.contains(e.target)) {
            SetEmojiPicker(true);
        } else {
            SetEmojiPicker(false);
        }
    };

    const getEmoji = (emoji) => {
        setStatus(status + emoji.native)
    };
    // const setEmoji = (emoji) => {
    //     const textarea = summerRef
    //     const cursorPosition = textarea.selectionEnd
    //     console.log(cursorPosition)
    //     // const start = this.value.substring(0, textarea.selectionStart)
    //     // const end = this.value.substring(textarea.selectionStart)
    //     // const text = start + emoji.native + end
    //     // this.$emit('input', text)
    //     // textarea.focus()
    //     // this.$nextTick(() => {
    //     //     textarea.selectionEnd = cursorPosition + emoji.native.length
    //     // })
    // }
    // console.log(status)
    return (
        <div className="status-box-input">
            <div className="status-box-top-wrapper">
               
                <div ref={summerRef} className="status-input-field">
                    <SummerNote
                        placeholder='Hello Friend, How are you today?'
                        classNames={["status-input-field-editor-area"]}
                        value={status}
                        onChange={code => setStatus(code)}
                    />
                </div>
                <div ref={ref} style={{ zIndex: "5" }} className={emojiPickerState ? "status-box-emoji emoji-show pointer" : "status-box-emoji pointer"}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0C13.9718 0 18 3.90234 18 8.71875C18 13.5352 13.9718 17.4375 9 17.4375C4.02823 17.4375 0 13.5352 0 8.71875C0 3.90234 4.02823 0 9 0ZM9 15.75C13.0028 15.75 16.2581 12.5965 16.2581 8.71875C16.2581 4.84102 13.0028 1.6875 9 1.6875C4.99718 1.6875 1.74194 4.84102 1.74194 8.71875C1.74194 12.5965 4.99718 15.75 9 15.75ZM5.16774 10.4273C6.10766 10.7191 7.50484 10.8879 9 10.8879C10.4952 10.8879 11.8887 10.7191 12.8323 10.4273C13.1915 10.3184 13.5363 10.6172 13.4746 10.9652C13.1879 12.6211 10.8871 13.7777 9 13.7777C7.1129 13.7777 4.81573 12.6211 4.5254 10.9652C4.46734 10.6207 4.80484 10.3184 5.16774 10.4273ZM11.9032 8.15625C11.2609 8.15625 10.7419 7.65352 10.7419 7.03125C10.7419 6.40898 11.2609 5.90625 11.9032 5.90625C12.5456 5.90625 13.0645 6.40898 13.0645 7.03125C13.0645 7.65352 12.5456 8.15625 11.9032 8.15625ZM6.09677 8.15625C5.45444 8.15625 4.93548 7.65352 4.93548 7.03125C4.93548 6.40898 5.45444 5.90625 6.09677 5.90625C6.73911 5.90625 7.25807 6.40898 7.25807 7.03125C7.25807 7.65352 6.73911 8.15625 6.09677 8.15625Z" fill="#7989B1" />
                    </svg>
                </div>
            </div>
            <div ref={emojiRef} className="fff">
                <EmojiPicker getEmoji={getEmoji} isShow={emojiPickerState} />
            </div>

        </div>
    )
}
