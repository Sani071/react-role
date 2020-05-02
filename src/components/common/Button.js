import React from 'react';

const Button = ({text, type, classNames, disabled, onClick}) => {
    return (
    <button className={["auth-btn", classNames ? classNames.join(" ") : null].join(" ")} type={type} onClick={onClick} disabled={disabled}>{text}</button>
    );
}

export default Button;
