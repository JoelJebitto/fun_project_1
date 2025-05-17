import React from "react";

const Landing = () => {
  return (
    <>
      <div className="flex text-gray-100">
        <div className="flex-4" />
        <div className="flex flex-3 flex-col h-screen ">
          <div className="flex-11 w-3/4 justify-center px-5 m-5 h-1/2 shadow-xl hover:shadow-2xl border-gray-600 border-2 bg-gray-600/80 rounded-2xl ">
            <img
              src="/c5.jpeg"
              alt=""
              className="h-4/7  block mx-auto mt-10 rounded-4xl  shadow-xl hover:shadow-2xl"
            />

            <h1 className="text-4xl font-bold mb-2 mt-7 text-center p-4 ">
              Welcome To AniWorld
            </h1>
            <p class="text-base text-center mt-2 mb-7">
              This is a short description that gives more context or detail
              below the heading.
            </p>

            <button class="bg-gray-300 mx-auto block mt-7 shadow-mb hover:shadow-lg text-gray-900 text-lg text-center font-semibold py-3 px-6 rounded-lg hover:bg-gray-200">
              <a href="/ani_cards">Go to Main Site</a>
            </button>
          </div>
          <div className="flex-1" />
        </div>
      </div>
    </>
  );
};

export default Landing;
