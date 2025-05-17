import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <div className="flex text-gray-100">
        <div className="flex-1" />
        <div className="flex flex-1 items-center flex-col h-screen">
          <div className="flex-1" />
          <div className="flex-4 w-1/2 justify-center m-5 h-1/2 shadow-xl hover:shadow-2xl bg-gray-600/80 border-gray-600 border-2 rounded-2xl ">
            <h1 className="text-4xl font-bold mb-4 mt-7 text-center p-7 ">
              Registration
            </h1>

            <form class="max-w-md mt-10 mx-5 space-y-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="email"
                placeholder="Email"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                class="w-full shadow-md hover:shadow-lg bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700"
              >
                Register
              </button>
            </form>
            <p className="m-7">
              if you have a account{" "}
              <Link to="/login" className="font-bold">
                <b>Sign In</b>
              </Link>
            </p>
          </div>
          <div className="flex-2" />
        </div>
      </div>
    </>
  );
}
