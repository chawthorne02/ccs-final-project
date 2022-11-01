import { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link, BrowserRouter } from "react-router-dom";
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import MainPage from '../MainPage/MainPage';
import Layout from '../Router/Router';



const INITIAL_STATE = {
  auth: false,
  admin: false,
}


function App() {
  const [superState, setSuperState] = useState(INITIAL_STATE);

  const newState = JSON.parse(window.localStorage.getItem("superState"));

  useEffect(() => {
    window.localStorage.setItem("superState", JSON.stringify(superState));
  }, [superState]);

  const handleError = (err) => {
    console.warn(err);
  };

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch("/dj-rest-auth/user/");
      if (!response.ok) {
        console.log("this", response.ok);
        setSuperState(INITIAL_STATE);
      } else {
        setSuperState(newState);
      }
    };
    checkAuth();
  }, []);

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
          <Route path="/" element={<Layout superState={superState} logoutUser={logoutUser} />}>
            <Route index element={<MainPage />} />
          </Route>
          <Route
            path="login"
            element={<LoginForm superState={superState} setSuperState={setSuperState} />}
          />
          <Route
            path="register"
            element={<RegistrationForm superState={superState} setSuperState={setSuperState} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
