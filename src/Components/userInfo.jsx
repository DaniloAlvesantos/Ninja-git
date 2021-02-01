import React from 'react';

const UserInfo = ({userInfo}) => (
    <div className='UserInfo-container' >
       <img id='user-photo' src={userInfo.photo} alt='Foto de Usuario' />
        <a href={`https://api.github.com/${userInfo.login}`}>
            {userInfo.name}
        </a>
        
        <ul>
            <li>Repositorios:{userInfo.repos}</li>
            <li>Seguindores:{userInfo.followers}</li>
            <li>Seguindo:{userInfo.following}</li>
            <li>Chegou no GitHub em:{userInfo.created}</li>
        </ul>
    </div>
)

export default UserInfo