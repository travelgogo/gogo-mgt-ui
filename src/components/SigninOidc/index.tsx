import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signinRedirectCallback } from "services/identityService";

const SigninOidc = () => {
    //debugger;
    const navigate = useNavigate()
    useEffect(() => {
        const signinAsync = async () => {
            await signinRedirectCallback()
            navigate('/')
        }
        signinAsync();
    },[])

    return (<div>Redirecting...</div>);
}

export default connect()(SigninOidc);

