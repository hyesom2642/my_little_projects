import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail(){
    const {id} = useParams();
    console.log(id); // id값을 반환
    
    const [loading, setLoading] = useState(true);

    const [movieContent, setMovieContent] = useState([]);

    useEffect( () => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((response) => response.json())
        .then((json) => {
            setMovieContent(json.data.movieContent);
            setLoading(false);
            console.log(json);
        })
    }, []); // 어떠한 것에도 간섭받지 않도록

    return (
        <div>
            {
            loading === true ? <h1>Loading...🥱</h1> : <h1>로딩이 완료되었습니다.</h1>
            }
        </div>
    );
}
// movieContent.propTypes = {
//     title: propTypes.string.isRequired,

// }
export default Detail;