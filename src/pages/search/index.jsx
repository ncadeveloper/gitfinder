import './index.css';
import Routes from '../../constants/api';

import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState, createRef } from 'react'; 

import { Api } from '../../services';
import { Pagination } from './pagination'
import { Header, Footer, Breadcrumb, Card, Input } from '../../helpers';

const TYPE_DEFAULT = 'default';

export const Search = () => {
    const history = useHistory();
    const refInputSearch = createRef();
    const { type, query } = useParams();
    const isType = type === TYPE_DEFAULT;
    const [ page, setPage ] = useState(1);
    const [ search, setSearch ] = useState('');
    const [ isRepos, setIsRepos ] = useState(true);
    const [ repos, setRepos ] = useState({ items: [], total_count: 0 });

    const _getRepos = (page=1, repo=query) => {
        setPage(page);
        const route = isType
            ? Routes.SEARCH_USERS.replace('$query', `${repo}&page=${page}`)
            : Routes.SEARCH_REPOSITORIES.replace('$query', `languages=${repo}&page=${page}`);
        const api = new Api(route, 'GET');
        setIsRepos(true);
        api.exec()
            .then(({ data }) => setRepos(data))
            .finally(() => setIsRepos(false));
    }

    const onKeyUp = e => {
        setPage(1);
        if(e.keyCode === 13 && search) _getRepos(1, search);
        if(e.keyCode === 13 && !search) _getRepos(1, query);
    }

    useEffect(() => {
         _getRepos();
    }, []);
    
    return(
        <>
            <Header dark >
                <Input
                    value={search}
                    onKeyUp={onKeyUp}
                    ref={refInputSearch}
                    onChange={e => setSearch(e.target.value)}
                />
            </Header>
            <section id="search">
                <Breadcrumb page={`Search ${type}`} />
                <span className="result">Foram encontrados {repos.total_count} resultados.</span>
                <div className="container">
                    {
                        isRepos 
                            ? <span className="loader">loading...</span>
                            : 
                            <>
                            {
                                repos?.items.length > 0 
                                    ? repos?.items.map(repo => 
                                        <Card 
                                            key={repo.id}
                                            title={isType ? repo.login : repo.name}
                                            type={isType ? repo.type : repo.language}
                                            image={isType ? repo.avatar_url : repo.owner.avatar_url}
                                            onClick={() =>
                                                history.push(`/details/${isType ? repo.login : repos.owner.login}`)}
                                        />
                                    )
                                    : <span className="loader">404 Not found ;-;</span>
                            }
                            </>
                    }
                </div>
                <Pagination 
                    page={page}
                    total={repos.total_count}
                    onClick={page => { 
                        window.scrollTo(0, 0);
                        _getRepos(page, search ? search : query);
                    }}
                />
            </section>
            <Footer />
        </>
    );
}