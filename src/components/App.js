import React from 'react';
import Header from './elements/Header';
import Home from './Home';
import NotFound from './NotFound';
import Movie from './Movie';
import {GlobalStyle} from './styles/GlobalStyle';
import {Router} from '@reach/router';

const App = () => (
    <>
        <Header />
        <Router>
            <Home path="/"/>
            <Movie path="/:movieId"/>
            <NotFound default />
        </Router>
        <GlobalStyle />
    </>
)

export default App;