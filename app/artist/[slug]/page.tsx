import getAlbumsByArtist from "@/actions/getAlbumsByArtist";
import Header from "@/components/Header";
import ArtistContent from "./components/ArtistContent";
import getAllArtists from "@/actions/getAllArtists";
import { createSlugFromString } from "@/libs/helpers";

export const revalidate = 0;

const ArtistPage = async ({ params }: { params: { slug: string } }) => {
  const artists = await getAllArtists();
  const artist = artists.filter(
    (ele) => createSlugFromString(ele.name) === params.slug
  )[0];
  const artistId = artist.id;

  const albums = await getAlbumsByArtist(artistId.toString());

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">{artist.name}</h1>
        </div>
      </Header>
      <ArtistContent artistId={artistId} albums={albums} />
    </div>
  );
};

export default ArtistPage;
