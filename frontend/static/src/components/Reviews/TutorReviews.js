import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect, useCallback } from "react";
import RadioGroupRating from './Rating';
import Cookies from "js-cookie";
import { handleError } from '../../errorhandling';
import '../../styles/TutorReview.css';










function TutorReviews({ addReview }) {
    
  const [newReview, setNewReview] = useState ({
        text: "",
        rating: 0,
    });

    const [show, setShow] = useState(false);

   
    const handleShow = () => setShow(true);

    

    // useEffect(() => {
    //   const setActiveTutor = () => {
    //     setNewReview({
    //       tutorprofile: activeTutor.id,
    //       text: "",
    //       rating: 0,
    //   })
    // }

    //   setActiveTutor();
    // }, [activeTutor]);


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
    addReview(newReview);
    handleClose();
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