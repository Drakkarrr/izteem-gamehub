import "./App.css";
import Icons from "./components/Icons";

function App() {
  return (
    <div className="App">
      <Icons onClick={() => console.log("clicked yeah")} />
    </div>
  );
}

export default App;
