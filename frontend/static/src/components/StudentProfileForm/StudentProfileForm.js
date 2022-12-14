import '../../styles/StudentProfileForm.css';
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { handleError } from '../../errorhandling';
import defaultprofilepicture from "../../images/defaultprofilepicture.jpeg";
import { motion } from 'framer-motion';



const INITIAL_STUDENT_PROFILE_STATE = {
    avatar: null,
    first_name: "",
    last_name: "",
}

function StudentProfileForm() {
    const [state, setState] = useState(INITIAL_STUDENT_PROFILE_STATE);
  const [preview, setPreview] = useState(defaultprofilepicture);

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setState({
      ...state,
      avatar: file,
    });

    const reader = new FileReader();

    reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("avatar", state.avatar);
        formData.append("first_name", state.first_name);
        formData.append("last_name", state.last_name);

        const options = {
            method: "POST",
            headers: {
              "X-CSRFToken": Cookies.get("csrftoken"),
            },
            body: formData,
          };
          const response = await fetch("/api/v1/profiles/students/", options).catch(handleError);
          if (!response.ok) {
            throw new Error("Network response was not OK");
          } else {
            const data = await response.json();
            console.log(data);
            setState(INITIAL_STUDENT_PROFILE_STATE);
            navigate("/tutor-selection");
          }
    
    }

    return (

        <motion.section 
        className="student-form-display"
        initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: { duration: 0.4}}}
        >
      <Form className="student-form-box" onSubmit={handleSubmit}>
        <div className="student-form-head">
          <h1>Create a Student Profile</h1>
          <div className="image-container">
            <img className="student-form-image" src={preview} alt="" />
          </div>
        </div>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Choose a profile picture</Form.Label>
          <Form.Control required type="file" name="avatar" onChange={handleImage} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="first-name">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            placeholder="First name..."
            type="text"
            name="first_name"
            value={state.first_name}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="last-name">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            placeholder="Last name..."
            type="text"
            name="last_name"
            value={state.last_name}
            onChange={handleInput}
          />
        </Form.Group>

        <div>
          <Button className="student-save-button" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </motion.section>

    );


}


export default StudentProfileForm;