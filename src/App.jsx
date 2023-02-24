import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import SearchBox from "./components/SearchBox";
import { internContext } from "./context/Context";

function App() {
  const { tempI } = internContext();
  return (
    <div className="text-xl">
      <Navbar />
      <div className="grid md:grid-cols-3">
        <div className="col-span-2 p-3 grid place-items-center gap-3">
          <SearchBox />
          {tempI.map(value => <Post {...value} />)}
        </div>
        <div className="col-span-1">
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default App;
