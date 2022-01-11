import React from 'react'

import { withLayout } from "components/HOC";
import UpdateProfileForm from 'components/UI/UpdateProfileForm'

function UpdateProfile() {
    return (
        <div>
            <UpdateProfileForm />
        </div>
    )
}

export default withLayout(UpdateProfile);
