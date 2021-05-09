import React from 'react';

const roomate = (props) => {
    return (
        <tr width="50%">
           <td>{props.person}</td>
           <td>{props.age}</td>
           <td><button onClick={props.deleteEvent}>Delete</button></td>
        </tr>
    )
};

export default roomate;