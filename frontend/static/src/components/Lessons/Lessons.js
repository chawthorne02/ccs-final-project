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
  const [studentProfile, setStudentProfile] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [editText, setEditText] = useState(null);
  
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
  const fetchStudentProfile = async (id) => {
    const response = await fetch(`/api/v1/profiles/students/${id}/`);
    const data = await response.json();
    setStudentProfile(data);
  }

  fetchStudentProfile(id);
},[])

  useEffect(() => {
    const fetchLessons = async (id) => {
      const response = await fetch(`api/v1/students/${id}/lessons/`).catch(handleError);
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
    setLessons([...lessons, data]);
    console.log(data);
    setLesson(INITIAL_LESSON_STATE);
  }
}
  


const handleSave = async (e) => {
  const id = editItem;
  const text = editText;


  if(editText === null) {
    setEditItem(null);
    return;
  } 
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": Cookies.get("csrftoken"),
    },
      body: JSON.stringify({notes: text})
  };
  const response = await fetch(`/api/v1/student/lessons/${id}/`, options).catch(handleError);
  if (!response.ok) {
    throw new Error("Network response was not OK");
  } else {
    const data = await response.json();
    setEditText(null);
  }
 
  setEditItem(null);
  const updatedLessons = [...lessons];
  const index = updatedLessons.findIndex(item => item.id === id);
  updatedLessons[index].notes = editText;

}

  const handleDelete = async (id) => {

    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
        
    };
    const response = await fetch(`/api/v1/student/lessons/${id}/`, options).catch(handleError);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      
      
    }
   
    
    const updatedLessons = [...lessons];
    const index = updatedLessons.findIndex(item => item.id === id);
    updatedLessons.splice(index, 1);
    setLessons(updatedLessons);
  }

  







    return (
      <motion.main
      className='tiara-main'
      initial={{width: 0}}
    animate={{width: "80%"}}
    exit={{x: window.innerWidth, transition: { duration: 0.4}}}
      >

    <Form className='student-site-form'>
      <h2>Assign a lesson to {`${studentProfile?.first_name} ${studentProfile?.last_name}`} </h2>
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
    
    {/* <Form.Group className='mb-5'>
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
      </Form.Group> */}

      <div className='lesson-buttons'>
      <Button variant="primary" onClick={handleSubmit}>Assign</Button>
      {/* <Button variant="warning">Edit Lesson</Button> */}
      </div>
    </Form>

    
    <h2 className='tiara-progress'>Student Lessons: {`${studentProfile?.first_name} ${studentProfile?.last_name}`}</h2>
    <ProgressBar animated now={20}/>
    {lessons.map((lesson) => (
    <Table bordered className='progress-table'>
    <thead>
      <tr>
        <th>Lesson Title:</th>
        <th>Lesson Description:</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{lesson.title}</td>
        <td><p contentEditable={editItem === lesson.id} onInput={(e) => setEditText(e.target.innerText)}>{lesson.notes}</p>
        <span className='edit-delete-buttons'>
          {editItem === lesson.id ? (
               <Button variant="warning" className="edit-button" onClick={handleSave}>Save changes</Button>
          ): (
            <Button variant="warning" className="edit-button" onClick={() => setEditItem(lesson.id)}>Edit Lesson</Button>
          )}
        <Button variant="danger" onClick={() => handleDelete(lesson.id)}>Delete Lesson</Button>
        </span>
        </td>
      </tr>
    </tbody>
    

  </Table>
  ))}
  </motion.main>
    )
}

export default Lessons;