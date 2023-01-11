import React from 'react';
import './App.css';

import Weather from "./Weather";
import News from "./News";
import ToDo from "./ToDo";

function App() {
  return (
  <main>
    <h1>Greetings, Farhan Syed Masood </h1>
    <Weather id="weather"/>
  <section>
    <div id="news">
      <h3>Latest headlines</h3>
      <News/>
    </div>
    <div id="todo">
      <h3>Today's Agenda</h3>
      <ToDo/>
    </div>
  </section>
  </main>
  );
}

export default App;