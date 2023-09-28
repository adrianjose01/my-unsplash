import { useState } from "react";
import Images from "./components/Images";
import Navbar from "./components/Navbar";

function App() {
  const [filter, setFilter] = useState("");

  return (
    <>
      <Navbar setFilter={setFilter} />
      <Images filter={filter} />
    </>
  );
}

export default App;
