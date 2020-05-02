import React, { useState } from 'react'
import ImagePreview from './file'
import CommentFileUploadZone from '../../../posts/commentFileUploadZone'

export default function Files({ files, getFile, removeFile }) {

    // console.log(files)
    return (
        <div className="stb-file-previrew-area">
            <div className="stb-file-previrew-area-items-wrapper">
                {files.map(((itm, idx) => {
                    // console.log(itm)
                    var { id } = itm
                    return <div key={id}>
                        <ImagePreview id={id} removeFile={removeFile} type={itm.fileType} file={itm.filePath} isUploaded={id % 2 == 0 && true} step={itm * id * 2} />
                    </div>
                }))}
                <div className={files.length > 0 ? "" : "d-none"}>
                    <CommentFileUploadZone getFile={getFile} />
                </div>
            </div>
        </div>
    )
}
