import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";
import "./Video.css";

function Video() {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video_player"
        loop
        ref={videoRef}
        onClick={onVideoPress}
        src="https://v16m.tiktokcdn.com/e6d769fc2788e1777b4105ff1465885b/5f2b1cac/video/tos/useast2a/tos-useast2a-ve-0068c002/2cb6139628a54d7cbda934142ce1623c/?a=1233&br=3810&bt=1905&cr=0&cs=0&dr=0&ds=3&er=&l=20200803205507010190209216454A79BE&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=am02OHg7c3c6dTMzZjczM0ApPDQ5PGg4OztkNzw8ZDM7ZmdmXmgyMjM1MjVfLS0xMTZzc18xX2FeY2NgNGNiXy9fNjI6Yw%3D%3D&vl=&vr="
      />
      <VideoFooter
        channel="rafehqazi"
        description="Check out this dance"
        song="Usher-Yeah"
      />
      <VideoSideBar likes={300} messages={230} shares={41} />
    </div>
  );
}

export default Video;
