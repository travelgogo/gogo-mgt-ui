import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CallbackComponent } from "redux-oidc";
import { push } from "react-router-redux";
import userManager from "../../utilities/identityOidc";
import store from '../../redux/store'
import {storeUser} from 'redux/actions/authAction'
import { useNavigate } from "react-router-dom";

const SigninOidc = () => {
    //debugger;
    const navigate = useNavigate()
    useEffect(() => {
        const signinAsync = async () => {
            const res = await userManager.signinRedirectCallback();
            console.log(res)
            navigate('/')
        }
        signinAsync();
    },[])

    return (<div>Redirecting...</div>);
}

export default connect()(SigninOidc);

