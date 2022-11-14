import '../../styles/Dashboard.css';
import DashboardSidebar from './DashboardSidebar';
import Notes from '../Notes/Notes';
import Piechart from './PieChart';
import { motion } from 'framer-motion';
import StudentsList from './Studentslist';



function Dashboard() {


return (

    // <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
    //         <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3">
    //             <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="#"><h5>Welcome Denise!</h5></a></li>
    //             <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="#"><i class="fas fa-user font-weight-bold"></i> <span className="ml-3">Students</span></a></li>
    //             <li class="nav-item mb-2">
    //                 <a class="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i class="far fa-file-word font-weight-bold"></i> <span className="ml-3">Notes</span></a>
    //                 <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
    //                    <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""><i class="fas fa-book-reader"></i> </a></li>
    //                    <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""> <i class="fas fa-book-medical"></i> File Report </a></li>
    //                 </ul>
    //             </li>
    //             <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Lessons</span></a></li>

    //         </ul>
    //    </div>

    <motion.div 
    className="col main pt-5 mt-3"
        initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
         <DashboardSidebar />
        
        <div className='dashboard-display'>
            <h2 classname="student-pages-header">Student's Pages:</h2>
            <section>
                <StudentsList />
            </section>
            {/* <div className='piechart-display'>
                <h3 className='piechart-title'>View Students Progress:</h3>
                <div className='piechart'><Piechart /></div>
            </div> */}
        </div>
    </motion.div> 
 
        
    

    
    
        
)





}


export default Dashboard;