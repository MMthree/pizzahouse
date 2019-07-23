import React from 'react'

const menu = ({ match }) => {
    return (
        <div>
            <h1>{match.params.food}</h1>
        </div>
    )
}

export default menu;
