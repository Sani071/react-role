import React from 'react';
import "./style.css";
import { loginAction } from '../../store/action/actionCreator';
import { useDispatch } from "react-redux";

export default function Navbar() {
    const dispatch = useDispatch();

    return (
        <div className="navbar_wrapper">
            <div>
                <h1>
                    React Role App v1
            </h1>
                <h3 onClick={ e => dispatch(loginAction(false)) }>
                    Logout
            </h3>
            </div>

        </div>
    )
}
