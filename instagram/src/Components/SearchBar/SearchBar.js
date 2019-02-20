import React from 'react';
import './SearchBar.css';
import iglogo from './iglogo.png';

const SearchBar = props => {
    return (
            <div className='searchbar'>
            
            
            <img src={iglogo} alt='' className='iglogo' />
            <form>
            <input type='text' placeholder='Search' />
            </form>
            
            <i className='fa fa-compass' />
            <i className='fa fa-heart' />
            <i className='fa fa-user-circle' />
           
            </div>
    )
}

export default SearchBar;