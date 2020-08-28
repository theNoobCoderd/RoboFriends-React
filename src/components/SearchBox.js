import React from 'react';

const SearchBox = ({searchEvent}) => {

    return (
        <div className='pa2'>
            <input className='pa3 ba b--light-blue bg-lightest-blue' type='search' placeholder='search robots' onChange={searchEvent}/>
        </div>
    );
}

export default SearchBox;