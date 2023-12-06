import { useState } from "react";
import Images from "./components/Images";
import Navbar from "./components/Navbar";

function App() {
  const [filter, setFilter] = useState("");

  function onlyLettersAndNumbers(str) {
    return /^[A-Za-z0-9]*$/.test(str);
  }

  const setWordFilter = (input) => {
    if (!onlyLettersAndNumbers(input)) {
      alert("Introduzca solo numeros o letras");
      window.location.reload();
    }

    setFilter(input);
  };

  return (
    <>
      <Navbar setFilter={setWordFilter} />
      <Images filter={filter} />
    </>
  );
}

export default App;
