import React, { useState } from 'react';
// import { MDBInput } from "mdbreact";
import ProfileThumb from "../../common/ProfileThumb";
import classnames from "classnames";
import smile_emoji from "../../../assets/images/newsfeed/comment-inputsimle-emoji.png";
import plus_emoji from "../../../assets/images/newsfeed/comment-plusemoji.png";
import cross_emoji from "../../../assets/images/newsfeed/comment-cros-emoji.png"
import FileInputConatiner from './fileInputConatiner';
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";
import "react-summernote/lang/summernote-ru-RU";
import CustomTextArea from './customeTextArea';
import ImagePreview from './imagePreview';
import CommentFileUploadZone from './commentFileUploadZone';
// const array = [1, 2, 3, 4, 5, 6]

export default function SelfCommentInput() {
    const [cmntMsg, setCmntMsg] = useState("")
    const [isShow, setShow] = useState(false);
    const [fileMenu, setFileMenu] = useState(false);
    const [file, setFile] = useState([".nj"])

    const onchangeHandler = (value) => {
        setCmntMsg(value)
        setTimeout(() => {
            // console.log(cmntMsg)
            cmntMsg ? setShow(true) : setShow(false)
        }, 500);
    }

    setTimeout(() => {
        cmntMsg ? setShow(true) : setShow(false)
    }, 500);

    const setFileHandler = (fileInfo) => {
        console.log(fileInfo)
        setFile([...file, { ...fileInfo }])
    }

    return (
        <div className="self-comment-wrapper">
            {/* <img src={file || "https://miro.medium.com/max/1402/1*0Drbr7Adv_qbxuwuqX2jkw.jpeg"} /> */}
            <div className="self-comment-wrapper-top d-flex">
                <ProfileThumb isHideen={true} imgClassNames={["self-comment-wrapper-flex-profile-thumb"]} />
                <CustomTextArea changeHandler={onchangeHandler} />
            </div>

            <div className="file-previrew-area">
                <div className="file-previrew-area-items-wrapper">
                    {file.map(((itm, id) => {
                        // console.log(itm)
                        return <div key={id}>
                            <ImagePreview type={itm.fileType} file={itm.filePath} isUploaded={id % 2 == 0 && true} step={itm * id * 2} />
                        </div>
                    }))}
                    <div className={file.length > 0 ? "" : "d-none"}>
                        <CommentFileUploadZone getFile={setFileHandler} />
                    </div>
                </div>
            </div>

            <div className="self-comment-wrapper-bottom">
                <div className="input-action-wrapper">
                    <span className="emoji-icon-action pointer">
                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.49971 1.716C12.4559 1.716 15.6756 4.9357 15.6756 8.89193C15.6756 12.8482 12.4559 16.0679 8.49971 16.0679C4.54349 16.0679 1.32379 12.8482 1.32379 8.89193C1.32379 4.9357 4.54349 1.716 8.49971 1.716ZM8.49971 0.558594C3.89113 0.558594 0.166382 4.28334 0.166382 8.89193C0.166382 13.5005 3.89113 17.2253 8.49971 17.2253C13.1083 17.2253 16.833 13.5005 16.833 8.89193C16.833 4.28334 13.1083 0.558594 8.49971 0.558594Z" fill="#42588F" />
                            <path d="M8.50386 14.1942C5.57878 14.1942 3.24292 11.8162 3.24292 8.87009V8.44922H13.7648V8.87009C13.7648 11.8162 11.4289 14.1942 8.50386 14.1942ZM3.83215 9.10158C4.0005 11.6268 6.0207 13.4787 8.50386 13.4787C10.987 13.4787 13.0072 11.6268 13.1756 9.10158H3.83215Z" fill="#42588F" />
                            <path d="M5.17952 7.23038C5.64441 7.23038 6.02127 6.85351 6.02127 6.38863C6.02127 5.92374 5.64441 5.54688 5.17952 5.54688C4.71463 5.54688 4.33777 5.92374 4.33777 6.38863C4.33777 6.85351 4.71463 7.23038 5.17952 7.23038Z" fill="#42588F" />
                            <path d="M11.8939 7.23038C12.3588 7.23038 12.7356 6.85351 12.7356 6.38863C12.7356 5.92374 12.3588 5.54688 11.8939 5.54688C11.429 5.54688 11.0521 5.92374 11.0521 6.38863C11.0521 6.85351 11.429 7.23038 11.8939 7.23038Z" fill="#42588F" />
                        </svg>

                    </span>
                    <span onClick={() => { setFileMenu(!fileMenu) }} className={fileMenu ? "file-action-icon pointer openAni" : "file-action-icon pointer closeAni"}>
                        {fileMenu ? <img src={cross_emoji} alt="smile-amoji" /> : <img src={plus_emoji} alt="smile-amoji" />}
                    </span>
                    <div>
                        <FileInputConatiner getFile={setFileHandler} activeFileMenu={fileMenu} />
                    </div>
                </div>
            </div>
            <div className="self-comment-wrapper-send-area">
                <span title="Send Comment" className={classnames('send-hidden', { 'active': isShow })}>
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </span>
            </div>
        </div>
    )
}
