import "./navbar.css";
import avatar from '../Img/avatar.svg';
import { FaBars, FaSearch, FaRegClock } from 'react-icons/fa';

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="icon-bars" aria-hidden="true"><FaBars /></i>
      </div>
      <div className="navbar__left">
        <a href="#">Subscribers</a>
        <a href="#">Video Management</a>
        <a className="active_link" href="#">
          Admin
        </a>
      </div>
      <div className="navbar__right">
        <a href="#">
          <i className="icon-search" aria-hidden="true"><FaSearch /></i>
        </a>
        <a href="#">
          <i className="icom-clock" aria-hidden="true"><FaRegClock /></i>
        </a>
        <a href="#!">
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
