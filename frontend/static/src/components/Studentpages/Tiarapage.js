import { motion } from 'framer-motion';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../styles/Tiarapage.css';


function Tiarapage() {





    return (
        <motion.main
        className='tiara-main'
        initial={{width: 0}}
      animate={{width: "80%"}}
      exit={{x: window.innerWidth, transition: { duration: 0.4}}}
        >
            <h2 className='tiara-page-title'>Lessons for the Week</h2>
            <ProgressBar animated now={20} />;
            <Table bordered className='lessons-table'>
      <thead>
        <tr>
          <th className='table-header'>Day</th>
          <th className='table-header'>Lesson Objectives for Today</th>
          <th className='table-header'>Lesson Url</th>
          <th className='table-header'>Marked as Completed</th>
        </tr>
      </thead>
      <tbody>
        <tr className='first-row'>
          <td>Monday</td>
          <td>
            Today's lesson we are going to be looking at adding & Subtracting fractions. 
            Click the link in the next box to begin the lesson. Feel free to leave a message if you have any questions. 
            Look at discussion questions, vocabulary, and reading material. Make sure to complete exit ticket
            </td>
          <td>
          <a href='https://www.generationgenius.com/videolessons/add-and-subtract-fractions-like-denominators/?type=dynamic&utm_source=google&utm_medium=cpc&utm_term=&gclid=CjwKCAiA68ebBhB-EiwALVC-NnAVO2IgyKtpYsBgw09V-i7rZaJt_fp_hzAJcIFf4AO4zDpWI-FL-xoCTwYQAvD_BwE'>
            Adding & Subtracting fractions 
          </a>
          </td>
          <td>
          <input type="checkbox" id="accept"></input>
            </td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>
            Multiplying Fractions and Mixed Numbers. 
            We'll learn how to multiply fractions by fractions.
            How to multiply fractions by MIXED numbers. 
            </td>
          <td>
          <a href='https://www.generationgenius.com/videolessons/multiplying-fractions-by-fractions/'>Multiplying Fractions</a>
          </td>
          <td>
          <input type="checkbox" id="accept"></input>
          </td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>
            A fraction represents part of a whole.
            We can apply what we know about multiplication to fractions.
            Fractions greater than 1 can be simplified to a mixed number.</td>
          <td>
          <a href='https://www.generationgenius.com/videolessons/multiplying-fractions-by-whole-numbers/'>Multiplying Fractions by Whole Numbers</a>

          </td>
          <td>
          <input type="checkbox" id="accept"></input>
          </td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>
            Interpreting Fractions as Division:
            How to learn to interpret fractions as division.
            Divide smaller numbers by bigger ones.
            Interpreting fractions as division can help us go biking, make desserts, and help out at an animal shelter.
           </td>
          <td>
          <a href='https://www.generationgenius.com/videolessons/interpreting-fractions-as-division/'>Interpreting Fractions as Division</a>
          </td>
          <td>
          <input type="checkbox" id="accept"></input>
          </td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>KAHOOT ASSESSMENT</td>
          <td>
            <section>
          <a href='https://play.kahoot.it/v2/?quizId=18b96e2b-1ac5-4d4b-9c6e-fa3df8f68a59'>Mon. Assessment</a> 
          </section>

          <section>
          <a href='https://play.kahoot.it/v2/?quizId=783000b5-f760-41a2-9809-9f16f7ef625f'>Tues. Assessment</a>
          </section>

          <section>
          <a href='https://play.kahoot.it/v2/?quizId=43bf13b1-a31f-4e74-a816-997e04b0edb8'>Wed. Assessment</a>
          </section>

          <section>
          <a href='https://play.kahoot.it/v2/?quizId=d54fd505-7955-4ba2-a6b1-5c7c01e35a15'>Thurs. Assessment</a>
          </section>

          </td>
          <td>
          <input type="checkbox" id="accept"></input>
          </td>
        </tr>
      </tbody>
    </Table>

    <Form className="notes-display">
      <h2 className="notes-title">Questions?</h2>
      <Form.Group className="mb-3" controlId="subject-type">
        <Form.Label className="form-label">Select your student</Form.Label>
        <Form.Select
          required
          name="subject_type"
          type="text"
          placeholder="Select a Student..."
        >
          <option>Questions</option>
          <option value="Monday">Monday's Lesson</option>
          <option value="Tuesday">Tuesday's Lesson</option>
          <option value="Wednesday">Wednesday's Lesson</option>
          <option value="Thursday">Thursday's Lesson</option>
          <option value="Questions">Questions in General</option>
        </Form.Select>

      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label className="form-label">Notes</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Questions..."/>
      </Form.Group>

      <Button variant="primary" className="notes-submit-btn">Submit</Button>

    </Form>

      

      
        </motion.main>
    )
}

export default Tiarapage;
