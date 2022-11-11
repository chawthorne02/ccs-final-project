import Card from 'react-bootstrap/Card';
import { handleError } from '../../errorhandling';
import { useState, useEffect, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Cookies from "js-cookie";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Rating from '@mui/material/Rating';
import RadioGroupRating from './Rating';





// const INITIAL_REVIEW_STATE = {
//     tutorprofile: id,
//     first_name: "",
//     last_name: "",
//     avatar: "",
//     rating: number,
//     text: "",

// }

function Reviews({ reviews }) {
  // const [reviews, setReviews] = useState([]);
  const [activeReview, setActiveReview] = useState();
  const [filter, setFilter] = useState();

  // const getReviews = useCallback(async () => {
  //   const response = await fetch(`/api/v1/profiles/${activeTutorID}/reviews/`).catch(handleError);
  //   if (!response.ok) {
  //     throw new Error("Network response was not OK");
  //   } else {
  //     const data = await response.json();
  //     setReviews(data);
  //     setActiveReview(data[0]);
  //   }
  // }, [activeTutorID]);

  // useEffect(() => {
  //   getReviews();
  // }, [getReviews]);

  // const updateReview = (id) => {
  //   const index = reviews.findIndex((review) => review.id === id);
  //   const reviewAtIndex = reviews[index];
  //   setActiveReview(reviewAtIndex);
  // }

  // const filteredReviews = reviews.filter((review) =>
  // filter ? review.id === filter : review
  // );

  // useEffect(() => {
  //   setActiveReview(filteredReviews[0]);
  // }, [filter]);



    return (
      <Card className='reviews'>
        {reviews.map((review) => (
          
        <div className='card' key={review.id}>
      <Card.Img variant="top" src={review.author_avatar} />
      <Card.Body>
        <Card.Title>{review.username}</Card.Title>
        <Card.Text>
          {review.text}
        </Card.Text>
        <RadioGroupRating
        name="simple-controlled"
        value={5}
        readOnly
/>

      </Card.Body>
      
          </div>
        ))}
     
    </Card>
    )
}



export default Reviews;