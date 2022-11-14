import { BrowserRouter as Router, Routes, Route, useNavigate, Link, BrowserRouter, Switch, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import WelcomePage from '../WelcomePage/WelcomePage';
import Layout from '../Layout/Layout';
import StudentProfileForm from '../StudentProfileForm/StudentProfileForm';
import TutorProfileForm from '../TutorProfileForm/TutorProfileForm';
import TutorDashboard from '../TutorDashboard/TutorDashboard';
import Tutors from '../Tutors/Tutors';
import Reviews from '../Reviews/Reviews';
import TutorReviews from '../Reviews/Rating';
import Flashcards from '../Flashcards/Flashcards';
import Dashboard from '../Dashboard/Dashboard';
import Notes from '../Notes/Notes';
import Lessons from '../Lessons/Lessons';
import { AnimatePresence } from 'framer-motion';


const INITIAL_STATE = {
    auth: !!Cookies.get('Authorization'),
    staff: false,
  }



function AnimatedRoutes() {
    const location = useLocation();

    const [superState, setSuperState] = useState(INITIAL_STATE);



  const newState = JSON.parse(window.localStorage.getItem("superState"));

  useEffect(() => {
    console.log('firing');
    window.localStorage.setItem("superState", JSON.stringify(superState));
  }, []);

  const handleError = (err) => {
    console.warn(err);
  };

  const logoutUser = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    };

    const response = await fetch("/dj-rest-auth/logout/", options).catch(handleError);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      Cookies.remove("Authorization");
      window.localStorage.removeItem("superState");
      setSuperState(INITIAL_STATE);
    }

  }

    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout superState={superState} setSuperState={setSuperState} logoutUser={logoutUser} />}>
            <Route index element={<WelcomePage />} />
            <Route
            path="login"
            element={<LoginForm superState={superState} setSuperState={setSuperState} />}
          />
           <Route
            path="register"
            element={<RegistrationForm superState={superState} setSuperState={setSuperState} />}
          />
          <Route 
          path="student-profile-creation"
          element={<StudentProfileForm />}
          />

          <Route 
          path="tutor-profile-creation"
          element={<TutorProfileForm />}
          />

          <Route 
          path="tutor-dashboard"
          element={<TutorDashboard />}
          />

          <Route 
          path="tutor-selection"
          element={<Tutors />}
          />


          <Route 
          path="tutor/reviews"
          element={<Reviews />}
          />
         
         <Route 
          path="dashboard"
          element={<Dashboard />}

          


          />

          <Route 
          path="notes"
          element={<Notes />}
          />

          <Route 
          path="lessons"
          element={<Lessons />}
          />

          </Route>

          
          {/* <Route
            path="login"
            element={<LoginForm superState={superState} setSuperState={setSuperState} />}
          />
           */}

          <Route 
          path="flashcards"
          element={<Flashcards />}
          />


        </Routes>
    </AnimatePresence>
    )
}

export default AnimatedRoutes;