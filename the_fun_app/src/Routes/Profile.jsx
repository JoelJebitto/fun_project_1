export default function Profile() {
  return (
    <div className="flex h-screen right-0">
      <div className="flex-3"></div>
      <div className="flex-2 h-4/5 bg-gray-300 w-screen p-10 text-center rounded-3xl flex border  border-gray-700 flex-col items-center m-6">
        <img
          className="h-72 rounded-full w-72"
          src="https://i.pinimg.com/736x/f9/46/ed/f946ed85d0a9777499b9f8c5784e6387.jpg"
          alt=""
        />
        <h1 className="text-3xl m-10">GOKU</h1>
      </div>
    </div>
  );
}
