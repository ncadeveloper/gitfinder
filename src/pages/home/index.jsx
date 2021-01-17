import './index.css';
import IconSearch from '../../assets/icon_search.svg';

import { useHistory } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import { Header, Footer, Breadcrumb } from '../../helpers';

export const Home = () => {
    const history = useHistory();
    const refInputSearch = useRef(null);
    const [ search, setSearch ] = useState('');
    
    const onKeyUp = e => {
        if(e.keyCode === 13 && search) 
            history.push(`/search/${search}`);
    }

    useEffect(() => {
        refInputSearch.current.focus();
    }, []);

    return(
        <>
            <Header/>
            <section id="home">
                <Breadcrumb page="Home" />
                <div className="container">
                    <div className="title" data-aos="fade-up">
                        <h1 className="title__text">Gitfinder</h1>
                    </div>
                    <div className="search"> 
                        <div className="search__border" data-aos="zoom-in">
                            <img className="search__image" src={IconSearch} alt="Search" />
                            <input 
                                type="text"  
                                value={search}
                                onKeyUp={onKeyUp}
                                ref={refInputSearch}
                                className="search__input"
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
};