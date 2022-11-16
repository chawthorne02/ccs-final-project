import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function TutorReferenceForm({ state, handleInput, lastPage, handleSubmit }) {

  return (
    <>
      <div className="form-head">
        <h3>Reference Form</h3>
      </div>
      <Form.Group className="mb-3" controlId="position">
        <Form.Label>Position</Form.Label>
        <Form.Control
          required
          placeholder="Position of reference..."
          type="text"
          name="position"
          value={state.position}
          onChange={handleInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="company_name">
        <Form.Label>Company Name</Form.Label>
        <Form.Control
          required
          placeholder="Company Name..."
          type="text"
          name="company_name"
          value={state.company_name}
          onChange={handleInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="company_address">
        <Form.Label>Company Address</Form.Label>
        <Form.Control
          required
          placeholder="Company Address..."
          type="text"
          name="company_address"
          value={state.company_address}
          onChange={handleInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="company_state">
        <Form.Label>State</Form.Label>
        <Form.Control
          required
          placeholder="Enter a state..."
          type="text"
          name="company_state"
          value={state.company_state}
          onChange={handleInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="zip_code">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control
          required
          placeholder="Please enter a zip code..."
          type="text"
          name="zip_code"
          value={state.zip_code}
          onChange={handleInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          required
          placeholder="Enter a city..."
          type="text"
          name="city"
          value={state.city}
          onChange={handleInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Job Description</Form.Label>
        <Form.Control
          required
          placeholder="Job description of reference..."
          type="text"
          name="description"
          value={state.description}
          onChange={handleInput}
        />
      </Form.Group>

      


      <div className="tutor-form-footer">
        <Button className="tutor-form-button" type="button" variant="primary" onClick={() => lastPage()}>
          Back
        </Button>
        <Button className="tutor-form-button" type="button" variant="primary" onClick={() => handleSubmit()}>
          Save & Submit
        </Button>
      </div>
    </>
  );
}

export default TutorReferenceForm;