import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./nav.css"
function Collapsiblenav({size}) {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("loggedin")
    navigate("/login")
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark navbar-dark  ">
      <Container>
        <Navbar.Brand className='text-danger FF' to="/"><h2>MOVIES WORLD</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto gap-3">
            <NavLink className="text-decoration-none text-white" to="/">Home</NavLink>
            <NavLink className="text-decoration-none text-white" to="/movie">Movies</NavLink>
         
            
          </Nav>
          <Nav className='gap-3'>
            <NavLink to="/addToCart"><i class="fa-sharp fa-thin fa-cart-shopping text-white mt-3"></i></NavLink>
          <span className='text-danger'>{size}</span>
            <button onClick={handleLogout} type='button' className='bt btn btn-danger'>Logout</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Collapsiblenav;