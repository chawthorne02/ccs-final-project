import { Outlet } from "react-router-dom";     
import Header from "../Header/Header";

// Outlet - A component that renders the next match in a set of matches.
// Index Route - A child route with no path that renders in the parent's outlet at the parent's URL.
// Layout Route - A parent route without a path, used exclusively for grouping child routes inside a specific layout.

function Layout({ superState, logoutUser }) {
  return (
    <>
      <Header superState={superState} logoutUser={logoutUser} />
      <Outlet />
    </>
  );
}

export default Layout;