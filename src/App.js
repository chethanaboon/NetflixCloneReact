import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originalsUrl,actionUrl,comedyUrl,horrorUrl,romanceUrl,documentariesUrl} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originalsUrl} title="Netflix Originals" />
      <RowPost url={actionUrl} title="Action" isSmall />
      <RowPost url={comedyUrl} title="Comedy" isSmall />
      <RowPost url={horrorUrl} title="Horror" isSmall />
      <RowPost url={romanceUrl} title="Romance" isSmall />
      <RowPost url={documentariesUrl} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
