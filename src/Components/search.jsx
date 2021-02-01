import React from 'react';
import PropTypes from 'prop-types'
import "./css/barra.css"
import {ReactComponent as SearchSVG} from '../img/search.svg'

const Search = ({handleSearch}) => (
    <div className='search' >
        <input 
        className='input-search'
        type='search'
        onKeyUp={handleSearch}
        placeholder='Digite um Nome de Usuario'
        />
        <SearchSVG className='searchSVG'/>
    </div>
)

Search.propTypes = {
    handleSearch:PropTypes.func.isRequired
}

export default Search