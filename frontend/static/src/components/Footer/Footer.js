import { AiOutlineCopyrightCircle } from "react-icons/ai";
import '../../styles/Footer.css';



function Footer() {
    return (
      <footer className="footer-container">
        <div className="end-tag">Better Minds Tutoring</div>
        <div className="copyright">
          <AiOutlineCopyrightCircle /> Built by Corey Hawthorne Carolina Code School - 2022
        </div>
      </footer>
    );
  }
  
  export default Footer;