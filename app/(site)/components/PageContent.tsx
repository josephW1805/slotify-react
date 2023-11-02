"use client";
import ArtistItem from "@/components/ArtistItem";
import { createSlugFromString } from "@/libs/helpers";
import { Artist } from "@/types";
import { useRouter } from "next/navigation";

interface ArtistContentProps {
  artists: Artist[];
}

const ArtistContent: React.FC<ArtistContentProps> = ({ artists }) => {
  const router = useRouter();
  if (artists.length === 0) {
    return <div className="mt-4 text-neutral-400">No artists available.</div>;
  }

  const handleArtistClick = (slug: string) => {
    // Navigate to the individual artist page with the given slug
    router.push(`/artist/${slug}`);
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
      {artists.map((artist, index) => (
        <div key={index}>
          <ArtistItem
            data={artist}
            onClick={() => handleArtistClick(createSlugFromString(artist.name))}
          />
        </div>
      ))}
    </div>
  );
};

export default ArtistContent;
