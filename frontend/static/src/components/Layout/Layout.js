import { Outlet } from "react-router-dom";     
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// Outlet - A component that renders the next match in a set of matches.
// Index Route - A child route with no path that renders in the parent's outlet at the parent's URL.
// Layout Route - A parent route without a path, used exclusively for grouping child routes inside a specific layout.

function Layout({ superState, setSuperState, logoutUser }) {
  return (
    <>
      <Header superState={superState} setSuperState={setSuperState} logoutUser={logoutUser} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;