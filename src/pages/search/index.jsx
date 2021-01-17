import './index.css';
import Routes from '../../constants/api';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'; 

import { Api } from '../../services';
import { Header, Footer, Breadcrumb } from '../../helpers';

export const Search = () => {
    let { query } = useParams();
    useEffect(() => {
        console.log(query);
        const api = new Api(Routes.SEARCH_USERS.replace('$query', query), 'GET');
        api.exec().then(({ data }) => {
            console.log(data);
        });
    }, [query]);
    return(
        <>
            <Header dark />
            <section id="search">
                <Breadcrumb page="Search" />
            </section>
            <Footer />
        </>
    );
}