import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav as Nav1, NavDropdown as NDD, Container } from "react-bootstrap"
import logo from './logo.png';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

const NavbarTop = () => {
    return (
        <BootstrapNavbar bg="light" expand="lg">
            <Container>
                <BootstrapNavbar.Brand href="#home">
                    <img style={{
                        height:100,
                        width:175}} src={logo}/></BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                <Nav1 className="me-auto">
                <Nav1.Link href="#About">About</Nav1.Link>

                <NDD title="Keycaps" id="basic-nav-dropdown">
                    <NDD.Item href="#action/3.1">ABS</NDD.Item>
                    <NDD.Item href="#action/3.2">PBT</NDD.Item>
                    <NDD.Item href="#action/3.3">Double-Shot PBT</NDD.Item>
                    <NDD.Divider />
                    <NDD.Item href="#action/3.4">What do these mean?</NDD.Item>
                </NDD>

                <NDD title="Cases" id="basic-nav-dropdown">
                    <NDD.Item href="#action/4.1">Aluminum</NDD.Item>
                    <NDD.Item href="#action/4.2">Plastic</NDD.Item>
                    <NDD.Item href="#action/4.3">Polycarbonate</NDD.Item>
                    <NDD.Item href="#action/4.4">Acrylic</NDD.Item>
                    <NDD.Item href="#action/4.5">Wood</NDD.Item>
                    <NDD.Divider />
                    <NDD.Item href="#action/4.6">What are these?</NDD.Item>
                </NDD>

                <NDD title="Accessories" id="basic-nav-dropdown">
                    <NDD.Item href="#action/5.1">Lube kits</NDD.Item>
                    <NDD.Item href="#action/5.2">Switch Films</NDD.Item>
                    <NDD.Item href="#action/5.3">Stabilizers</NDD.Item>
                    <NDD.Divider />
                    <NDD.Item href="#action/5.4">What are these?</NDD.Item>
                </NDD>

                <NDD title="Switches" id="basic-nav-dropdown">
                    <NDD.Item href="#action/6.1">Tactile</NDD.Item>
                    <NDD.Item href="#action/6.2">Linear</NDD.Item>
                    <NDD.Divider />
                    <NDD.Item href="#action/6.3">What are these?</NDD.Item>
                </NDD>
                
                <Nav1.Item className="ml-auto">
                    <Nav1.Link to="/checkout" className="navbar__link">
                        <div className="navbar__optionBasket">
                            <ShoppingBasketIcon/>
                            <span className="navbar_optionLineTwo navbar__basketCount">2</span>    
                        </div>
                    </Nav1.Link> 
                </Nav1.Item>


                    </Nav1>
                </BootstrapNavbar.Collapse>
            </Container>
      </BootstrapNavbar>
    );
}
 
export default NavbarTop;