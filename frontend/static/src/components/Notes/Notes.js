import { Card } from "@mui/material";
import { useState, useCallback, useEffect } from "react";
import { handleError } from "../../errorhandling";
import Form from 'react-bootstrap/Form';
import '../../styles/Notes.css';
import Button from "react-bootstrap/Button";




function Notes({ state }) {
    const[notes, setNotes] = useState([

    ]);

    const getNotes = useCallback(async () => {
        const response = await fetch(`/api/v1/profiles/lessons/`).catch(handleError);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        } else {
          const data = await response.json();
          setNotes(data);
          ;
        }
      }, []);

        useEffect(() => {
        getNotes();
      }, [getNotes]);
    

      const notesList = notes.map((note) => (
        <Card className="list-aside-tutor" key={note.id}>
          <div className="note-info">
            <Card.Title className="note-title">{note.title}</Card.Title>
            <span>{note.tutor} for {note.student}</span>
            <Card.Body>{note.notes}</Card.Body>
            </div>
        </Card>
      ));

return(
   <div className="notes-list">
    <Form className="notes-display">
      <h2 className="notes-title">Leave Notes</h2>
      <Form.Group className="mb-3" controlId="subject-type">
        <Form.Label className="form-label">Select your student</Form.Label>
        <Form.Select
          required
          name="subject_type"
          type="text"
          placeholder="Select a Student..."
        >
          <option>Select a Student</option>
          <option value="Tiara">Tiara</option>
          <option value="Duke">Duke</option>
          <option value="Bubba">Bubba</option>
          <option value="Amy">Amy</option>
          <option value="Bill">Bill</option>
        </Form.Select>

      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label className="form-label">Notes</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Leave notes for student..."/>
      </Form.Group>

      <Button variant="primary" className="notes-submit-btn">Submit</Button>

    </Form>
    

   </div>

)
}

export default Notes;