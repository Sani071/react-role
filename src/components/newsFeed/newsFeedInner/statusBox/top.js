import React, { useState } from 'react'
import StatusInput from './statusInput'
import Files from './imagePreview/files'
import ToolNav from './toolNav'
// import CommentFileUploadZone from '../../posts/commentFileUploadZone'
//"", "", "", "", "", "", "", "", ""
export default function Top() {
    const [files, setFile] = useState([])

    const setFileHandler = (fileArg) => {
        // console.log(files)
        setFile([...files, ...fileArg])
    };

    const removeFile = (id) => {
        const itms = [...files];
        const filteredItms = itms.filter(itm => {
            console.log(id)
            return itm.id !== id
        })
        // console.log(filteredItms)
        setFile([...filteredItms])
    };

    return (
        <div>
            <StatusInput />
            <div className={files.length > 0 ? "statusbox-top-bottom-wrapper" : "d-none"}>
                <div className="d-flex">
                    <Files getFile={setFileHandler} removeFile={removeFile} files={files} />
                </div>

            </div>
            <ToolNav getFile={setFileHandler} />
        </div>
    )
}
