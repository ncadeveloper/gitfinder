import './index.css';
import Routes from '../../constants/api';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Api } from '../../services';
import { Header, Footer, Breadcrumb } from '../../helpers';

export const Details = () => {
    const { repo } = useParams();

    const _getDetails = () => {
        const api = new Api(Routes.USER.replace('$name', repo), 'GET');
        api.exec()
            .then(({ data }) => {
                console.log(data);
            })
            .finally(() => {
                
            });
    }

    useEffect(() => {
        _getDetails();
    }, []);

    return(
        <>
            <Header dark />
            <section id="details">
                <Breadcrumb page="Details" />
                
            </section>
            <Footer/>
        </>
    )
}