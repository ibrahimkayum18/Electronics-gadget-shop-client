import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const appliedUser = {
            name, 
            photo,
            email,
            password
        }
        createUser(email, password)
        .then(res => {
            console.log(res.user);

            navigate('/login')
        })
        .catch(error => {
            console.log(error);
        })
    }
  return (
    <div className="pt-5  md:pt-8  lg:pt-14 pb-5  md:pb-8  lg:pb-14  bg-gray-200">
      <div className="space-y-7 w-[90%] md:w-[70%] lg:w-[50%] mx-auto bg-white p-10 rounded-lg">
        <h2 className="text-5xl text-center font-bold mb-10">
          Please Register
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="font-bold text-xl block mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name..."
              className="w-full rounded-lg py-3 bg-gray-300 px-5"
              id=""
            />
          </div>
          <div>
            <label className="font-bold text-xl block mb-2">Photo URL</label>
            <input
              type="text"
              name="photo"
              required
              placeholder="Your Photo URL..."
              className="w-full rounded-lg py-3 bg-gray-300 px-5"
              id=""
            />
          </div>
          <div>
            <label className="font-bold text-xl block mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email..."
              className="w-full rounded-lg py-3 bg-gray-300 px-5"
              id=""
            />
          </div>
          <div>
            <label className="font-bold text-xl block mb-2">password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Your Password..."
              className="w-full rounded-lg py-3 bg-gray-300 px-5"
              id=""
            />
          </div>
          <div>
              <button
                className="py-3 w-full rounded-lg bg-blue-600 text-xl font-bold text-white"
                type="submit"
              >
                Register
              </button>
            <p className="mt-5">
              Already Have An Account? Please{" "}
              <Link className="text-blue-600 font-bold underline" to={"/login"}>
                Log In
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
