import { ReactElement, useState } from "react";

import classNames from "classnames";
import EjectIcon from "@mui/icons-material/Eject";

import { TAPES, VHS_EJECT, VHS_INSERT } from "../constants";
import vcr from "../images/vcr.png";
import "./bookshelf.css";

interface BookshelfProps {
  videoId: string;
  setVideoId: (id: string) => void;
}

function Bookshelf({ setVideoId, videoId }: BookshelfProps): ReactElement {
  const [loadedTape, setLoadedTape] = useState(null);

  function eject() {
    if (videoId === "") {
      return;
    }
    new Audio(VHS_EJECT).play();
    setVideoId("");
  }

  function playTape(id: string): void {
    if (videoId !== "") {
      return;
    }
    new Audio(VHS_INSERT).play();
    setVideoId(id);
  }

  return (
    <div className="bookshelf">
      <div className="shelf vcr-shelf">
        <div className="vcr-container">
          <img className="vcr" alt="vcr" src={vcr} />
          <div className="vcr-text blink">12:00</div>
          <EjectIcon
            className="eject"
            onClick={() => {
              eject();
            }}
          />
        </div>
      </div>
      <div className="shelf vhs-shelf">
        {TAPES.map((tape, i) => (
          <div
            className={classNames("vhs", `vhs-${i}`, {
              playing: videoId === tape.videoId,
            })}
            onClick={() => {
              playTape(tape.videoId);
            }}
          >
            <div className="vhs-label">{tape.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookshelf;
