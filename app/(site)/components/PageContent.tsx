"use client";
import AlbumItem from "@/components/AlbumItem";
import { Album } from "@/types";

interface PageContentProps {
  albums: Album[];
}

const PageContent: React.FC<PageContentProps> = ({ albums }) => {
  if (albums.length === 0) {
    return <div className="mt-4 text-neutral-400">No albums available.</div>;
  }
  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-7
        gap-4
        mt-4
      "
    >
      {albums.map((album, index) => (
        <div key={index}>
          <AlbumItem data={album} onClick={() => {}} />
        </div>
      ))}
    </div>
  );
};

export default PageContent;
