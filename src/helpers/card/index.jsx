import './index.css';

import React from 'react';

export const Card = React.memo(({ image, title }) => 
    <div className="card">
        <img className="card__image" src={image} alt="Profile" />
        <h3 className="card__title">{title}</h3>
        <a className="card__link">ver mais...</a>
        <div className="card__background" />
    </div>
);