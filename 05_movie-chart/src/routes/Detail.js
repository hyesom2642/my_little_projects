import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading.js';
import Part from '../components/Part.js';

function Detail(){
    const {id} = useParams();
    
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    useEffect( () => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((response) => response.json())
        .then((json) => {
            setMovie(json.data.movie);
            setLoading(false);
            console.log(json);
        });
    }, []); // 어떠한 것에도 간섭받지 않도록

    return (
        <div>
            {
            loading === true ? <Loading /> :
            <Part
                backgroundImg={movie.background_image_original}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                runtime={movie.runtime}
                genres={movie.genres}
                rating={movie.rating}
                url={movie.url}
                summary={movie.description_intro}
            />
            }
        </div>
    );
}

export default Detail;