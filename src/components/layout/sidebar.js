import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

export default function Sidebar(props) {
    return (
        <div className="sidebar_wrapper">
            <div className="sidebar_wrapper_menuList">
                <Link className="rr-link" to="/users">
                    <div className="menu_item"> Users</div>
                </Link>

                <Link className="rr-link" to="/role">
                    <div className="menu_item">  Role</div>
                </Link>

                <Link className="rr-link" to="/permission">
                    <div className="menu_item">Permission </div>
                </Link>
            </div>
        </div>
    )
}
