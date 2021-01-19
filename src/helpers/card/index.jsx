import './index.css';

import React from 'react';

export const Card = React.memo(({ image, title, type, onClick }) => 
    <div className="card">
        <img className="card__image" src={image} alt="Profile" />
        <h3 className="card__title">{title}</h3>
        <h4 className="card__subtitle">{type}</h4>
        <a className="card__link">ver mais...</a>
        <div className="card__background" onClick={onClick} />
    </div>
);