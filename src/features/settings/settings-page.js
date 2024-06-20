import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Profile from './profile-modal'
import Heading from 'comps/Heading'

export default props => {
    return (<>
        <Switch>
            <Route path='/settings/profile' component={Profile} />
        </Switch>
        <Heading title='Settings' btnProfile backButton />

    </>)
}