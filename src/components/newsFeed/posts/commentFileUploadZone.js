import React from 'react'
import uuid from 'uuid';

export default function CommentFileUploadZone({ getFile }) {
    const fileInputHandler = (event) => {
        // const f = event.target.files;
        var g = []
        var fileArray = [];
        const f = event.target.files;
        g.push(f)
        for (let i = 0; i < g[0].length; i++) {
            var file = g[0][i]
            var filePath = URL.createObjectURL(file);
            var fileType = file.type.split("/")[0];
            var id = uuid.v1();
            var fileInfo = { filePath, fileType, id }
            fileArray.push(fileInfo)
            getFile(fileArray)
        }
        g = []
        fileArray = [];

    };
    return (
        <div title="Add new" className="comment-filw-upload-zone-box">
            <span className="comment-filw-upload-zone-box-middle">+</span>
            <input onChange={fileInputHandler} className="customFileInputZone pointer m-0 p-0" multiple={true} type="file" id="upload" />
        </div>
    )
}
