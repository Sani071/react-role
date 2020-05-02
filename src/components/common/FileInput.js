import React from 'react';
import FileBase64 from 'react-file-base64';

const fileInput = props => (
    <a href="/" className={["profile-btn", "file-input-handler", props.classNames ? props.classNames.join(" ") : null].join(" ")}>
        {props.text ? props.text :null}
        {props.children}
        <FileBase64
        accept="image/*"
            multiple={true}
            onDone={props.onDone} />
    </a>

)

export default fileInput
