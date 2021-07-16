import "./App.css";
import { useEffect, useState } from "react";
import background from "./backgrounds";

function App() {
  const [select, setSelect] = useState({ name: "toboggan" });
  useEffect(() => {}, [select]);

  const handleChange = (event) => {
    setSelect({
      name: event.target.value,
    });
  };

  const display = background.find((f) => select.name === f.name);

  return (
    <div className="App-header">
      {(display?.type === "mp4" && (
        <video
          className="App-header"
          width="100%"
          height="100%"
          loop
          autoplay="true"
          controls
        >
          <source src={display.source} type="video/mp4" />
        </video>
      )) ||
        (display?.type === "jpg" && (
          <img className="App-header" src={display.source} alt="" />
        ))}
      <select onChange={handleChange} name={select.name}>
        {background.map((bg, i) => {
          return <option name={bg.name}>{bg.name}</option>;
        })}
      </select>
    </div>
  );
}

export default App;
