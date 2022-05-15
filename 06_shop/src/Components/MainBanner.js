import MainBnnaerStyle from '../CSS/MainBanner.module.css';

function MainBanner(){
    return(
        <div>
            <div className={MainBnnaerStyle.bgWrap}>
                <img className={MainBnnaerStyle.background} src={process.env.PUBLIC_URL + '/images/bg.jpg'} alt="main-banner" />
            </div>
        </div>
    )
}

export default MainBanner;