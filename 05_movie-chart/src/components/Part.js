import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import backBtn from '../backBtn.png';
import PartStyle from '../CSS/Part.module.css';

function Part({backgroundImg, coverImg, title, year, runtime, genres, rating, url, summary}){
    return(
        <div className={PartStyle.bg}>
            <img className={PartStyle.background} src={backgroundImg} alt="background-image" />
            
            <div className={PartStyle.contentWrap}>
                <Link to="/">
                    <button className={PartStyle.back}>
                        <img src={backBtn} alt="" />
                    </button>
                </Link>
                <div className={PartStyle.contentCotainer}>
                    <img className={PartStyle.mainCoverImg} src={coverImg} alt={title} />
                    <div className={PartStyle.content}>
                        <h1 className={PartStyle.title}>
                            <a href={url}>
                            {title} ({year})
                            </a>
                        </h1>
                        <div className={PartStyle.detail}>
                            <p>
                            ⭐ rate : {rating} / 10.0
                            </p>
                            <p>
                                🎬 RunTime : {runtime} minutes
                            </p>
                        </div>
                        <div>
                            <ul className={PartStyle.genresList}>
                                {
                                    genres.map((g) => (
                                        <li className={PartStyle.genresitem} key={g}>{g}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        {
                            summary === "" ? <p>no information</p> : <p>{summary}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

Part.propTypes = {
    backgroundImg: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    url: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
}

export default Part;