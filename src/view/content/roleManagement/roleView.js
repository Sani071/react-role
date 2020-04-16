import React, { useEffect } from 'react'
import AssignRole from '../../../components/modules/roleManagement/assignRole'
import RoleList from '../../../components/modules/roleManagement/roleList'

export default function RoleView(props) {

  useEffect(() => {
    props.getPath()
  }, [props])
  return (
    <div>
      <AssignRole routerProps={ props } />
      <RoleList />
    </div>
  )
}
