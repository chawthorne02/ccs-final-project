import '../../styles/Dashboard.css';
import DashboardSidebar from './DashboardSidebar';
import Notes from '../Notes/Notes';
import Piechart from './PieChart';
import { motion } from 'framer-motion';
import StudentsList from './Studentslist';
import { handleError } from '../../errorhandling';
import { useState, useCallback, useEffect } from 'react';


function Dashboard() {


// const getStudents = useCallback (async () => {
//     const response = await fetch(`/api/v1/profiles/students/`).catch(handleError);
//     if (!response.ok) {
//       throw new Error("Network response was not OK");
//     } else {
//       const data = await response.json();
//       setStudents(data);
//     }
//   }, )


//   useEffect(() => {
//     getStudents();
//   }, [getStudents]);

return (

   

    <motion.div 
    className="col main pt-5 mt-3"
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: { duration: 0.4}}}
    >
         <DashboardSidebar />
        
        <div className='dashboard-display'>
            <h2 className="student-pages-header">Student's Pages:</h2>
            <section>
                <StudentsList />
            </section>
           
        </div>
    </motion.div> 
 
        
    

    
    
        
)





}


export default Dashboard;