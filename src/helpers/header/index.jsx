import './index.css';
import LogoDefault from '../../assets/icon_github.svg';
import LogoDark from '../../assets/icon_github_dark.svg';

import React from 'react';
import { Link } from 'react-router-dom';

export const Header = React.memo(({ dark, children }) => 
    <header id="header" className={dark && 'dark'}>
        <Link to="/">
            <img 
                alt="Logo" 
                width="45px" 
                height="45px"
                className="logo"
                src={dark ? LogoDefault : LogoDark} 
            />
        </Link>
        {children}
    </header>
);