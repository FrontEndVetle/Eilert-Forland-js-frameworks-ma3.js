import React from 'react';
import Heading from '../layout/Heading';
import LoginForm from '../layout/LoginForm'

export function Login(){
    return (
        <div>
            <Heading content="Login"></Heading>
            <LoginForm></LoginForm>
        </div>
    )
}

export default Login;