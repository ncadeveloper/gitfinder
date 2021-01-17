import './index.css';

export const Breadcrumb = ({ page, path = '/' }) =>
    <nav id="breadcrumb">
        <span className="page">{page}</span>
        <ol className="path">
            <li>{path}</li>
        </ol>
    </nav>;