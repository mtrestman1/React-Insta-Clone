import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div>
            <header>
            <img src='instagram/src/iglogo.png' alt="" />
            <input type='text' placeholder='Search...' />
            <i className='fa fa-compass' />
            <i className='fa fa-heart' />
            <i className='fa fa-user-circle' />
            

            </header>
            

            
        </div>
    )
}

export default SearchBar;