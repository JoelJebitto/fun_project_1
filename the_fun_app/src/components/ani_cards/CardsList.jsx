import Card from "./Card";
import cards from "../../Data/cards.json";

export default function CardsList() {
  return (
    <div className="bg-gray-500/98 hover:bg-gray-500/99 flex-10 flex-wrap flex justify-center  mx-auto border-gray-900 shadow-xl hover:shadow-2xl  rounded-2xl">
      {cards.map((item) => {
        return <Card data={item} />;
      })}
    </div>
  );
}
