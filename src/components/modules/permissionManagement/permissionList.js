import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Table from '../../utils/table';
import { deletePermissionAction } from '../../../store/action/actionCreator';

export default function PermissionList() {
    const Permissions = useSelector(state => state.permission);
    const dispatch =useDispatch();
    const deletePermission=(payload)=>{
        dispatch(deletePermissionAction(payload))
    };
    return (
        <div className="mt-3">
            <div className="d-flex justify-content-between mb-3">
                <h4>Permissions Management</h4>
                {/* <button className="btn btn-secondary">Create New</button> */}
            </div>
            <Table data={ Permissions } th={ ["Permission Name", "Action"] } param="permission" hideDelete={true} onAction={deletePermission}/>
        </div>
    )
}
