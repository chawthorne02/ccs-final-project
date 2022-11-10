import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function DashboardNav () {
    return (
        <Tabs className="dashboard-tabs" fill >
        <Tab eventKey="home" title="Home">
          
        </Tab>
        <Tab eventKey="Lessons" title="Lessons">
        
        </Tab>
        <Tab eventKey="Notes" title="Notes">
          
        </Tab>
      </Tabs>
    )
}

export default DashboardNav;