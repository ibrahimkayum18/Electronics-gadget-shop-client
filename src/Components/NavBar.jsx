import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";

const NavBar = () => {
  const { users, logOut } = useContext(AuthContext);
  const [mode, setMode] = useState("light")
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out Successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  function handleDark (){
    const html = document.documentElement
    if(mode === "light"){
      html.classList.remove('light')
      html.classList.add('dark')
      setMode('dark');
      localStorage.setItem("mode", "dark")
    }
    else{
      html.classList.remove('dark')
      html.classList.add('light')
      setMode('light')
      localStorage.setItem("mode", "light")
    }
  }
  useEffect( () => {
    const current = localStorage.getItem('mode') || "light"
    setMode(current);
    const html = document.documentElement
    html.classList.add(current)
  } , [])

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active underline text-red-600 font-bold"
            : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/addproduct"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active underline text-red-600 font-bold"
            : ""
        }
      >
        Add Product
      </NavLink>
      <NavLink
        to="/mycart"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active underline text-red-600 font-bold"
            : ""
        }
      >
        My Cart
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 lg:px-16 dark:bg-zinc-800 dark:text-white">
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
            className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex">
          <a href="">
            <img
              className="w-12 h-12 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMeWzy8mvFuquASe38AkbW2pqTbhcc0jYBELflWjv_Q&s"
              alt=""
            />
          </a>
          <a className="btn btn-ghost normal-case text-xl">Shopify</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5 text-xl">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <div  className="mr-5">
          <label  className="swap swap-rotate">
            <input type="checkbox" />
            <svg onClick={handleDark}
              className="swap-on fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg onClick={handleDark}
              className="swap-off fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
        <div>
          {users ? (
            <div>
              <div className="dropdown dropdown-bottom dropdown-end">
                <img
                  src={users.photoURL}
                  tabIndex={0}
                  className="h-14 w-15 rounded-full"
                  alt={users.displayName}
                />

                <ul
                  tabIndex={0}
                  className="dropdown-content z-[50] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button>{users.displayName}</button>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Log Out</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="btn">Log In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
