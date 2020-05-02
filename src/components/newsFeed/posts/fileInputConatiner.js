import React from 'react';
// import ImagePreview from './imagePreview';
export default function FileInputConatiner({ activeFileMenu, getFile }) {
    const fileInputHandler = (event) => {
        const file = event.target.files[0];
        const filePath = URL.createObjectURL(file);
        const fileType = file.type;
        const fileInfo = { filePath, fileType }
        getFile(fileInfo)
    };

    return (
        <div className={activeFileMenu ? "comment-input-file-input-conatiner activeFileMenu" : "comment-input-file-input-conatiner"}>

            <ul>
                <li> <i className="fa fa-map-marker-alt ml-1" aria-hidden="true"></i></li>
                {/* <li>  <i class="fa fa-file" aria-hidden="true"></i></li> */}
                {/* <li>  <i class="fa fa-music" aria-hidden="true"></i></li> */}
                {/* <li>  <img src={attach_icon} className="attach-file-icon text-info" alt="attach icon" /></li> */}
                <li className="pointer">
                    <input onChange={fileInputHandler} className="customFileInput pointer m-0 p-0" type="file" id="upload" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7989B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-paperclip"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                </li>
                <li> <i className="fa fa-camera" aria-hidden="true"></i></li>
            </ul>
        </div>
    )
}
