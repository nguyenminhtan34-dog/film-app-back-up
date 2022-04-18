import { useState } from "react";
import ReactPlayer from "react-player";

import { VscMute, VscUnmute } from "react-icons/vsc";
import "../intro/intro.scss";

const Intro = () => {
  const [isMuted, setIsMuted] = useState(false);
  return (
    <div className="intro">
      <ReactPlayer
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        volume={1}
        muted={isMuted}
        url="https://vimeo.com/44925230"
        className="intro-video"
      />
      <div className="intro-info">
        <h1 className="intro-info-heading">Spider Man</h1>
        <p className="intro-info-overview">
          When an extortionist threatens to force a multi-suicide unless a huge
          ransom is paid, only Peter Parker can stop him with his new powers as
          Spider-Man.
        </p>
      </div>
      {isMuted ? (
        <VscMute
          className="btn-volume"
          onClick={() => setIsMuted((pre) => !pre)}
        />
      ) : (
        <VscUnmute
          className="btn-volume"
          onClick={() => setIsMuted((pre) => !pre)}
        />
      )}

      <div className="fade-bottom"></div>
    </div>
  );
};

export default Intro;
