import Filters from "./components/Filters";
import Nav from "./components/Nav";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="h-screen">
      <Nav />
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <SearchBox />
        </div>
        <div className="col-span-1">
          <Filters />
        </div>
      </div>
    </div>
  );
}

export default App;
