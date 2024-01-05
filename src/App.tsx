import { ReactElement } from "react";
import "./App.css";

function App(): ReactElement {
  function changeTheChannel() {}

  return (
    <div className="continer">
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
        <img src="https://i.imgur.com/8AEPcuZ.png" className="tv-top" />
      </div>
    </div>
  );
}

export default App;
