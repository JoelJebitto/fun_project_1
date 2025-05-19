export default function Card() {
  const data = {
    name: "Naruto Uzumaki",
    anime: "Naruto",
    image:
      "https://static.wikia.nocookie.net/naruto/images/9/97/Naruto_Uzumaki.png",
    DOB: "1999-10-10T00:00:00",
    info: "A ninja of the Hidden Leaf Village with dreams of becoming Hokage.",
  };

  return (
    <div className="bg-gray-300 m-5 p-3 w-1/4 text-center font-mono rounded-2xl shadow-2xl">
      <h1 className="text-3xl font-semibold font-mono">{data.name}</h1>
      <img
        src={data.image}
        alt=""
        className="block mx-auto h-40 rounded-xl m-5 shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl"
      />

      <h2>Anime : {data.anime}</h2>
      <h3>DOB : {data.DOB}</h3>
      <p>{data.info}</p>
    </div>
  );
}
