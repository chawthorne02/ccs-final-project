import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect, useCallback } from "react";
import RadioGroupRating from './Rating';
import Cookies from "js-cookie";
import { handleError } from '../../errorhandling';
import '../../styles/TutorReview.css';










function TutorReviews({ activeTutor, reviews, setReviews }) {
    const [newReview, setNewReview] = useState ({
        tutorprofile: activeTutor.id,
        text: "",
        rating: 0,
    })
    const [show, setShow] = useState(false);

   
  const handleShow = () => setShow(true);


  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewReview((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setShow(false);
    setNewReview({
        tutorprofile: activeTutor.id,
        text: "",
       rating: 0,
    });
  };

  const handleReview = (value) => {
    setNewReview({
      ...newReview,
      rating: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(newReview),
    };
    const response = await fetch(`/api/v1/profiles/tutors/${activeTutor.id}/reviews/`, options).catch(
      handleError
    );
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      const data = await response.json();
      setReviews([...reviews, data]);
      handleClose();
    }
  };


    return (
        <div className='tutor-review'>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Submit a Review</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <RadioGroupRating 
                        name='rating'
                        value={newReview.rating}
                        onChange={(e, newValue) => handleReview(newValue)}
                        />
                        <textarea 
                        name="text"
                        required
                        placeholder='Feedback is appreciated...'
                        rows={3}
                        className="review-text"
                        value={newReview.text}
                        onChange={handleInput}
                        />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button className='review-submit' onClick={handleSubmit}>
                            Submit Review
                        </Button>
                        <Button className='close-button' onClick={handleClose}>Close</Button>
                    </Modal.Footer>
         

            </Modal>
            <Button onClick={handleShow}>Leave a Review</Button>
        </div>
    )
}




export default TutorReviews;