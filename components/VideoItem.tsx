import { Video } from "@/types";
import React, { useRef, useCallback } from "react";
import ReactPlayer from "react-player";
import PlayButton from "@/components/PlayButton";

const VideoItem: React.FC<{ video: Video }> = ({ video }) => {
  const videoRef = useRef<ReactPlayer | null>(null);

  const handleFullScreenClick = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.getInternalPlayer()?.requestFullscreen();
    }
  }, []);

  // Check if the user is on an iOS device
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <div
      className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 cursor-pointer"
      onClick={handleFullScreenClick}
    >
      <ReactPlayer
        ref={videoRef}
        url={video.video_url}
        controls
        muted={isIOS} // Mute for iOS devices
      />
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
      <p>{video.name}</p>
    </div>
  );
};

export default VideoItem;
