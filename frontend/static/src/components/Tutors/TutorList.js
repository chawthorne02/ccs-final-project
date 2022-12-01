import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function TutorList({ updateDisplay, filteredTutors }) {
    const tutorList = filteredTutors.map((tutor) => (
        <Card className="list-aside-tutor" key={tutor.id} onClick={() => updateDisplay(tutor.id)}>
          <div className="tutor-info">
          <Card.Img className="aside-image" src={tutor.avatar} />
            <div className='tutor-text-list'>
            <Card.Title className="aside-title">Tutor</Card.Title>
            <span className='tutor-name'>{tutor.first_name} {tutor.last_name}</span>
            </div>
          </div>
        </Card>
      ));
    return <ul className="tutor-list">{tutorList}</ul>
    
  }
  
  export default TutorList;
  