"use client";

import React from "react";
import { Video } from "@/types";
import VideoItem from "@/components/VideoItem";

interface VideoContentProps {
  videos: Video[];
}

const VideoContent: React.FC<VideoContentProps> = ({ videos }) => {
  if (videos.length === 0) {
    return <div className="mt-4 text-neutral-400">No videos available.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-4 mt-4">
      {videos.map((video, index) => (
        <VideoItem key={index} video={video} />
      ))}
    </div>
  );
};

export default VideoContent;
