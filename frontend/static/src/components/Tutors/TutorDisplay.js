import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import TutorReviews from '../Reviews/TutorReviews';
import Modal from 'react-bootstrap/Modal';
import RadioGroupRating from '../Reviews/Rating';
import { useState, useEffect, useCallback } from 'react';
import Cookies from "js-cookie";
import { handleError } from '../../errorhandling';
import { useNavigate } from 'react-router-dom';







function TutorDisplay({ activeTutor, addReview }) {

  const [selectedTutor, setSelectedTutor] = useState([])

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const options = {
        method: "PATCH",
        headers: {
          "X-CSRFToken": Cookies.get("csrftoken"),
        },
      };
      const response = await fetch(`/api/v1/profiles/tutors/add/${activeTutor.id}/`, options).catch(handleError);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      } else {
        const data = await response.json();
        console.log(data);
        setSelectedTutor(data);
        navigate("/student-dashboard");
      }

}
 

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

          <Button className='tutor-select-btn' onClick={handleSubmit}>Select</Button>
          <TutorReviews addReview={addReview} />
         
          
        
       
      </Card>
    );
  }
  
  export default TutorDisplay;