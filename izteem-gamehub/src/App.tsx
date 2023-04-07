import "./App.css";
import ListGroup from "./components/ListGroup";
import Message from "./Message";

function App() {
  const items = ["New york", "Philadelphia", "Chicago", "India", "Pakistan"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className="App">
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
