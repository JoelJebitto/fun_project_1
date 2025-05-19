import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="flex text-gray-100">
        <div className="flex-1" />
        <div className="flex flex-1 items-center flex-col h-screen">
          <div className="flex-1" />
          <div className="flex-4 w-1/2 justify-center m-5 h-1/2 shadow-xl hover:shadow-2xl  bg-gray-600/80 border-gray-600 border-2 rounded-2xl ">
            <h1 className="text-4xl font-bold mb-4 mt-7 text-center p-7 ">
              Login
            </h1>

            <form className="max-w-md mt-10 mx-5 space-y-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <button
                type="submit"
                className="w-full shadow-md hover:shadow-lg bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700"
                onClick={(e) => {
                  e.preventDefault();
                  fetch("http://localhost:3000/login", {
                    method: "POST",
                    body: JSON.stringify({
                      username,
                      password,
                    }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                    .then((res) => {
                      return res.json();
                    })
                    .then((data) => {
                      console.log(data);
                      alert(data.message);
                      localStorage.setItem("token", data.token);
                    });
                }}
              >
                Login
              </button>
            </form>
            <p className="m-7">
              if you don't have a account{" "}
              <Link to="/signup" className="font-bold">
                <b>Sign Up</b>
              </Link>
            </p>
          </div>
          <div className="flex-2" />
        </div>
      </div>
    </>
  );
}
