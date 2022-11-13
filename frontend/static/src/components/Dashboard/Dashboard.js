import '../../styles/Dashboard.css';
import DashboardSidebar from './DashboardSidebar';
import Notes from '../Notes/Notes';
import Piechart from './PieChart';



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

    <div className="col main pt-5 mt-3">
         <DashboardSidebar />
        {/* <nav className='dashboard-nav'>
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Students</a></li>
            <li className="breadcrumb-item"><a href="#">Lessons</a></li>
            <li className="breadcrumb-item"><a href="#">Notes</a></li>
        </ol>
        </nav> */}
        <div className='dashboard-display'>
           
            <div className='piechart-display'>
                <h3 className='piechart-title'>View Students Progress:</h3>
                <div className='piechart'><Piechart /></div>
            </div>
        </div>
    </div> 
 
        /* <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            </button>
        </div>
        <div className="row mb-3">
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card bg-success text-white h-100">
                    <div className="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div className="rotate">
                        </div>
                        <h6 className="text-uppercase">Students</h6>
                        
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-danger h-100">
                    <div className="card-body bg-danger">
                        <div className="rotate">
                        </div>
                        <h6 className="text-uppercase">Lessons</h6>
                        
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-info h-100">
                    <div className="card-body bg-info">
                        <div className="rotate">
                        </div>
                        <h6 className="text-uppercase">Notes</h6>
                        
                    </div>
                </div>
            </div>
           <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-warning h-100">
                    <div className="card-body"> 
                        <h6 className="text-uppercase">Leave a Review </h6>
                    </div>
                </div>
            </div>
        </div>
 
        <hr/> */
        
    

    
    
        
)





}


export default Dashboard;