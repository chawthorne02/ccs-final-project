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
import { useRef } from 'react'
import emailjs from '@emailjs/browser';


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

// EMAIL JS


// const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();


emailjs.sendForm(
  'service_dj2omhg', 
  'template_5sj81jn', 
   Form.current, 
  '-5FuMIkA58NpIsBmE'
  )
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
          
      });
      handleClose();
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
                <Modal.Header closeButton className="question-modal">
                    <Modal.Title className="question-modal-title">Got a Question?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="question-modal">
                    <Form className="question-form" ref={Form} onSubmit={sendEmail} >
                      <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="user_email" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" name="user_name" placeholder="Enter name..." />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="subject" name="subject" placeholder="Subject..." />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" name="message" placeholder="Leave your Question here..." rows={3}/>
                      </Form.Group>
                      </Form>
                    </Modal.Body>
                    
                    <Modal.Footer className="question-modal">
                        <Button className='review-submit' type="submit" value="Send"  onClick={sendEmail}>
                            Send Message
                        </Button>
                        <Button className='close-button' onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                  

            </Modal>

    {/* <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
      


    </motion.main>
  );
}

export default StudentDashboard;



