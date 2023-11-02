"use client";

import useLoadAvatar from "@/hooks/useLoadAvatar";
import { Artist } from "@/types";
import Image from "next/image";

interface ArtistItemProps {
  data: Artist;
  onClick: (id: string) => void;
}

const ArtistItem: React.FC<ArtistItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadAvatar(data);

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
      </div>
    </div>
  );
};

export default ArtistItem;
