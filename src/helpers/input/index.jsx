import './index.css';
import IconSearch from '../../assets/icon_search.svg';

import React from 'react';

export const Input = React.forwardRef((props, ref) => 
    <div className="search__border" data-aos="zoom-in">
        <img className="search__image" src={IconSearch} alt="Search" />
        <input 
            ref={ref}
            type="text"  
            value={props.search}
            onKeyUp={props.onKeyUp}
            onChange={props.onChange}
            className="search__input"
        />
    </div>
)