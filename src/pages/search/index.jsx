import './index.css';
import Routes from '../../constants/api';

import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState, createRef } from 'react'; 

import { Api } from '../../services';
import { Header, Footer, Breadcrumb, Card, Input } from '../../helpers';

export const Search = () => {
    const history = useHistory();
    const refInputSearch = createRef();
    const { query } = useParams();
    const [ repos, setRepos ] = useState([]);
    const [ isRepos, setIsRepos ] = useState(true);

    const _getRepos = () => {
        const api = new Api(Routes.SEARCH_USERS.replace('$query', query), 'GET');
        api.exec()
            .then(({ data }) => {
                setRepos(data);
            })
            .finally(() => {
                setIsRepos(false);
            });
    }

    useEffect(() => {
         _getRepos();
    }, [query]);

    return(
        <>
            <Header dark >
                <Input 
                    ref={refInputSearch}
                />
            </Header>
            <section id="search">
                <Breadcrumb page="Search" />
                <div className="container">
                    {
                        isRepos 
                            ? <span className="loader">loading...</span>
                            : 
                            <>
                            {repos.items.map(repo => 
                                <Card 
                                    key={repo.id}
                                    title={repo.login}
                                    type={repo.type}
                                    image={repo.avatar_url}
                                    onClick={() => console.log(repo)}
                                />   
                            )}
                            </>
                    }
                </div>
            </section>
            <Footer />
        </>
    );
}