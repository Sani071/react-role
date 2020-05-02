import React from "react"; import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

export default function EmojiPicker({ isShow, getEmoji }) {
    // const [emojiPickerState, SetEmojiPicker] = useState(false);
    // const [message, SetMessage] = useState("");

    return (
        <div className={isShow ? "input-emoji-picker" : "d-none"}>
            <Picker
                set="apple"
                darkMode={false}
                title="Pick your emoji…"
                emoji="point_up"
                showPreview={false}
                showSkinTones={false}
                onSelect={emoji => getEmoji(emoji)}
            // onLeave={f=>console.log(f)}
            />
        </div>
    )
}
