import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// CSS
import MovieStyle from '../CSS/Movie.module.css';

function Movie({coverImage, title, year, id}){

    return(
        <div className={MovieStyle.container}>
            <Link to={`/movie/${id}`}>
                <img className={MovieStyle.coverimg} src={coverImage} alt={title} />
            </Link>
            <Link to={`/movie/${id}`}>
                <h1 className={MovieStyle.title}>
                        {title}({year})
                </h1>
            </Link>
        </div>
    );
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
};

export default Movie;