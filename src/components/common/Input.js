import React from "react";
import classnames from "classnames";
const Input = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  id,
  onChange,
  disabled,
  onFocus,
  onBlur,
  round,
  labelTop,
  autocomplete,
  leftIcon,
  rightIcon,
  leftImage,
  passShowHandler,
  classNames
}) => {
  return (
    <div
      className={classnames(
        "form-group text-left custom-input",
        { "label-top": labelTop },
        { leftIcon: leftIcon }
      )}
    >
      <div
        className={[
          "inner-input",
          classNames ? classNames.join(" ") : null
        ].join(" ")}
      >
        {label && (
          <label htmlFor={name} className="">
            {label}
          </label>
        )}
        {leftIcon &&  (
          <div className="left-icon">
              {!leftImage && (
                <i class={leftIcon}></i>
              )}
              {leftImage && (
                <img src={leftImage} alt="leftImage"/>
              )}
            
          </div>
        )}
        <input
          type={type}
          id={id}
          className={classnames(
            "form-control",
            { "is-invalid": error },
            { round: round }
          )}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          autoComplete={autocomplete ? "off" : null}
        />
        {rightIcon && (
          <div className="right-icon" onClick={passShowHandler}>
            <i class={rightIcon}></i>
          </div>
        )}
      </div>

      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Input;
