import React from "react";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        image="https://randomuser.me/api/portraits/men/20.jpg"
        nameavatar="Mili Dan"
        online
      />
      <Contact
        image="https://randomuser.me/api/portraits/women/62.jpg"
        nameavatar="Em Dani"
        offline
      />
      <Contact
        image="https://randomuser.me/api/portraits/women/44.jpg"
        nameavatar="Bir Dano"
        online
      />
    </div>
  );
}

export default App;
