import React from 'react';
import PropTypes from 'prop-types';
import {StyledMovieThumb} from '../styles/StyledMovieThumb';
import {Link} from '@reach/router';

function MovieThumb({image, movieId, clickable}){
    
    return (
        <StyledMovieThumb>
            {clickable ? (
                <Link to={`/${movieId}`}>
                <img className="clickable" src={image} alt="movie-thumb" />
                </Link>)
                : 
                (<img src={image} alt="movie-thumb" />)           
            }  
        </StyledMovieThumb>
    )
}

MovieThumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool,
}

export default MovieThumb;