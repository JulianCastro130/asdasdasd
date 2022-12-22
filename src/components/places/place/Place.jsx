import React from 'react'

export const Place = ({ username, id, name }) => {

    return (
        <div className='place'>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <p>{username}</p>
        </div>
    )
}