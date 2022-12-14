import { motion } from 'framer-motion';
import Form from 'react-bootstrap/Form';
import '../../styles/Dukepage.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';





function Dukepage () {





    return (
        <motion.main
        initial={{width: 0}}
      animate={{width: "80%"}}
      exit={{x: window.innerWidth, transition: { duration: 0.4}}}
      className="duke-main"
        >
        
        <Form className='student-site-form'>
        <h2>Assign a lesson to Duke</h2>
      <Form.Group className="mb-4" id="form-lessons">
        <Form.Label>
          <h4>Lesson Title</h4>
          </Form.Label>
        <Form.Control type="title" placeholder="Title of Lesson..."/>
      </Form.Group>
      <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
        <Form.Label>
        <h4>Lesson Description</h4>
        </Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="Lesson Objectives, Notes, Assignments...."/>
      </Form.Group>
      
      <Form.Group className='mb-5'>
      <Form.Label>
        <h4>Select a Day to Assign The Lesson</h4>
        </Form.Label>
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
        </Form.Select>
        </Form.Group>

        <Button variant="primary">Assign</Button>
      </Form>

      <h2 className='duke-progress'>Duke's Progression</h2>
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
          <td><input type="checkbox"></input></td>
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

export default Dukepage;