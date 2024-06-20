import React from 'react'
import Search from 'comps/SearchBar'
import FollowCard from './FollowCard'
import TrendingCard from './TrendingCard'
import { Col } from 'react-bootstrap'

import { useLocation } from 'react-router-dom'

function Sidebar() {
    const location = useLocation()
    return (
        <Col>
            <Search className="sticky-top my-2" />

            {!(location.pathname === '/explore/users') ? (
                <FollowCard compact className="my-3" length={5} title="Who to follow" />
            ) : undefined}
            {/* <br /> */}
            {!(location.pathname === '/explore') ? (
                <TrendingCard className="my-3" title="Trends for you" />
            ) : undefined}
            <footer className="m-2 mt-3 overflow-hidden">
                <small>
                    <a
                        className="text-muted text-dark text-truncate d-block"
                    >
                        La mejor red social para musicos.
                    </a>
                </small>
                <p className="text-black font-weight-bold mb-0 mt-1">
                    <a >
                        EcoMelodies
                    </a>
                </p>
            </footer>
        </Col>
    )
}

export default Sidebar
