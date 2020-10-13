import React from 'react';
import './Lister.css';

const Lister = (props) => {
    return (
        <div id="lister-container">
            <img src={props.list_cover_image} alt="cover" width="300px" />
            <a href={props.uri}><h3>{props.list_name}</h3></a>
        </div>
    );
}

export default Lister;