import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import '../../styles/RegistrationForm.css';
import { motion } from 'framer-motion';



function RegistrationForm({ superState, setSuperState }) {
    const [user, setUser] = useState({
      username: "",
      email: "",
      password1: "",
      password2: "",
      is_tutor: false,
      is_student: false,
    });


    const navigate = useNavigate();

    const handleCheckbox = (e) => {
        setUser((prevState) => ({
            ...prevState,
            is_tutor: false,
            is_student: false,
            [e.target.name]: !user[e.target.name],
        }));
    }
   
    const handleInput = (e) => {

      let { name, value } = e.target;

      if(e.target.type === 'checkbox'){
        value = !user[e.target.name];
      }
      
      setUser((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleError = (err) => {
      console.warn(err);
    };
  
    const checkSamePass = (e) => {
      if (user.password1 !== user.password2) {
        alert("Your password did not match.");
        return;
      } else {
        handleSubmit(e);
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": Cookies.get("csrftoken"),
        },
        body: JSON.stringify(user),
      };
      const response = await fetch("/dj-rest-auth/registration/", options).catch(handleError);
      if (!response.ok) {
        throw new Error("Network response was not OK.");
      } else {
        const data = await response.json();
        Cookies.set("Authorization", `Token ${data.key}`);
        // navigate("/profile");
        setSuperState({ ...superState, auth: true, staff: data.is_staff });
        if (user.is_student === true) {
            navigate("/student-profile-creation")
        } else if (user.is_tutor === true) {
            navigate("/tutor-profile-creation")
        }
      }
    };

    const checkBoxLimit = (e) => {

    }
  
    return (
      <motion.div
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: { duration: 0.4}}}
      >
      <Form onSubmit={checkSamePass} className="register-form">
        <h1>Register</h1>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username..."
            name="username"
            value={user.username}
            onChange={handleInput}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email..."
            name="email"
            value={user.email}
            onChange={handleInput}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="password1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password..."
            name="password1"
            value={user.password1}
            onChange={handleInput}
          />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="password2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password..."
            name="password2"
            value={user.password2}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Label>Are you registering as a Student or Tutor?</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check 
            type="checkbox"  
            label="Student"
            name="is_student"
            checked={user.is_student} 
            onChange={handleCheckbox} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check 
            type="checkbox" 
            label="Tutor"
            name = "is_tutor"
            checked={user.is_tutor} 
            onChange={handleCheckbox} />
        </Form.Group>
        <Button 
        variant="primary" 
        type="submit" 
        className="register-submit-btn"
        >
          Submit
        </Button>


      </Form>
      </motion.div>
    );
  }

















export default RegistrationForm;