import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active underline text-red-600 font-bold" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/addproduct"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active underline text-red-600 font-bold" : ""
        }
      >
        Add Product
      </NavLink>
      <NavLink
        to="/mycart"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active underline text-red-600 font-bold" : ""
        }
      >
        My Cart
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex">
        <a href=""><img className="w-12 h-12 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMeWzy8mvFuquASe38AkbW2pqTbhcc0jYBELflWjv_Q&s" alt="" /></a>
        <a className="btn btn-ghost normal-case text-xl">Shopify</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to={'/login'}>
        <button className="btn">Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;