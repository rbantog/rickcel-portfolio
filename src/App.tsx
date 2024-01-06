import { ReactElement } from "react";

import Bookshelf from "./components/bookshelf";

import "./App.css";

function App(): ReactElement {
  function changeTheChannel() {}

  return (
    <div className="container">
      <div
        className="tv"
        // onClick={() => {
        //   changeTheChannel();
        // }}
      >
        <div className="tv-contents-1" id="TvContents">
          <iframe
            width="310"
            height="250"
            src="https://www.youtube.com/embed/0UhRzXaWyEY?si=g7pYznx6cmlk7QCD&autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="youtube"
          ></iframe>
          <div className="screen"></div>
          {/* <div className="text">rickcel</div> */}
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
