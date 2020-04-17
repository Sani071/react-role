import React, { useState } from 'react';
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from '../../store/action/actionCreator';
import { ToastContainer, toast } from 'react-toastify';

function LoginPage() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const Users = useSelector(state => state.users);

    const onSubmitHandler = () => {
        if (userName && password) {
            const isValid = Users.filter(itm => {
                return itm.userName === userName && itm.password === password
            })
            if (isValid.length === 1) {
                dispatch(loginAction(true))
            } else {
                dispatch(loginAction(false))
                toast.error("Invalid Credentials! Try agin")
            }
        }
    }

    return (
        <div className="card border-0 loginContainer">
            <ToastContainer
                autoClose={ 4000 }
                position="bottom-left"
            />
            <div className="bgLogin"></div>
            <div className="card-body ">
                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8 ">
                        <div className="login-box p-2">
                            <div className="col-lg-12 login-title">
                                React Role App v1
                            </div>

                            <div className="col-lg-12 login-form">
                                <div className="col-lg-12 login-form">
                                    <form>
                                        <div className="form-group">
                                            <label className="form-control-label">User Name</label>
                                            <input
                                                value={ userName }
                                                onChange={ e => setUserName(e.target.value) }
                                                name="userName"
                                                type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-control-label">PASSWORD</label>
                                            <input
                                                value={ password }
                                                onChange={ e => setPassword(e.target.value) }
                                                name="password"
                                                type="password" className="form-control" />
                                        </div>

                                        <div className="col-lg-12 loginbttm">
                                            <div className="col-lg-6 login-btn login-text">

                                            </div>
                                            <div className="col-lg-6 login-btn text-center login-button">
                                                <button
                                                    onClick={ onSubmitHandler }
                                                    type="button" className="btn btn-outline-primary text-center border-primary border">LOGIN</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(LoginPage)