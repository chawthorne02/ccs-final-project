import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';
import { motion } from 'framer-motion';
import { handleError } from '../../errorhandling';
import '../../styles/StudentDashboard.css';
import { useState, useEffect, useCallback } from 'react';
import DashboardSidebar from '../Dashboard/DashboardSidebar';
import { useParams } from 'react-router-dom';
import { BiBody } from 'react-icons/bi';



function StudentDashboard() {
    const [studentLesson, setStudentLesson] = useState([]);

    const getStudentLesson = useCallback(async () => {
      const response = await fetch('/api/v1/student/lessons/').catch(handleError);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      } else {
        const data = await response.json();
        console.log(data);
        setStudentLesson(data);
      }
    }, [])
  
  
    useEffect(() => {
      getStudentLesson();
    }, []);




    return (
      <motion.main 
      className='student-dash-main'
      initial={{width: 0}}
    animate={{width: "80%"}}
    exit={{x: window.innerWidth, transition: { duration: 0.4}}}
      >
        <DashboardSidebar />
        <h2 className="student-dash-title">My Lessons</h2>
        <ProgressBar animated now={20}/>
      {studentLesson.map((lesson) => (
    <Table bordered className='progress-table'>
    <thead>
      <tr>
        <th>Day of Lesson</th>
        <th>Lesson Title:</th>
        <th>Lesson Description:</th>
        <th>Marked as Completed:</th>

        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{lesson.day_assigned}</td>
        <td>{lesson.title}</td>
        <td>{lesson.notes}</td>
        <td><input type="checkbox"></input></td>
        
      </tr>
    </tbody>
  </Table>
  ))}

  <Form className="notes-display">
      <h2 className="notes-title">Questions?</h2>
      <Form.Group className="mb-3" controlId="subject-type">
        <Form.Label className="form-label"></Form.Label>
        <Form.Select
          required
          name="subject_type"
          type="text"
          placeholder="Select a Student..."
        >
          <option>Select a Day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="gen-questions">General Questions</option>
        </Form.Select>

      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label className="form-label">Notes</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Questions, Comments, Concerns..."/>
      </Form.Group>

      <Button variant="primary" className="notes-submit-btn">Submit</Button>

    </Form>




      </motion.main>  
    )
}

export default StudentDashboard;

/* <tr>
        <td>Tuesday's Lesson</td>
        <td></td>
        <td></td>
        <td><input type="checkbox"></input></td>
        
      </tr>
      <tr>
        <td>Wednesday's Lesson</td>
        <td></td>
        <td></td>
        <td><input type="checkbox"></input></td>
        
      </tr>
      <tr>
        <td>Thursday's Lesson</td>
        <td></td>
        <td></td>
        <td><input type="checkbox"></input></td>
        
      </tr>
      <tr>
        <td>Friday's Assessment</td>
        <td></td>
        <td></td>
        <td><input type="checkbox"></input></td>
         */
      /* </tr> */