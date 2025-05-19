import CardsList from "../components/ani_cards/CardsList";
import CustemList from "../components/ani_cards/CustemLists";
import SearchBar from "../components/ani_cards/SearchBar";

export default function AniCard() {
  return (
    <div className="flex h-screen flex-col m-5">
      {/* INFO Search Area */}
      <SearchBar />
      {/* INFO Content AREA */}
      <div className="flex flex-10 space-x-5">
        <div className="flex-2 flex h-screen flex-col">
          <CustemList />
          <div className="flex-1" />
        </div>

        <CardsList />
      </div>
    </div>
  );
}
