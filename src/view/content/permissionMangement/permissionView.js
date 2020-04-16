import React, { useEffect } from 'react'
import AssignPermission from '../../../components/modules/permissionManagement/assignPermission'
import PermissionList from '../../../components/modules/permissionManagement/permissionList'

export default function RoleView(props) {
    useEffect(() => {
        props.getPath()
    }, [props])
    return (
        <div>
            <AssignPermission routerProps={ props } />
            <PermissionList />
        </div>
    )
}
