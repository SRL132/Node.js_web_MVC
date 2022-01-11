import React from 'react'

import { withLayout } from "components/HOC";
import LoginForm from 'components/UI/LoginForm'

function Login() {
    return (
        <div>
            <LoginForm />
        </div>
    )
}

export default withLayout(Login);
