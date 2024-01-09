import { ReactElement } from "react";

interface YouTubeProps {
  id: string;
}

function YouTube({ id }: YouTubeProps): ReactElement {
  return (
    <iframe
      width="310"
      height="250"
      src={`https://www.youtube.com/embed/${id}?si=${id}&autoplay=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="youtube"
    ></iframe>
  );
}

export default YouTube;
