import { ReactElement } from "react";

import Bookshelf from "./components/bookshelf";

import "./App.css";

function App(): ReactElement {
  function changeTheChannel() {}

  return (
    <div className="container">
      <div
        className="tv"
        onClick={() => {
          changeTheChannel();
        }}
      >
        <div className="tv-contents-1" id="TvContents">
          <div className="screen"></div>
          <div className="text">rickcel</div>
        </div>
        <img
          src="https://i.imgur.com/8AEPcuZ.png"
          alt="tv"
          className="tv-top"
        />
      </div>
      <Bookshelf />
    </div>
  );
}

export default App;
