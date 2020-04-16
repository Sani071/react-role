import React, { useState, useEffect } from 'react';
import 'react-widgets/dist/css/react-widgets.css';
import DropdownList from 'react-widgets/lib/DropdownList';
import { useDispatch, useSelector } from "react-redux";
import { setPermission2Role } from '../../../store/action/actionCreator';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./style.css"

export default function AssignPermission(props) {
    const [permission, setPermission] = useState([])
    const [goBack, setBack] = useState(false);
    const [role, setRole] = useState("")
    const [permissions, setPermissions] = useState([
        { value: "add", isChecked: false },
        { value: "edit", isChecked: false },
        { value: "view", isChecked: false },
        { value: "delete", isChecked: false },
        { value: "publish", isChecked: false },
        { value: "all", isChecked: false }
    ]);

    const Roles = useSelector(state => state.role)
    const RoleOption = Roles.map(itm => itm.name)

    const permissionHandler = e => {
        const { value, checked } = e.target
        permissions.forEach(itm => {
            if (value === "all") {
                if (checked) {
                    pushPermission(true)
                } else {
                    pushPermission(false)
                }
            } else if (itm.value === e.target.value) {
                itm.isChecked = checked;
                setTimeout(() => {
                    pushPermission(false);
                }, 100);
            }
        });

    };

    const pushPermission = (isAll) => {
        var permission = [];

        if (isAll) {
            for (let i = 0; i < permissions.length; i++) {
                const element = permissions[i];
                permission.push(element.value);
            }
        } else {
            for (let i = 0; i < permissions.length; i++) {
                const element = permissions[i];
                if (element.isChecked) {
                    permission.push(element.value);
                }
            }
        }

        setPermission(permission)
    };

    const dispatch = useDispatch();
    const submitHandler = () => {
        dispatch(setPermission2Role({ role, permission }));
        setRole("");
        setPermissions([
            { value: "add", isChecked: false },
            { value: "edit", isChecked: false },
            { value: "view", isChecked: false },
            { value: "delete", isChecked: false },
            { value: "publish", isChecked: false },
            { value: "all", isChecked: false }
        ])
        setPermission([])
        setRole("")
        setTimeout(() => {
            toast.success("Assign permission successfully")
        }, 100);
        setTimeout(() => {
            goBack && props.routerProps.history.goBack();
            setBack(false)
        }, 300);
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const value = params.get("name");
        if (value) {
            setRole(value)
            setBack(true)
            setTimeout(() => {
                const perms = Roles.filter(itm => {
                    return itm.name === value
                }).map(itm => itm.permission)
                setPermission(...perms)
            }, 200);
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
                <h4>Assign Permission to Role</h4>
                {/* <button className="btn btn-secondary">Create New</button> */ }
            </div>
            <hr className="mb-3" />
            <div className="row">
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

            <div className="row mt-3">
                <div className="col-2">
                    <label>Select Permission</label>
                </div>
                <div >:</div>
                <div className="col-8">
                    { permissions.map((itm, idx) => {
                        return <label key={idx} className="pointer mr-2">
                            <input
                                checked={ permission.includes(itm.value) ? true : false }
                                onChange={ e => permissionHandler(e) }
                                type="checkbox"
                                className="radio-button__input"
                                id="choice1-2"
                                required
                                value={ itm.value }
                            />
                            <span className="radio-button__controll"></span>
                            <span className="radio-button__label">
                                { itm.value }
                            </span>
                        </label>
                    }) }
                </div>
            </div>
            <div className="text-center mt-3">
                <button disabled={ !role || !permission.length } onClick={ submitHandler } className="btn btn-info px-4">Save</button>
            </div>
        </div>
    )
}
