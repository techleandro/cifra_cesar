import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // trying to put this on an input

  const [newStringInput, setNewStringInput] = useState("");
  const [newCypheredString, setNewCypheredString] = useState("");

  console.log("ab", newStringInput);

  let cypheredStringArray = [];

  const cypher = () => {
    const stringToCypher = newStringInput;
    const stringToCypherArray = stringToCypher.toLowerCase().split("");

    cypheredStringArray = [];

    stringToCypherArray.map((char) => {
      if (char === " ") {
        cypheredStringArray.push(char);
      } else {
        const indexNumber = alphabet.indexOf(char);
        const cypherNumber = indexNumber + 3;
        cypheredStringArray.push(alphabet[cypherNumber]);
      }

      // treating the new string
      const cypheredString = cypheredStringArray
        .toString()
        .replaceAll(",", "")
        .trim();

      console.log("nova string->", cypheredString);
      setNewCypheredString(cypheredString);
      console.log("nova string->", newCypheredString);

      return newCypheredString;
    });
  };

  return (
    <div className="App">
      <input
        type="text"
        id="cypherText"
        name="cypherText"
        onChange={(e) => {
          setNewStringInput(e.target.value);
        }}
      />

      <button
        onClick={() => {
          cypher();
        }}
      >
        teste
      </button>
      <div>{newCypheredString}</div>
    </div>
  );
}

export default App;
