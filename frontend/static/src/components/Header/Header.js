import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import '../../styles/Header.css';
import DashboardSidebar from "../Dashboard/DashboardSidebar";





function Header({ superState, logoutUser }) {
    const navigate = useNavigate();
  
    const logout = (e) => {
      logoutUser(e);
      navigate("login");
    };
  
    return (
      <>
        <Navbar className="navbar" expand="lg">
          <Container>
            <div id="navbar-links">
                <h2 className="app-title">
                  <a href="/">Better Minds Tutoring</a>
                </h2>
              <Nav className="me-auto">
                {!superState.auth && (
                  <>
                    <Nav.Link href="/login">Login</Nav.Link>
                  </>
                )}
                {superState.auth && (
                  <>
                    <Nav.Link href="/" onClick={(e) => logout(e)}>
                      Logout
                    </Nav.Link>
                  </>
                )}
              </Nav>
            </div>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default Header;




