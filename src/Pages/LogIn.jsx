import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const LogIn = () => {
    const {logInWithEmail} = useContext(AuthContext);
    const handleLogIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const appliedUser = {
            email,
            password
        }
        logInWithEmail(email, password)
        .then(res => {
            console.log(res.user);
        })
        .catch(error => {
            console.log(error);
        })
    }
  return (
    <div className="pt-5  md:pt-8  lg:pt-14 pb-5  md:pb-8  lg:pb-14  bg-gray-200">
      <div className="space-y-7 w-[90%] md:w-[70%] lg:w-[40%] mx-auto bg-white p-10 rounded-lg">
        <h2 className="text-5xl text-center font-bold mb-10">Please Log In</h2>
        <form onSubmit={handleLogIn} className="space-y-7">
          <input
            type="email"
            name="email"
            placeholder="Your Email..."
            className="w-full rounded-lg py-3 bg-gray-300 px-5"
            id=""
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Your Password..."
            className="w-full rounded-lg py-3 bg-gray-300 px-5"
            id=""
          />
          <br />
          <div>
              <button
                className="py-3 w-full rounded-lg bg-blue-600 text-xl font-bold text-white"
                type="submit"
              >
                Log In
              </button>
            <p className="mt-5">New To ShopiFy? Please <Link className="text-blue-600 font-bold underline" to={'/register'}>Register</Link> </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
