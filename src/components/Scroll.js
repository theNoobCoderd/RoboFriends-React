import React from 'react';

const Scroll = (props) => {

    return (
        <div style={{overflowY: 'scroll', height: '800px', borderTop: '2px solid lightblue', borderBottom: '2px solid lightblue'}}>
            {props.children}
        </div>
    );
}

export default Scroll;