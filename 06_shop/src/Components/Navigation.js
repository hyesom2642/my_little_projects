// > react-bootstrap 
import { Navbar, Container, Nav } from 'react-bootstrap';

// > react-router-dom 
import { Link } from 'react-router-dom';

// > CSS
import NavigationStyle from '../CSS/Navigation.module.css';

function Navigation(){
    return(
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">SHOP</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav className={NavigationStyle.item}><Link to="/">HOME</Link></Nav>
                    <Nav className={NavigationStyle.item}><Link to="/">ABOUT</Link></Nav>
                    <Nav className={NavigationStyle.item}><Link to="/">PRODUCT</Link></Nav>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;