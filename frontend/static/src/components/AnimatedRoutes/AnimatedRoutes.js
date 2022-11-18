import { BrowserRouter as Router, Routes, Route, useNavigate, Link, BrowserRouter, Switch, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import WelcomePage from '../WelcomePage/WelcomePage';
import Layout from '../Layout/Layout';
import StudentProfileForm from '../StudentProfileForm/StudentProfileForm';
import TutorProfileForm from '../TutorProfileForm/TutorProfileForm';
import Tutors from '../Tutors/Tutors';
import Reviews from '../Reviews/Reviews';
import TutorReviews from '../Reviews/Rating';
import Flashcards from '../Flashcards/Flashcards';
import Dashboard from '../Dashboard/Dashboard';
import Notes from '../Notes/Notes';
import Lessons from '../Lessons/Lessons';
import { AnimatePresence } from 'framer-motion';
import Tiarapage from "../Studentpages/Tiarapage";
import Dukepage from "../Studentpages/Dukepage";
import Amypage from "../Studentpages/Amypage";
import Billpage from "../Studentpages/Billpage";
import Bubbapage from "../Studentpages/Bubbapage";
import StudentDashboard from "../StudentDashboard/StudentDashboard";

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
          element={<StudentProfileForm superState={superState}/>}
          />

          <Route 
          path="tutor-profile-creation"
          element={<TutorProfileForm superState={superState}/>}
          />

          {/* <Route 
          path="tutor-dashboard"
          element={<TutorDashboard superState={superState}/>}
          /> */}

          <Route 
          path="tutor-selection"
          element={<Tutors superState={superState}/>}
          />


          <Route 
          path="tutor/reviews"
          element={<Reviews superState={superState}/>}
          />
         
         <Route 
          path="dashboard"
          element={<Dashboard logoutUser={logoutUser}/>}
          />

          <Route 
          path="notes"
          element={<Notes superState={superState}/>}
          />
          
          <Route 
          path="student-dashboard"
          element ={<StudentDashboard logoutUser={logoutUser}/>}
          />
          

          <Route 
          path="/:id"
          element={<Lessons superState={superState}/>}
          />


          </Route>

          
          {/* <Route
            path="login"
            element={<LoginForm superState={superState} setSuperState={setSuperState} />}
          />
           */}

          {/* <Route 
          path="flashcards"
          element={<Flashcards />}
          />

          <Route 
          path="dashboard/student-page-tiara"
          element={<Tiarapage />}
          />

          <Route 
          path="dashboard/student-page-duke"
          element={<Dukepage />}
          />

        <Route 
          path="dashboard/student-page-amy"
          element={<Amypage />}
          />

        <Route 
          path="dashboard/student-page-bill"
          element={<Billpage />}
          />

        <Route 
          path="dashboard/student-page-bubba"
          element={<Bubbapage />}
          /> */}


        </Routes>
    </AnimatePresence>
    )
}

export default AnimatedRoutes;