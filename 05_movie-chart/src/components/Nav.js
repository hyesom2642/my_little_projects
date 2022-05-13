import LogoImg from '../logo.png';

import NavStyle from '../CSS/Nav.module.css';

function Nav(){
    return(
        <div className={NavStyle.nav}>
            <a href="/">
                <h1>
                    <img className={NavStyle.logo} src={LogoImg} alt="logo"/>
                </h1>
            </a>
            {/* <ul className={NavStyle.list}>
                <li>home</li>
                <li>movie</li>
                <li>contacts</li>
            </ul> */}
        </div>
    );
};

export default Nav;