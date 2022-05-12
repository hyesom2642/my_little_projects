import LoadingImg from '../loading.png';
import LoadingStyle from '../CSS/Loading.module.css';

function Loading(){

    return (
        <div className={LoadingStyle.container}>
            <img className={LoadingStyle.loading} src={LoadingImg} alt="loading-image" />
        </div>
    )
}

export default Loading;