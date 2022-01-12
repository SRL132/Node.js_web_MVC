import React from 'react'

import { withLayout } from "components/HOC";
import RegisterForm from 'components/UI/RegisterForm'

function Register() {
    return (
        <div>
            <RegisterForm />
        </div>
    )
}

export default withLayout(Register);
