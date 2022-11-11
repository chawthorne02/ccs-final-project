import Container from 'react-bootstrap/Container';
import welcomepic from "../../images/welcomepic.jpeg";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import '../../styles/WelcomePage.css';




function WelcomePage() {
    
    return (
        <Container fluid className='main'>
          <h3 className="welcome-page-text">Better Minds Tutoring<br></br><br></br>Where you can discover, Learn and Succeed</h3>
          <img className="welcomepic" src={welcomepic} alt="home-pic" />
        <div className='welcome-buttons'>
          <Button className="welcome-create-account btn-hover" href="/register">Create Account</Button>
          <Button className="welcome-login btn-hover" href="/login">Login</Button>
        </div>
        </Container>
    )
}



export default WelcomePage;