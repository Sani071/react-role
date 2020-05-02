import React from 'react';
import { Link } from 'react-router-dom';

const LinkBtn = ({text, url, classNames}) => {
    return (
    <Link to={url} className={["link-btn", classNames ? classNames.join(" ") : null].join(" ")}>{text}</Link>
    );
}

export default LinkBtn;
