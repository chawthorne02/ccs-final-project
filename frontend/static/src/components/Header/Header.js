import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";




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
            <div id="basic-navbar-nav">
                <h2>Better Minds Tutoring</h2>
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




