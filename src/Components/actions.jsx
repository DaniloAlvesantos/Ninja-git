import React from 'react';
import './css/actions.css'

const Actions = ({getRepos,getStarred}) => (
    <div className='actions-container' >
        <button
        onClick={getRepos}
        >Repositorios:</button>
        <button
        onClick={getStarred}
        >Favoritados:</button>
    </div>
)

export default Actions