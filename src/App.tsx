import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  return (
    <>
      <div className="rectangle" style={{ backgroundColor: color }}></div>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
    </>
  );
}

export default App;
