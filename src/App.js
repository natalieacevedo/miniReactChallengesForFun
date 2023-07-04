import "./App.css";
import FetchAPI from "./FetchAPI";
import AxiosApi from "./AxiosApi";
import Counter from "./Counter";
import AddDeleteItems from "./AddDeleteItems";
import FetchSecondApi from "./FetchSecondApi";
import Person from "./Person";
import RenderRobots from "./RenderRobots";
import NestedObj from "./NestedObj";
import Expandable from "./ExpandableList";
import Puzzle from "./Puzzle"; //work on it later
import TicTac from "./TicTacToe";

function App() {
  return (
    <div className="App">
      <h1>My wonderful app</h1>
      <TicTac />
    </div>
  );
}

export default App;
