import React from "react";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles
import "react-summernote/lang/summernote-ru-RU"; // you can import any other locale

// Import bootstrap(v3 or v4) dependencies
// import 'bootstrap/js/modal';
// import 'bootstrap/js/dropdown';
// import 'bootstrap/js/tooltip';
import "../../../node_modules/bootstrap/js/dist/modal";
import "../../../node_modules/bootstrap/js/dist/dropdown";
import "../../../node_modules/bootstrap/js/dist/tooltip";

import "bootstrap/dist/css/bootstrap.css";

export default function SummerNote({ onChange, value, classNames, height, placeholder }) {
  return (
    <div className={[classNames ? classNames.join(" ") : null].join(" ")}>
      <ReactSummernote
        value={value}
        options={{
          //   lang: 'ru-RU',
          height,
          placeholder,
          // dialogsInBody: true,
          toolbar: [
            // ['style', ['style']],
            // ['font', ['bold', 'underline', 'clear']],
            // ['fontname', ['fontname']],
            // ['para', ['ul', 'ol', 'paragraph']],
            // ['table', ['table']],
            // ['insert', ['link', 'picture', 'video']],
            // ['view', ['fullscreen', 'codeview']]
          ]
        }}
        onChange={onChange}
      />
    </div>
  );
}
