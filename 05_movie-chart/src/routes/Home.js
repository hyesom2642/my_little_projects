import { useEffect, useState } from 'react';
import Movie from '../components/Movie';

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
        <div>
        { 
        loading === true ? <h1>Loading...🥱</h1> :
        <div>
        {
            movies.map((movie) =>(
            <Movie 
                key={movie.id}
                id={movie.id}
                coverImage={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                rating={movie.rating}
                genres={movie.genres}
                summary={movie.summary} />
            ))
        }
        </div>
        }
        </div>
    );
}

export default Home;