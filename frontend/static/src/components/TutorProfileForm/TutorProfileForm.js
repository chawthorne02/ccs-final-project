import ProgressBar from 'react-bootstrap/ProgressBar'
import { useState } from "react";
import { handleError } from '../../errorhandling';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import defaultprofilepicture from "../../images/defaultprofilepicture.jpeg";
import TutorPersonalForm from './TutorPersonalForm';
import TutorProfessionalForm from './TutorTeachingBackground';
import TutorReferenceForm from './TutorReferences';
import '../../styles/TutorProfileForm.css';


const INITIAL_TUTOR_PROFILE_STATE = {
    avatar: null,
  first_name: "",
  last_name: "",
  location: "",
  bio: "",
  email: "",
  subject: "",
  grade_level: "",
  position:"",
  company_name: "",
  company_address: "",
  company_state: "",
  zip_code: "",
  city: "",
  description: "",
  tutor: "",
}

function TutorProfileForm({ superState, setSuperState }) {
    const [state, setState] = useState(INITIAL_TUTOR_PROFILE_STATE);
    const [preview, setPreview] = useState(defaultprofilepicture);
    const [page, setPage] = useState(1);

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
    const formData = new FormData();

    for (const key in state) {
      if (state[key]) {
        formData.append(key, state[key]);
      }
    }

    const options = {
      method: "POST",
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: formData,
    };
    const response = await fetch("/api/v1/profiles/tutors/", options).catch(handleError);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      const data = await response.json();
      console.log(data);
      setState(INITIAL_TUTOR_PROFILE_STATE);
      setSuperState({
        ...superState,
        tutor_avatar: data.avatar,
        tutor_profile: data.id,
      });
      navigate("dashboard");
    }
  };
        
  const nextPage = () => {
    setPage(page + 1);
  };

  const lastPage = () => {
    setPage(page - 1);
  };

  const tutorCredentials = () => {
    switch (page) {
        case 1:
            return (
                <TutorPersonalForm
                state={state}
                preview={preview}
                handleInput={handleInput}
                handleImage={handleImage}
                nextPage={nextPage}
                />
            );
        case 2:
            return (
                <TutorProfessionalForm 
                state={state}
                handleInput={handleInput}
                nextPage={nextPage}
                lastPage={lastPage}
                />
            );
        case 3:
            return (
                <TutorReferenceForm 
                state={state}
                handleInput={handleInput}
                handleSubmit={handleSubmit}
                lastPage={lastPage}
                />
            )
    }
  }
        

    return (
        <section className="tutor-form-display">
      <div className="tutor-form-box">
        <div className="tutor-form-head">
          <h1>Tutor Profile Creation Page</h1>
        </div>
        <ProgressBar className='progressBar' animated now={page * (100 / 3)} />
        <div>{tutorCredentials()}</div>
      </div>
    </section>
    )


}


export default TutorProfileForm;