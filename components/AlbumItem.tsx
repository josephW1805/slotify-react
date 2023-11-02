"use client";

import { Album } from "@/types";
import useLoadCover from "@/hooks/useLoadCover";
import Image from "next/image";
import PlayButton from "./PlayButton";
import { BiSolidVideos } from "react-icons/bi";

interface AlbumItemProps {
  data: Album;
  onClick: (name: string) => void;
}

const AlbumItem: React.FC<AlbumItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadCover(data);
  return (
    <div
      onClick={() => onClick(data.name)}
      className="
                relative
                group
                flex
                flex-col
                items-center
                justify-center
                rounded-md
                overflow-hidden
                gap-x-4
                bg-neutral-400/5
                cursor-pointer
                hover:bg-neutral-400/10
                transition
                p-3
            "
    >
      <div
        className="
                    relative
                    aspect-square
                    w-full
                    h-full
                    rounded-md
                    overflow-hidden
                "
      >
        <Image
          className="object-cover"
          src={imagePath || "/images/liked.png"}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.name}</p>
        <p
          className="
                        text-neutral-400
                        text-sm
                        pb-4
                        w-full
                        truncate
                        flex
                        items-center
                        justify-between
                        
                    "
        >
          {data.published_date.toString()}
          {data.has_video && <BiSolidVideos size={25} />}
        </p>
      </div>
      <div
        className="
                absolute
                bottom-24
                right-5
            "
      >
        <PlayButton />
      </div>
    </div>
  );
};

export default AlbumItem;
