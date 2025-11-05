
import { Link, Outlet } from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/projects" className="navbar-link">Projects</Link></li>
        <li><Link to="/about" className="navbar-link">About</Link></li>
        <li><Link to="/contact" className="navbar-link">Contact</Link></li>
      </ul>
    </nav>

    <Outlet/>

    </>
  );
};

export default Navbar;