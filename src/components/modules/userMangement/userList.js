import React, { useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";
import Table from '../../utils/table';
import { deleteUserAction } from '../../../store/action/actionCreator';

export default function UserList(props) {
    useEffect(() => {
        props.getPath()
    }, [props]);
    const Users = useSelector(state => state.users);
    const dispatch =useDispatch();
    const deleteUser=(payload)=>{
        dispatch(deleteUserAction(payload))
    };
    
    return (
        <div>
            <Table data={ Users } th={ ["Id", "User Name", "Role", "Action"] } td={ ["id", "userName", "role"] } param="role" paramKey="userName" onAction={deleteUser}/>
        </div>
    )
}
