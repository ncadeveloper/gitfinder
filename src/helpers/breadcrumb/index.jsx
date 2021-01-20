import './index.css';

import React from 'react';

export const Breadcrumb = React.memo(({ page, path = '/' }) =>
    <nav id="breadcrumb">
        <span className="page">{page}</span>
        <ol className="path">
            <li>{path}</li>
        </ol>
    </nav>
);