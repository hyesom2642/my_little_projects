import { useEffect, useState } from 'react';

// Component
import Loading from '../components/Loading.js';
import Movie from '../components/Movie.js';

// CSS
import HomeStyle from '../CSS/Home.module.css';

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    useEffect( () => {
        fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
        .then((response) => response.json())
        .then((json) => {
            setMovies(json.data.movies);
            setLoading(false);
        });
    }, []);

    return(
        <>
        <div>
            {
            loading === true ? <Loading /> :
            <div className={HomeStyle.container}>
            {
                movies.map((movie) =>(
                <Movie
                    key={movie.id}
                    id={movie.id}
                    coverImage={movie.medium_cover_image}
                    title={movie.title}
                    year={movie.year}
                />
                ))
            }
            </div>
            }
        </div>
        </>
    );
}

export default Home;