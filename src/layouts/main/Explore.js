import React from 'react'

import Search from 'comps/SearchBar'
import MediaQuery from 'react-responsive'
import FollowCard from './sidebar/FollowCard'
import Users from 'features/users/UserSuggests'
import Heading from 'comps/Heading'
import { Route, Switch } from 'react-router-dom'
import { Figure } from 'react-bootstrap'

export default (props) => {

    return (<>
        <div className="header">
            {!props.noSearchBar &&
                <MediaQuery maxWidth={1020} >
                    <Search className="w-100 p-2" />
                </MediaQuery>}
        </div>
        <Switch>
            <Route path='/explore/users'>
                <Heading title="Users" />
                <Users noPop />
            </Route>
            <Route path='/'>
                {!props.noSuggestions && (
                    <MediaQuery maxWidth={992}>
                        <FollowCard noPop title='Follow more users to see their posts' length={4} />
                    </MediaQuery>
                )}
                {!props.compact && (
               <Figure.Image 
               src="/musicosred.jpg" 
               alt="Una red social dirigida a los musicos y amantes de la musica." 
               height={180} 
               className="rounded mx-auto d-block"
             />                 
                )}
            </Route>
        </Switch>
    </>)
}