import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="App">
      {toggle && <Alert onClick={() => setToggle(false)} />}
      <Button type="primary" onClick={() => setToggle(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
