import "./App.css";
import ListGroup from "./components/ListGroup";
import Message from "./Message";

function App() {
  const items = ["New york", "Philadelphia", "Chicago", "India", "Pakistan"];
  return (
    <div className="App">
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
