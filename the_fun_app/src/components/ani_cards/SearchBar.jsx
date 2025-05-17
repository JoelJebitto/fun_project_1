export default function SearchBar() {
  return (
    <div className="bg-gray-400/90 flex rounded-4xl flex-1 my-5 shadow-2xl text-center">
      <button className="px-7 py-5 flex flex-row shadow-lg hover:shadow-xl  focus:bg-gray-400 hover:bg-gray-400/80 bg-gray-500/95 rounded-4xl m-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
        Filter
      </button>
      <input
        type="text"
        className="flex-1 px-5 outline-none border-gray-900 shadow-lg hover:shadow-xl my-2 mr-2 focus:bg-gray-300 hover:bg-gray-300/95 bg-gray-300/80 rounded-4xl "
      />
    </div>
  );
}
