import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="pt-5  md:pt-8  lg:pt-14 pb-5  md:pb-8  lg:pb-14  bg-gray-200">
      <div className="space-y-7 w-[90%] md:w-[70%] lg:w-[50%] mx-auto bg-white p-10 rounded-lg">
        <h2 className="text-5xl text-center font-bold mb-10">
          Please Register
        </h2>
        <form className="space-y-4">
          <div>
            <label className="font-bold text-xl block mb-2">Name</label>
            <input
              type="text"
              name="name"
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
              placeholder="Your Password..."
              className="w-full rounded-lg py-3 bg-gray-300 px-5"
              id=""
            />
          </div>
          <div>
            <Link>
              <button
                className="py-3 w-full rounded-lg bg-blue-600 text-xl font-bold text-white"
                type="submit"
              >
                Register
              </button>
            </Link>
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
