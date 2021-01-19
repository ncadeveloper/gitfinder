import './index.css';

import { useHistory } from 'react-router-dom';
import { useState, useEffect, createRef } from 'react';

import { Button } from './button';
import { Header, Footer, Breadcrumb, Input } from '../../helpers';

export const Home = () => {
    const history = useHistory();
    const refInputSearch = createRef();
    const [ search, setSearch ] = useState('');
    const [ filter, setFilter ] = useState('default')
    
    const onKeyUp = e => {
        if(e.keyCode === 13 && search) 
            history.push(`/search/${filter}/${search}`);
    }

    useEffect(() => {
        refInputSearch.current.focus();
    }, []);

    return(
        <>
            <Header />
            <section id="home">
                <Breadcrumb page="Home" />
                <div className="container">
                    <div className="title" data-aos="fade-up">
                        <h1 className="title__text">Gitfinder</h1>
                    </div>
                    <div className="search"> 
                        <Input
                            value={search}
                            onKeyUp={onKeyUp}
                            ref={refInputSearch}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                    <p 
                        data-aos="fade" 
                        className="filter" 
                        style={{ marginTop: 30 }}
                    >
                        Filtrar por?
                    </p>
                    <div className="filter" data-aos="fade">
                        <Button
                            id="default"
                            filter={filter}
                            onClick={e => setFilter(e.target.id)}
                        >
                            Default
                        </Button>
                        <Button
                            id="language"
                            filter={filter}
                            onClick={e => setFilter(e.target.id)}
                        >
                            Language
                        </Button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
};