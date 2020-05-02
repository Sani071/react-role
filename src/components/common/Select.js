import React from 'react'
import classnames from "classnames";
export default function Select({ leftIcon, withArrow, placeholder, options, onChange, error, name, value }) {
    return (
        <div className="custom-select-area">
            <div className={["custom-select-area-inner", leftIcon ? 'leftIcon' : null].join(" ")}>
                {leftIcon && (
                    <div className="left-icon">
                        <i class={leftIcon}></i>
                    </div>

                )}
                <select className={classnames(
                    "custom-select custom-select-sm",
                    { "is-invalid": error },
                    {"with-arrow": withArrow}
                )} onChange={onChange} name={name} >
                    <option selected disabled> {placeholder ? placeholder : 'Open this select menu'} </option>

                    {!options && (
                        <React.Fragment>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </React.Fragment>
                    )}

                    {options && options.map(op => {
                        return (
                            <option value={op} selected={op === value ? true : false}>{op}</option>
                        )
                    })}

                </select>
                {/* <i class="fas fa-chevron-down"></i> */}
            </div>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>

    )
}
