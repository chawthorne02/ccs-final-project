import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Table from "react-bootstrap/Table";
import { motion } from "framer-motion";
import { handleError } from "../../errorhandling";
import "../../styles/StudentDashboard.css";
import { useState, useEffect, useCallback } from "react";
import DashboardSidebar from "../Dashboard/DashboardSidebar";
import { useParams } from "react-router-dom";
import { BiBody } from "react-icons/bi";
import Cookies from "js-cookie";
import Modal from 'react-bootstrap/Modal';

function StudentDashboard() {
  const [studentLesson, setStudentLesson] = useState([]);
  const [checkbox, setCheckBox] = useState(false);
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleChange = async (lesson) => {
    let lessonStatus;

    if (lesson.progress === "Completed") {
      lessonStatus = "not_started";
      setChecked(false);
    }
    if (lesson.progress === "not_started") {
      lessonStatus = "Completed";
      setChecked(true);
    }
    console.log("testing");

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify({ progress: lessonStatus }),
    };
    const response = await fetch(
      `/api/v1/student/lessons/${lesson.id}/`,
      options
    ).catch(handleError);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      const data = await response.json();
      console.log(data);
      setCheckBox(data);
    }
  };

  const getStudentLesson = useCallback(async () => {
    const response = await fetch("/api/v1/student/lessons/").catch(handleError);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      const data = await response.json();
      console.log(data);
      setStudentLesson(data);
    }
  }, []);

  useEffect(() => {
    getStudentLesson();
  }, []);

  

  function progression(){
    console.log("working")
    let progress = 0;

     
  };

  const updateChecked = (progress) => {
    if (progress === "Completed") {
      setChecked(true);
    } else setChecked(false);
  };

  return (
    <motion.main
      className="student-dash-main"
      initial={{ width: 0 }}
      animate={{ width: "80%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
    >
      
      <h2 className="student-dash-title">My Lessons</h2>
      <ProgressBar animated now={20} />
      {studentLesson.map((lesson, index) => (
        <Table bordered className="progress-table" key={lesson.id}>
          <thead>
            <tr>
              <th>Lesson Title:</th>
              <th>Lesson Description:</th>
              <th>Marked as Completed:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{lesson.title}</td>
              <td>{lesson.notes}</td>

              <td>
                {lesson.progress === "Completed" ? "This lesson has been completed" : "Check to complete lesson"}
                {lesson.progress === "Completed" ? null : <input
                  type="checkbox"
                  className="lesson-checkbox"
                  // handleCheckbox={() => handleCheckbox(lesson.id)}
                  name="completed"
                  progress={20}
                  id={index}
                  value={checked}
                  onChange={() => handleChange(lesson)}
                  // onClick={() => progression()}
                ></input>}
                <Button className="question-button" onClick={handleShow}>Ask a Question</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Have a Question?</Modal.Title>
        </Modal.Header>
        <Modal.Body>What is it?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <Form className="notes-display">
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
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Questions, Comments, Concerns..."
          />
        </Form.Group>

        <Button variant="primary" className="notes-submit-btn">
          Submit
        </Button>
      </Form> */}


    </motion.main>
  );
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


