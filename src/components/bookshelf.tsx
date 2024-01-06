import { ReactElement } from "react";

import vcr from "../images/vcr.png";
import "./bookshelf.css";

function Bookshelf(): ReactElement {
  return (
    <div className="bookshelf">
      <div className="shelf vcr-shelf">
        <div className="vcr-container">
          <img className="vcr" alt="vcr" src={vcr} />
          <div className="vcr-text blink">12:00</div>
        </div>
      </div>
      <div className="shelf vhs-shelf">
        <div className="vhs"></div>
        <div className="vhs"></div>
        <div className="vhs"></div>
        <div className="vhs"></div>
        <div className="vhs"></div>
        <div className="vhs"></div>
        <div className="vhs"></div>
        <div className="vhs"></div>
      </div>
    </div>
  );
}

export default Bookshelf;
