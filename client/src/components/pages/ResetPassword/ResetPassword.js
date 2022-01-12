import React from 'react'

import { withLayout } from "components/HOC";
import ResetPasswordForm from 'components/UI/ResetPasswordForm'

function ResetPassword() {

    return (
        <div>
            <ResetPasswordForm />
        </div>
    )
}

export default withLayout(ResetPassword);