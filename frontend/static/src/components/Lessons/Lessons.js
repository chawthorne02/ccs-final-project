import Table from 'react-bootstrap/Table';
import '../../styles/Lessons.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { handleError } from '../../errorhandling';
import Cookies from "js-cookie";
import { motion } from 'framer-motion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

const INITIAL_LESSON_STATE = {
  title: "",
  notes: "",
  day_assigned: "",
}




function Lessons() {
  const [lesson, setLesson] = useState(INITIAL_LESSON_STATE);
  const [lessons, setLessons] = useState([]);
  
  // const formData = new FormData(); ONLY USED FOR IMAGES!!!

  const { id } = useParams();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLesson((prevState) => ({
    ...prevState,
    [name]: value,
    }));
};

  useEffect(() => {
    const fetchLessons = async (id) => {
      const response = await fetch(`/api/v1/students/${id}/lessons/`).catch(handleError);
      if (!response.ok) {
        throw new Error("Network response was not OK");
    } 
      const data = await response.json();
      setLessons(data);
    }

    fetchLessons(id);
  }, []);






  

  // const response = await fetchLessons();
  

const handleSubmit = async (e) => {
  e.preventDefault();

  const updatedLesson = {...lesson, student: id}


  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": Cookies.get("csrftoken"),
    },



    body: JSON.stringify(updatedLesson),
  };
  const response = await fetch(`/api/v1/profiles/lessons/${id}/`, options).catch(handleError);
  if (!response.ok) {
    throw new Error("Network response was not OK");
  } else {
    const data = await response.json();
    console.log(data);
    setLesson(INITIAL_LESSON_STATE);
  }
}
  








    return (
      <motion.main
      className='tiara-main'
      initial={{width: 0}}
    animate={{width: "80%"}}
    exit={{x: window.innerWidth, transition: { duration: 0.4}}}
      >

    <Form className='student-site-form'>
      <h2>Assign a lesson to {id} </h2>
    <Form.Group className="mb-4" id="form-lessons">
      <Form.Label>
        <h4>Lesson Title</h4>
        </Form.Label>
      <Form.Control 
      type="title" 
      placeholder="Title of Lesson..."
      name="title"
      value={lesson.title}
      onChange={handleInput}
      />
    </Form.Group>
    <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
      <Form.Label>
      <h4>Lesson Description</h4>
      </Form.Label>
      <Form.Control 
      as="textarea" 
      rows={4} 
      placeholder="Lesson Objectives, Notes, Assignments...."
      name="notes"
      value={lesson.notes}
      onChange={handleInput}
      />
    </Form.Group>
    
    <Form.Group className='mb-5'>
    <Form.Label>
      <h4>Select a Day to Assign The Lesson</h4>
      </Form.Label>
    <Form.Select
        required
        name="day_assigned"
        type="text"
        placeholder="Select a Student..."
        value={lesson.day_assigned}
        onChange={handleInput}
      >
        <option>Select a Day</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
      </Form.Select>
      </Form.Group>

      <div className='lesson-buttons'>
      <Button variant="primary" onClick={handleSubmit}>Assign</Button>
      <Button variant="warning">Edit Lesson</Button>
      </div>
    </Form>


    <h2 className='tiara-progress'>Student: {id}</h2>
    <ProgressBar animated now={20}/>
    <Table bordered className='progress-table'>
    <thead>
      <tr>
        <th>Lesson</th>
        <th>Marked as Completed:</th>
        <th>In Progress:</th>
        <th>Not started</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Monday's lesson</td>
        <td><input type="checkbox" name='progress'></input></td>
        <td><input type="checkbox"></input></td>
        <td><input type="checkbox"></input></td>
      </tr>
      <tr>
        <td>Tuesday's Lesson</td>
        <td><input type="checkbox"></input></td>
        <td><input type="checkbox"></input></td>
        <td><input type="checkbox"></input></td>
      </tr>
      <tr>
        <td>Wednesday's Lesson</td>
        <td><input type="checkbox"></input></td>
        <td><input type="checkbox"></input></td>
        <td><input type="checkbox"></input></td>
      </tr>
      <tr>
        <td>Thursday's Lesson</td>
        <td><input type="checkbox"></input></td>
        <td><input type="checkbox"></input></td>
        <td><input type="checkbox"></input></td>
      </tr>
      <tr>
        <td>Friday's Assessment</td>
        <td><input type="checkbox"></input></td>
        <td><input type="checkbox"></input></td>
        <td><input type="checkbox"></input></td>
      </tr>
    </tbody>
  </Table>
  </motion.main>
    )
}

export default Lessons;