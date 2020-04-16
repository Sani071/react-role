import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Table from '../../utils/table';
import { deleteRoleAction } from '../../../store/action/actionCreator';

export default function RoleList() {
    const Roles = useSelector(state => state.role);
    const dispatch =useDispatch();
    const deleteRole=(payload)=>{
        dispatch(deleteRoleAction(payload))
    };

    return (
        <div className="mt-3">
            <div className="d-flex justify-content-between mb-3">
                <h4>Roles and Permissions</h4>
                {/* <button className="btn btn-secondary">Create New</button> */}
            </div>
            <Table data={ Roles } th={ ["Role Name", "Permissions", "Action"] } td={ [ "name", "permission"] } param="permission" paramKey="name" onAction={deleteRole}/>
        </div>
    )
}
