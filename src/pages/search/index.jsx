import './index.css';
import Routes from '../../constants/api';

import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react'; 

import { Api } from '../../services';
import { Header, Footer, Breadcrumb, Card } from '../../helpers';

export const Search = () => {
    const history = useHistory();
    const { query } = useParams();
    const [ repos, setRepos ] = useState([]);
    const [ isRepos, setIsRepos ] = useState(true);

    const _getRepos = () => {
        const api = new Api(Routes.SEARCH_USERS.replace('$query', query), 'GET');
        api.exec()
            .then(({ data }) => {
                setRepos(data);
            })
            .catch(err => {
                
            })
            .finally(() => {
                setIsRepos(false);
            });
    }

    useEffect(() => {
         _getRepos();
    }, [query]);
    console.log(repos);
    return(
        <>
            <Header dark />
            <section id="search">
                <Breadcrumb page="Search" />
                <div className="container">
                    {
                        isRepos 
                            ? <span>loading...</span>
                            : 
                            <>
                            {repos.items.map(repo => 
                                <Card 
                                    key={repo.id}
                                    title={repo.login}
                                    image={repo.avatar_url}
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