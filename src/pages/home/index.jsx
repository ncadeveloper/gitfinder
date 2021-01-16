import './index.css';
import ApiRoutes from '../../constants/api';

import { useEffect } from 'react';

import { Api } from '../../services';

export const Home = () => {
    useEffect(() => {
        const api = new Api(ApiRoutes.USERS, 'get');
        api.exec().then(res => {
            console.log(res);
        });
    }, []);
    console.log(process.env);
    return(
        <div>
            as
        </div>
    )
};