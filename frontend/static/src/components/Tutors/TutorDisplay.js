import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import TutorReviews from '../Reviews/TutorReviews';
import Modal from 'react-bootstrap/Modal';
import RadioGroupRating from '../Reviews/Rating';
import { useState } from 'react';
import Cookies from "js-cookie";
import { handleError } from '../../errorhandling';





function TutorDisplay({ activeTutor }) {
 

    return (
      <Card className="highlight-tutor">
          <Card.Img variant='top' className="highlight-img" src={activeTutor.avatar} alt="Tutor" />
          <Card.Body>
            <Card.Title>{activeTutor.first_name} {activeTutor.last_name}</Card.Title>
            <span className='highlight-subject'>{activeTutor.subject}</span><br></br>
            <span className="highlight-grade-level">{activeTutor.level_preferred}</span>
            <br></br>
            <span className="highlight-email">Contact: {activeTutor.email}</span>
            <Card.Text>
                <span className="highlight-bio">{activeTutor.bio}</span>
            </Card.Text>
          </Card.Body>

          <Button className='tutor-select-btn'>Select</Button>
          <TutorReviews activeTutor={activeTutor} />
         
          
        
       
      </Card>
    );
  }
  
  export default TutorDisplay;