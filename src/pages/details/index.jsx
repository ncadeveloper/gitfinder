import './index.css';
import Routes from '../../constants/api';

import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Api } from '../../services';
import { Header, Footer, Breadcrumb } from '../../helpers';

export const Details = () => {
    const { repo } = useParams();
    const [ details, setDetails ] = useState({});
    const [ repos, setRepos ] = useState([]);

    const _getDetails = () => {
        const api = new Api(Routes.USER.replace('$name', repo), 'GET');
        api.exec()
            .then(({ data }) => setDetails(data));
    }

    const _getRepos = () => {
        const api = new Api(Routes.USER_REPOS.replace('$name', repo), 'GET');
        api.exec()
            .then(({ data }) => setRepos(data));
    }

    useEffect(() => {
        _getRepos();
        _getDetails();
    }, []);

    console.log(details, repos);
    return(
        <>
            <Header dark />
            <section id="details">
                <Breadcrumb page="Details" />
                <div className="profile">
                    <img className="profile__image" src={details?.avatar_url} alt="Profile"/>
                    <div className="profile__info">
                        <p>{details?.name}</p>
                        <p><strong>Bio: </strong>{details?.bio ?? '-'}</p>
                        <p><strong>Blog: </strong>{details?.blog ?? '-'}</p>
                    </div>
                    <div className="profile__info">
                        <p>Have {details?.followers ?? 0} followers</p>
                        <p><strong>Company: </strong>{details?.company ?? '-'}</p>
                        <p><strong>Location: </strong>{details?.location ?? '-'}</p>
                    </div>
                </div>
                <div className="repos">
                    {repos.map(repo => 
                        <div 
                            key={repos.id} 
                            className="card"
                        >
                            <h3 className="title">{repo.name}</h3>
                            <p className="desc">{repo?.description ?? '-'}</p>
                            <p className="desc">{repo.stargazers_count} stars</p>
                            <a className="link" href={repo.html_url} target="blank">Ver no github</a>
                        </div>
                    )}
                </div>
            </section>
            <Footer/>
        </>
    )
}