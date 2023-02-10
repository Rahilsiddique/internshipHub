import Navbar from "./components/Navbar";
import Post from "./components/Post";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="text-xl">
      <Navbar />
      <div className="grid md:grid-cols-3">
        <div className="col-span-2 p-3 grid place-items-center">
          <SearchBox />
          <Post />
        </div>
        <div className="col-span-1">filter</div>
      </div>
    </div>
  );
}

export default App;
