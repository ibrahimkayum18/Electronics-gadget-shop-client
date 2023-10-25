import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";

const LogIn = () => {
    const {logInWithEmail, googleLogIn} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const handleLogIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const appliedUser = {
        //     email,
        //     password
        // }
        logInWithEmail(email, password)
        .then(() => {
            toast.success('User Logged In Successfully');
            navigate(location.state ? location.state : '/');
        })
        .catch(error => {
            toast.error(error.message);
        })
    }
    const handleGoogleLogIn = () => {
        googleLogIn()
        .then(() => {
            toast.success('User Logged In Successfully');
            navigate(location.state ? location.state : '/');

        })
        .catch(error => {
            toast.error(error.message);
        })
    }
  return (
    <div  data-aos="fade-up" className="pt-5  md:pt-8  lg:pt-14 pb-5  md:pb-8  lg:pb-14  bg-sky-100 dark:bg-zinc-800 dark:text-white">
      <div className="space-y-7 w-[90%] md:w-[70%] lg:w-[40%] mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 rounded-lg">
        <h2 className="text-5xl text-center font-bold mb-10">Please Log In</h2>
        <form onSubmit={handleLogIn} className="space-y-7">
          <input
            type="email"
            name="email"
            placeholder="Your Email..."
            className="w-full rounded-lg py-3 bg-gray-300 px-5"
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Your Password..."
            className="w-full rounded-lg py-3 bg-gray-300 px-5"
          />
          <br />
          <div>
              <button
                className="py-3 w-full rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-xl font-bold text-white"
                type="submit"
              >
                Log In
              </button>
            <p className="mt-5">New To ShopiFy? Please <Link className="text-white font-bold underline" to={'/register'}>Register</Link> </p>
            
          </div>
          <div className="text-center">
          <button onClick={handleGoogleLogIn} className=" text-2xl font-bold  text-orange-500  rounded-lg"><img className="h-14 border-2 border-blue-400 mx-auto rounded-xl" src="https://i.ibb.co/x2HXX6D/google-logo.png" alt="" /></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
