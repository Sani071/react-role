import React, { useEffect } from "react";
import Authnav from "../common/AuthNav";
import { MDBAlert } from "mdbreact"
import {activeAccount} from "../../store/actions/userAction"
import { useDispatch, useSelector } from "react-redux"

const AccountActive = ({ history, match }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        let token = match.params.id;
        dispatch(activeAccount(token, history))
    }, []);

    const message = useSelector(state => state.error.userActiveAccountMessage)
    return (
        <React.Fragment>
            <Authnav />
            <h2>Account verifiing</h2>
            {message && (
                <MDBAlert color="danger" >
                    {message}
                </MDBAlert>
            )}
        </React.Fragment>
    );
};

export default AccountActive;
