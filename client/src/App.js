import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="information">
        <label>Slot:</label>
        <input
          type="text"
        />
        <label>Porta:</label>
        <input
          type="number"
        />
        <label>SN:</label>
        <input
          type="text"
        />
        <label>State:</label>
        <input
          type="text"
        />
        <button>Salvar</button>
      </div>
      <div className="employees">
        <button>Exibir</button>
      </div>
    </div>
  );
}

export default App;
