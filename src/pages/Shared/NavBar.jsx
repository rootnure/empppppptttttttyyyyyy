import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Container from "../../components/Container";
import { FaArrowRightToBracket } from "react-icons/fa6";

const NavBar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className="hover:text-white hover:bg-blue-500 border border-blue-500">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className="group hover:text-white hover:bg-blue-500 border border-blue-500">
          Login
          <FaArrowRightToBracket className="group-hover:rotate-[360deg] duration-300" />
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 drop-shadow-md fixed inset-x-0">
      <Container className="navbar">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost hover:bg-transparent hover:text-blue-600 text-xl">
            <img src={logo} className="h-full py-1" />
            <span>SCC Technovision Inc.</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-semibold gap-1 text-blue-500">
            {navItems}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
