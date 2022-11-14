import { useState, useCallback, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { handleError } from '../../errorhandling';
import TutorDisplay from "./TutorDisplay";
import TutorList from "./TutorList";
import '../../styles/Tutors.css';
import Reviews from "../Reviews/Reviews";
import Cookies from 'js-cookie';
import { motion } from 'framer-motion';


function Tutors() {
  const [tutors, setTutors] = useState([]);
  const [activeTutor, setActiveTutor] = useState();
  const [filter, setFilter] = useState();
  const [reviews, setReviews] = useState([]);
  const [activeReview, setActiveReview] = useState();

  const getTutors = useCallback(async () => {
    const response = await fetch("/api/v1/profiles/tutors/").catch(handleError);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      const data = await response.json();
      setTutors(data);
      setActiveTutor(data[0]);
    }
  }, []);

  useEffect(() => {
    getTutors();
  }, [getTutors]);

  const updateDisplay = (id) => {
    const index = tutors.findIndex((tutor) => tutor.id === id);
    const tutorAtIndex = tutors[index];
    setActiveTutor(tutorAtIndex);
    console.log('works')
  };

  const filteredTutors = tutors.filter((tutor) =>
    filter ? tutor.subject === filter : tutor
  );

  const changeCategory = (value) => {
    setFilter(value);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Window.scrollTo() scrolls to a particular set of coordinates in the document.


  };

  useEffect(() => {
    setActiveTutor(filteredTutors[0]);
  }, [filter]);


  ////////////////// GET REVIEWS

  const getReviews = useCallback(async () => {
    const response = await fetch(`/api/v1/profiles/${activeTutor.id}/reviews/`).catch(handleError);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      const data = await response.json();
      setReviews(data);
      setActiveReview(data[0]);
    }
  }, [activeTutor]);

  useEffect(() => {
    if(activeTutor) {
      getReviews();
    }
   
  }, [getReviews, activeTutor]);

  const addReview = async (review) => {

    review.tutorprofile = activeTutor.id;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(review),
    };
    const response = await fetch(`/api/v1/profiles/tutors/${activeTutor.id}/reviews/`, options).catch(
      handleError
    );
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      const data = await response.json();
      setReviews([...reviews, review]);
    }
  }



    return (
        <motion.div
        initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}} 
        className="tutor-display"
        >
             <h1 className="tutor-select-header">Tutor Selection</h1>
      <section className="sort-buttons">
        <Button 
        className="sort-button" 
        variant="primary" 
        value='All' 
        onClick={(e) => setFilter(null)}>
              ALL
        </Button>
        <Button 
        className="sort-button" 
        variant="primary" 
        value='Math' 
        onClick={(e) => changeCategory(e.target.value)}>
              Math
        </Button>
        <Button 
        className="sort-button" 
        variant="primary" 
        value='Science' 
        onClick={(e) => changeCategory(e.target.value)}>
              Science
        </Button>
        <Button 
        className="sort-button" 
        variant="primary" 
        value='SS' 
        onClick={(e) => changeCategory(e.target.value)}>
              Social Studies
        </Button>
        <Button 
        className="sort-button" 
        variant="primary" 
        value='LA' 
        onClick={(e) => changeCategory(e.target.value)}>
              Language Arts
        </Button>
      </section>
      <section className="main-display">
        {activeTutor && <TutorDisplay activeTutor={activeTutor} addReview={addReview}/>}
        <aside className="sidebar">
          <TutorList 
            tutors={tutors} 
            updateDisplay={updateDisplay} 
            filteredTutors={filteredTutors} />
        </aside>
      </section>
      <Reviews reviews={reviews} />
    </motion.div>
  );
    



}



export default Tutors;