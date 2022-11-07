import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function TutorProfessionalForm({ state, handleInput, nextPage, lastPage }) {
  return (
    <>
      <div className="form-head">
        <h3>Professional Information</h3>
      </div>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          placeholder="Please enter email..."
          type="text"
          name="email"
          value={state.email}
          onChange={handleInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="grade_level">
        <Form.Label>What grade level would you like to teach</Form.Label>
        <Form.Select
          required
          placeholder="Elementary, Middle, or High school..."
          type="text"
          name="grade_level"
          value={state.grade_level}
          onChange={handleInput}
        >
          <option>Select a grade level</option>
          <option value="Elementary">Elementary</option>
          <option value="Middle">Middle School</option>
          <option value="High">High School</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="subject-type">
        <Form.Label>What Subject would you like to Teach?</Form.Label>
        <Form.Select
          required
          name="subject_type"
          placeholder="Select a Subject..."
          value={state.subject}
          onChange={handleInput}
        >
          <option>Select an Subject</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="SS">Social Studies</option>
          <option value="LA">Language Arts</option>
        </Form.Select>
      </Form.Group>

      <div className="tutor-form-footer">
        <Button className="tutor-form-button" type="button" variant="primary" onClick={() => lastPage()}>
          Back
        </Button>
        <Button className="tutor-form-button" type="button" variant="primary" onClick={() => nextPage()}>
          Next
        </Button>
      </div>
    </>
  );
}

export default TutorProfessionalForm;