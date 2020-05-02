import React from 'react';
import { Link, withRouter } from "react-router-dom"
const AuthFooter = ({history}) => {
    return (
        <footer className="auth-footer">
            <div className="footer-top">
                <div className="roy-container">
                    <div className="footer-top-row">
                        <div className="footer-top-left">
                            <ul>

                                <li> <Link to="/"> About Us</Link> </li>
                                <li> <Link to="/"> User Agreement</Link> </li>
                                <li> <Link to="/"> Privacy Policy </Link> </li>
                                <li> <Link to="/"> Terms & Conditions</Link> </li>
                                <li> <Link to="/"> Copyright Policy </Link> </li>
                                <li> <Link to="/">  Community Guidelines</Link> </li>
                            </ul>

                        </div>
                        <div className="footer-top-right">
                            <p className="f-16"> <Link to={history.location.pathname}>Help  Center<i className="far fa-question-circle"></i>
                            </Link> </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer-bottom">
                <p> Roytter © {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}

export default withRouter(AuthFooter) ;
