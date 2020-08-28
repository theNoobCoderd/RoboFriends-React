import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

    const cardList = robots.map((user, index) => {
        return <Card id={robots[index].id} name={robots[index].name} email={robots[index].email} />;
    });

    return(
    <div>
        {cardList}
    </div>
    );
}

export default CardList;