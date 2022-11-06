import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function TutorPersonalForm({ state, preview, handleImage, handleInput, nextPage }) {
  return (
    <div>
      <div className="form-head">
        <h3>Personal Information</h3>
        <div className="image-container">
          <img className="form-image" src={preview} alt="" />
        </div>
      </div>
      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Choose a profile picture</Form.Label>
        <Form.Control required type="file" name="avatar" onChange={handleImage} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="first-name">
        <Form.Label>First name</Form.Label>
        <Form.Control
          required
          placeholder="First name..."
          type="text"
          name="first_name"
          value={state.first_name}
          onChange={handleInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="last-name">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          required
          placeholder="Last name..."
          type="text"
          name="last_name"
          value={state.last_name}
          onChange={handleInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="bio">
        <Form.Label>About you</Form.Label>
        <textarea
          required
          placeholder="Bio..."
          rows="3"
          className="form-control"
          name="bio"
          value={state.bio}
          onChange={handleInput}
        />
      </Form.Group>
      <div className="form-footer">
        <Button className="tutor-form-button" type="button" variant="primary" onClick={() => nextPage()}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default TutorPersonalForm;