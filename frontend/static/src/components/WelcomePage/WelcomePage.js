import Container from 'react-bootstrap/Container';
import welcomepic from "../../images/welcomepic.jpeg";
import welcomepic2 from "../../images/welcomepic2.jpg";
import welcomepic3 from "../../images/welcomepic3.jpg";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import '../../styles/WelcomePage.css';
import Carousel from 'react-bootstrap/Carousel';
import { motion } from 'framer-motion';




function WelcomePage() {
    
    return (
        // <Container fluid className='main'>
        //   <h3 className="welcome-page-text">Better Minds Tutoring<br></br><br></br>Where you can discover, Learn and Succeed</h3>
        //   <img className="welcomepic" src={welcomepic} alt="home-pic" />
        // <div className='welcome-buttons'>
        //   <Button className="welcome-create-account btn-hover" href="/register">Create Account</Button>
        //   <Button className="welcome-login btn-hover" href="/login">Login</Button>
        // </div>
        // </Container>
      <motion.main
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: { duration: 0.4}}}
      >
        <Carousel fade className='carousel'>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={welcomepic}
            alt="First slide"
          />
          <Carousel.Caption className= "d-flex h-100 align-items-center justify-content-center" >
          <h1 className="welcome-page-text">Better Minds Tutoring</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={welcomepic2}
            alt="Second slide"
          />
          <Carousel.Caption className= "d-flex h-100 align-items-center justify-content-center">
          <h1 className='welcome-page-text'>Where you can discover, Learn and Succeed</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={welcomepic3}
            alt="Third slide"
          />
          <Carousel.Caption className= "d-flex h-100 align-items-center justify-content-center">
          <h1 className='welcome-page-text'>Take Your Learing to New heights</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* <div className='welcome-buttons'>
          <Button className="welcome-create-account btn-hover" href="/register">Create Account</Button>
           <Button className="welcome-login btn-hover" href="/login">Login</Button>
       </div> */}



      </motion.main>



    )
}



export default WelcomePage;