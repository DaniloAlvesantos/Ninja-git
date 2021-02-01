import React from 'react';
import Repos from './repos';
import Search from './search';
import Actions from './actions';
import UserInfo from './userInfo';
import PropTypes from 'prop-types';

import './css/index.css'

const AppContent = ({userInfo,starred,repos,handleSearch,getRepos,getStarred}) => (
    <div className='container'>
        <div className='animation-right'>
            <Search  handleSearch={handleSearch} />
            
            {!!userInfo && 
            <UserInfo userInfo ={userInfo} 
            />
            }

            {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred}/>}

            <div className='repos'>
            {!!repos.length && <Repos
            className='repos'
            repos={repos}
            title='Repositorios:'
            />
            }

            {!!starred &&
            <Repos
            className='starred'
            repos={repos}
            link={starred}
            title='Favoritos'
            />
            }
            </div>
        </div>
    </div>   
)

AppContent.propTypes = {
    userInfo:PropTypes.object,
    handleSearch:PropTypes.func.isRequired,
    repos:PropTypes.array.isRequired
}

export default AppContent