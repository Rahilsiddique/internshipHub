import { useContext } from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import SearchBox from "./components/SearchBox";
import { GlobalContext } from "./context/Context";

function App() {
  const { internships } = useContext(GlobalContext);
  console.log(internships);
  return (
    <div className="text-xl">
      <Navbar />
      <div className="grid md:grid-cols-3">
        <div className="col-span-2 p-3 grid place-items-center gap-3">
          <SearchBox />
          {internships.map(value => <Post {...value} />)}
        </div>
        <div className="col-span-1">filter</div>
      </div>
    </div>
  );
}

export default App;
