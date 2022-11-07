import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function TutorDisplay({ activeTutor }) {
    return (
      <Card className="highlight-tutor">
          <Card.Img variant='top' className="highlight-img" src={activeTutor.avatar} alt="Tutor" />
          <Card.Body>
            <Card.Title>{activeTutor.first_name} {activeTutor.last_name}</Card.Title>
            <span className='highlight-subject'>{activeTutor.subject}</span><br></br>
            <span className="highlight-grade-level">{activeTutor.level_preferred}</span>
            <Card.Text>
                <span className="highlight-bio">{activeTutor.bio}</span>
            </Card.Text>
          </Card.Body>

          <Button className='tutor-select-btn'>Select</Button>
          
        
       
      </Card>
    );
  }
  
  export default TutorDisplay;