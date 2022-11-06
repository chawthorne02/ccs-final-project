import { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import '../../styles/App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link, BrowserRouter } from "react-router-dom";
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import WelcomePage from '../WelomePage/WelcomePage';
import Layout from '../Layout/Layout';
import StudentProfileForm from '../StudentProfileForm/StudentProfileForm';
import TutorProfileForm from '../TutorProfileForm/TutorProfileForm';
import TutorDashboard from '../TutorDashboard/TutorDashboard';




const INITIAL_STATE = {
  auth: !!Cookies.get('Authorization'),
  staff: false,
}


function App() {
  const [superState, setSuperState] = useState(INITIAL_STATE);

  const newState = JSON.parse(window.localStorage.getItem("superState"));

  useEffect(() => {
    console.log('firing');
    window.localStorage.setItem("superState", JSON.stringify(superState));
  }, []);

  const handleError = (err) => {
    console.warn(err);
  };

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     const response = await fetch("/dj-rest-auth/user/");
  //     if (!response.ok) {
  //       console.log("this", response.ok);
  //       setSuperState(INITIAL_STATE);
  //     } else {
  //       setSuperState(newState);
  //     }
  //   };
  //   checkAuth();
  // }, []);

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
    <div className="App">
      <BrowserRouter>
        <Routes>
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


          </Route>
          
          {/* <Route
            path="login"
            element={<LoginForm superState={superState} setSuperState={setSuperState} />}
          />
           */}

         



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
