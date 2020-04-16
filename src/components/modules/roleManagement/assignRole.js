import React, { useState, useEffect } from 'react';
import 'react-widgets/dist/css/react-widgets.css';
import DropdownList from 'react-widgets/lib/DropdownList';
import { useDispatch, useSelector } from "react-redux";
import { setRoleAction } from '../../../store/action/actionCreator';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Role(props) {
    const [role, setRole] = useState("");
    const [goBack, setBack] = useState(false);
    const [userName, setUserName] = useState("");
    const Users = useSelector(state => state.users)
    const UsersOption = Users.map(itm => itm.userName)
    const Roles = useSelector(state => state.role)
    const RoleOption = Roles.map(itm => itm.name)
    const dispatch = useDispatch();

    const submitHandler = () => {
        dispatch(setRoleAction({ userName, role }));
        setRole("");
        setUserName("");
        setTimeout(() => {
            toast.success("Assign role successfully")
        }, 100);

        setTimeout(() => {
            goBack && props.routerProps.history.goBack();
            setBack(false)
        }, 300);

    }

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const value = params.get("userName");
        if (value) {
            setUserName(value)
            setBack(true)
        }
    }, [])

    return (
        <div>
            <ToastContainer
                autoClose={ 4000 }
                position="bottom-left"
            />
            {/* Same as */ }
            <div className="d-flex justify-content-between mb-3">
                <h4>Assign Role to User</h4>
                {/* <button className="btn btn-secondary">Create New</button> */ }
            </div>
            <hr className="mb-3" />
            <div className="row">
                <div className="col-2">
                    <label>Select User</label>
                </div>
                <div >:</div>
                <div className="col-8">
                    <DropdownList
                        data={ UsersOption }
                        value={ userName }
                        placeholder="Select User"
                        onChange={ value => setUserName(value) }
                    />
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-2">
                    <label>Select Role</label>
                </div>
                <div >:</div>
                <div className="col-8">
                    <DropdownList
                        data={ RoleOption }
                        placeholder="Select Role"
                        value={ role }
                        onChange={ value => setRole(value) }
                    />
                </div>
            </div>
            <div className="text-center mt-3">
                <button disabled={ !userName || !role } onClick={ submitHandler } className="btn btn-info px-4">Save</button>
            </div>
        </div>
    )
}
