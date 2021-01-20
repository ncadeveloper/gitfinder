import { useState } from 'react';

export const Pagination = ({ total, page, onClick }) => {
    const tpaginas = Math.ceil(total / 30);
    const [ index, setIndex ] = useState([0, 1, 2]);
    const paginas = [...Array(tpaginas)].map((_, i) => i + 1);

    const _next = () => {
        if(paginas[index[0]] + 3 <= tpaginas) {
            const _index = index.map(i => i + 1);
            setIndex(_index);
        }
    }

    const _prev = () => {
        if(paginas[index[0]] > 1) {
            const _index = index.map(i => i - 1);
            setIndex(_index);
        }
    }

    return(
        <div className="pagination">
            <span className="number" onClick={() => _prev()}>&lt;</span>
            <ol className="numbers">
                {index.map(n =>
                    paginas[n] &&
                    <li 
                        key={n}
                        onClick={() => onClick(paginas[n])}
                        className={`number ${page === paginas[n] && 'active'}`}
                    >
                        {paginas[n]}
                    </li>
                )}
            </ol>
            <span className="number" onClick={() => _next()}>&gt;</span>
        </div>
    )
}