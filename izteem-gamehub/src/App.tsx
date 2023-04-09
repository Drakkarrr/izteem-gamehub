import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button type="primary" onClick={() => console.log("Cliked!")}>
        Primary Button
      </Button>
      <Button type="secondary" onClick={() => console.log("Cliked!")}>
        Secondary Button
      </Button>
      <Button type="danger" onClick={() => console.log("Cliked!")}>
        Danger Button
      </Button>
      <Button type="warning" onClick={() => console.log("Cliked!")}>
        Warning Button
      </Button>
    </div>
  );
}

export default App;
