import React from 'react'
import { useSelector } from 'react-redux'
import { notifySelectors } from './notifySlice'
import { ListGroup } from 'react-bootstrap'
import Heading from 'comps/Heading'

export default props => {
    const notifications = useSelector(notifySelectors.selectAll)

    return (
        <>
            <Heading title="Notifications" btnProfile backButton />
            <ListGroup variant="flush" className="">
                {notifications.length ? null : (
                    <div className="message font-weight-bold">No notifications yet</div>
                )}
            </ListGroup>
        </>
    )
}