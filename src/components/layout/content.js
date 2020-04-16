import React, { useState } from 'react';
import "./style.css";
import Routes from '../../routes';
import { Route } from 'react-router-dom';

export default function Content() {
    const [pathName, setPathName] = useState("");
    const getPath = () => {
        const path = window.location.pathname.split("/")[1];
        setPathName(path)
    }

    return (
        <div className="content_wrapper card shadow">
            <div className="card-header bg-info">
                <h4 className="text-center text-white">{ pathName.toUpperCase() } Management</h4>
            </div>
            <div className="card-body">
                { Routes.map((route, idx) => {
                    return route.component ? (
                        <Route
                            key={ idx }
                            path={ route.path }
                            exact={ true }
                            render={ props => <route.component getPath={ getPath } { ...props } /> }
                        />
                    ) : <h1>Loading....</h1>;
                }) }
            </div>

        </div>
    )
}
