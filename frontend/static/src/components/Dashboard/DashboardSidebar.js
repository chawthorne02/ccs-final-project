import { slide as Menu } from 'react-burger-menu';



function DashboardSidebar () {





return (

    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/laravel">
        Laravel
      </a>

      <a className="menu-item" href="/angular">
        Angular
      </a>

      <a className="menu-item" href="/react">
        React
      </a>

      <a className="menu-item" href="/vue">
        Vue
      </a>

      <a className="menu-item" href="/node">
        Node
      </a>
    </Menu>
    // <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
    //         <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
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
)

}

export default DashboardSidebar;