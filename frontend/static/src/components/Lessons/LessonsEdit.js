import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { handleError } from '../../errorhandling';



function LessonEdit() {
    const [state, setState] = useState();
    const [isEdit, setIsEdit] = useState(false);

    const handleInput = (e) => { 
        const { name, value } = e.target;
        setState((prevState) => ({
        ...prevState,
        [name]: value,
        }));
    };



    

    const navigate = useNavigate();


    return (
    <div>hey</div>  
    )
}

export default LessonEdit;