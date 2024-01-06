import { ReactElement } from "react";

import vcr from "../images/vcr.png";
import "./bookshelf.css";

function Bookshelf(): ReactElement {
  return (
    <div className="bookshelf">
      <div className="shelf vcr-shelf">
        <img className="vcr" alt="vcr" src={vcr} />
      </div>
      <div className="shelf">
        <div className="vhs"></div>
      </div>
    </div>
  );
}

export default Bookshelf;
