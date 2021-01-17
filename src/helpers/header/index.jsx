import './index.css';
import LogoDefault from '../../assets/icon_github.svg';
import LogoDark from '../../assets/icon_github_dark.svg';

import React from 'react';

export const Header = React.memo(({ dark, children }) => 
    <header id="header" className={dark && 'dark'}>
        <img 
            alt="Logo" 
            width="45px" 
            height="45px"
            className="logo"
            src={dark ? LogoDefault : LogoDark} 
        />
        {children}
    </header>
);