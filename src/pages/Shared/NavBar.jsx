import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Container from "../../components/Container";
import {
  FaArrowRightFromBracket,
  FaArrowRightToBracket,
  FaCalendar,
} from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const { user } = useAuth();
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
          to="/dashboard"
          className="hover:text-white hover:bg-blue-500 border border-blue-500">
          Dashboard <FaCalendar />
        </NavLink>
      </li>
      {user ? (
        <>
          <li className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="hover:bg-blue-500">
              <img
                src={user?.photoURL || "https://i.ibb.co/yp2YxZf/Profile.png"}
                className="w-5 aspect-square rounded-full scale-[140%]"
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li className="text-center py-2 text-black">
                {user?.displayName}
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="group hover:text-white hover:bg-blue-500 border border-blue-500">
                  Logout
                  <FaArrowRightFromBracket className="group-hover:rotate-[360deg] duration-300" />
                </NavLink>
              </li>
            </ul>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/login"
              className="group hover:text-white hover:bg-blue-500 border border-blue-500">
              Login
              <FaArrowRightToBracket className="group-hover:rotate-[360deg] duration-300" />
            </NavLink>
          </li>
        </>
      )}
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
          <ul className="menu menu-horizontal px-1 font-semibold gap-2 text-blue-500">
            {navItems}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
