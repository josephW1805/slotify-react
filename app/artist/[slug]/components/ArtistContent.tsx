"use client";
import AlbumItem from "@/components/AlbumItem";
import { createSlugFromString } from "@/libs/helpers";
import { Album } from "@/types";
import { useRouter } from "next/navigation";

interface ArtistContentProps {
  artistId: string;
  albums: Album[];
}

const ArtistContent: React.FC<ArtistContentProps> = ({ artistId, albums }) => {
  const router = useRouter();
  if (albums.length === 0) {
    return <div className="mt-4 text-neutral-400">No albums available.</div>;
  }

  const handleAlbumClick = (artistId: string, slug: string) => {
    // Navigate to the individual album page with the given slug
    router.push(`artists/${artistId}/albums/${slug}`);
  };

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
          <AlbumItem
            data={album}
            onClick={() =>
              handleAlbumClick(artistId, createSlugFromString(album.name))
            }
          />
        </div>
      ))}
    </div>
  );
};

export default ArtistContent;
