import { AddItems } from "./components/AddItems";
import { DisplayItems } from "./components/DisplayItems";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    setItems([...items, item]);
  };
  return (
    <div className="flex flex-col items-center gap-2 h-screen py-4">
      <AddItems addItem={addItem} />
      <DisplayItems items={items} />
    </div>
  );
}

export default App;
