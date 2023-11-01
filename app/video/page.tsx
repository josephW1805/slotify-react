import getVideos from "@/actions/getVideos";
import Header from "@/components/Header";
import VideoContent from "./components/VideoContent";

export const revalidate = 0;

const Video = async () => {
  const videos = await getVideos();

  return (
    <div
      className="
                bg-neutral-900
                rounded-lg
                h-full
                w-full
                overflow-hidden
                overflow-y-auto
            "
    >
      <Header>
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-x-5">
            <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
              <p className="hidden md:block font-semibold text-sm">Playlist</p>
              <h1
                className="
                                    text-white
                                    text-4xl
                                    sm:text-5xl
                                    lg:text-7xl
                                    font-bold
                                "
              >
                Music Video
              </h1>
            </div>
          </div>
        </div>
      </Header>
      <VideoContent videos={videos} />
    </div>
  );
};

export default Video;
