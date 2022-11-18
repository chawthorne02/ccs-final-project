import Table from 'react-bootstrap/Table';
import { handleError } from '../../errorhandling';
import { useState, useCallback, useEffect } from 'react';


function StudentsList() {
    const [students, setStudents] = useState([]);

const getStudents = useCallback (async () => {
    const response = await fetch(`/api/v1/profiles/students/`).catch(handleError);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      const data = await response.json();
      setStudents(data);
    }
  }, [])


  useEffect(() => {
    getStudents();
  }, []);




    return (
        
      <main className='students-display'>
        {students.map((student) => (
            <section key={student.id}>
            <div className="flipcard">

        <div className="flip-card-front">
            <img src={student.avatar} className="student-card-img"/>
        <h2 className='note-card-front'>{student.first_name} {student.last_name}</h2>
        <h6 className='subtitle'>From {student.location}</h6>
        </div>
        <div className="flip-card-back">
            <p className='note-card-title'> </p>
            <p className='note-card-text'>
                <a href={student.id}>View {student.first_name}'s Student Site</a>
            </p>
        </div>
    </div>   
        </section>
        ))}
    
        {/* <section>
           
            <div className="flipcard">

        <div className="flip-card-front">
        <h2 className='note-card-front'>Duke's Page</h2>
        </div>
        <div className="flip-card-back">
            <p className='note-card-title'> </p>
            <p className='note-card-text'>
                <a href="student-page-duke">View Duke's Student Site</a>
            </p>
        </div>
    </div>   
        </section>

        <section>
            
            <div className="flipcard">

        <div className="flip-card-front">
        <h2 className='note-card-front'>Amy's Page</h2>
        </div>
        <div className="flip-card-back">
            <p className='note-card-title'> </p>
            <p className='note-card-text'>
                <a href="student-page-amy">View Amy's Student Site</a>
            </p>
        </div>
    </div>   
        </section>
    
        <section>
            
            <div className="flipcard">

        <div className="flip-card-front">
        <h2 className='note-card-front'>Bill's Page</h2>
        </div>
        <div className="flip-card-back">
            <p className='note-card-title'> </p>
            <p className='note-card-text'>
                <a href="student-page-bill">View Bill's Student Site</a>
            </p>
        </div>
    </div>   
        </section>

        <section>
            
            <div className="flipcard">

        <div className="flip-card-front">
        <h2 className='note-card-front'>Bubba's Page</h2>
        </div>
        <div className="flip-card-back">
            <p className='note-card-title'> </p>
            <p className='note-card-text'>
                <a href="student-page-bubba">View Bubba's Student Site</a>
            </p>
        </div>
    </div>   
        </section> */}


     </main>
    )
}

export default StudentsList;