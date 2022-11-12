import { Card } from "@mui/material";
import { useState, useCallback, useEffect } from "react";
import { handleError } from "../../errorhandling";



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
   <div className="notes-list">{notesList}</div>
)
}

export default Notes;