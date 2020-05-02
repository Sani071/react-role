import React from 'react'

export default function ImagePreview({ isUploaded, step, type, file }) {
    var typeSpan = null
    switch (type) {
        case "image": {
            typeSpan = ""
        }
            break;
        case "video": {
            typeSpan = <i className="fa fa-play" aria-hidden="true"></i>
        }
            break;
        case "audio": {
            typeSpan = <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.68359 0.683594V9.96359C6.21359 9.79359 5.71359 9.68359 5.18359 9.68359C2.69359 9.68359 0.683594 11.6936 0.683594 14.1836C0.683594 16.6736 2.69359 18.6836 5.18359 18.6836C7.49359 18.6836 9.38359 16.9336 9.63359 14.6836H9.68359V3.68359H13.6836V0.683594H6.68359Z" fill="white" />
            </svg>

        }
            break;
        default:
            break;
    }
    console.log(type)
    return (
        <div className="image-preview-box-wrapper-box" data-type={type}>
            {/* {file ? <img src={file} /> : <span className="image-preview-box-wrapper-percent">
                <span className="image-preview-box-wrapper-percent-amount">{isUploaded ? (type === "audio" ? <i className="fa fa-music" aria-hidden="true"></i> : <i className="fa fa-play" aria-hidden="true"></i>) : step + "%"}</span>
            </span>} */}

            {file ? type === "image" ? <img src={file} alt={type} /> : <span className="image-preview-box-wrapper-percent" style={{ opacity: ".8" }}> {typeSpan}</span> : ""}

            {/* {file ? (type === "image" ? <img src={file} /> : (type === "video" ? <video controls>
                <source src={file} type="video/mp4" />
            </video> : <img src={file} />)) : "not file"} */}

            <span className="image-preview-box-wrapper-box-close">x</span>
        </div >
    )
}
