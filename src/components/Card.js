import React from 'react';

const Card = (props) => {

    const {name, email, id} = props;

    return(
        <div className='bg-light-blue dib br3 pa2 ma2 grow'>
            <img src={`https://robohash.org/${id}?200*200`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;