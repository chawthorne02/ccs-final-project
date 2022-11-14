import Table from 'react-bootstrap/Table';
import '../../styles/Lessons.css';


function Lessons() {






    return (
        <Table bordered className='lessons-table'>
      <thead>
        <tr>
          <th className='table-header'>Title of Lesson</th>
          <th className='table-header'>Lesson Description</th>
          <th className='table-header'>Name of Student</th>
          <th className='table-header'>Lesson Url</th>
        </tr>
      </thead>
      <tbody>
        <tr className='first-row'>
          <td>Addition And Subtraction With Negative Integers Flashcards</td>
          <td>
            Here are the most basic examples of adding and subtracting with negative integers in the form flashcards quizzes, for the students who just learn the basics of Integers. These Flashcards will help the students to build the concepts strong and will make the revision much easier.
            </td>
          <td>Duke</td>
          <td>
            <a href="https://www.proprofsflashcards.com/story.php?title=addition--subtraction-with-negative-integers">Working with Negative Integers</a>
            </td>
        </tr>
        <tr>
          <td>Add & Subtract With Fractions</td>
          <td>Practice adding and subtracting fractions.</td>
          <td>Tiara</td>
          <td>
            <a href='https://www.proprofsflashcards.com/story.php?title=add-subtract-with-fractions'>Fractions Lesson</a>
          </td>
        </tr>
        <tr>
          <td>Multiplication And Division Of Integers</td>
          <td>Here is some practice on learning how to multiply/divide positive and negative integers</td>
          <td>Amy</td>
          <td>
            <a href='https://www.proprofsflashcards.com/story.php?title=multiplication-division-integers'>Multiplying and Dividing Integers</a>
          </td>
        </tr>
        <tr>
          <td>Shapes Vocabulary</td>
          <td>Here is some practice on shapes vocabulary and how to describe them</td>
          <td>Bill</td>
          <td>
            <a href='https://www.proprofsflashcards.com/https://www.proprofsflashcards.com/story.php?title=geometry_204.php?title=multiplication-division-integers'>Vocabulary of Shapes</a>
          </td>
        </tr>
        <tr>
          <td>Fractions and Percentages</td>
          <td>Learn how to match the correct percentage with the right fraction</td>
          <td>Bubba</td>
          <td>
            <a href='https://www.proprofsflashcards.https://www.proprofsflashcards.com/story.php?title=fractions-percentages/story.php?title=multiplication-division-integers'>Matching Fractions and Percentages</a>
          </td>
        </tr>
      </tbody>
    </Table>
    )
}

export default Lessons;