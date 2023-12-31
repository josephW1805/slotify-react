import getAlbumsByArtist from "@/actions/getAlbumsByArtist";
import getSongsByAlbum from "@/actions/getSongsByAlbum";
import Header from "@/components/Header";
import Image from "next/image";
import AlbumContent from "./components/AlbumContent";
import Button from "@/components/Button";
import { BiSolidVideos } from "react-icons/bi";
import Link from "next/link";
import { createSlugFromString } from "@/libs/helpers";

const AlbumPage = async ({
  params,
}: {
  params: { slug: string; artistId: string };
}) => {
  const albums = await getAlbumsByArtist(params.artistId);
  const album = albums.filter(
    (ele) => createSlugFromString(ele.name) === params.slug
  )[0];

  const albumId = album.id;
  const songs = await getSongsByAlbum(albumId.toString());
  const albumCover = album.public_url;

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
            <div className="relative h-32 w-32 lg:h-44 lg:w-44">
              <Image
                alt="Playlist"
                className="object-cover"
                fill
                src={albumCover}
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
              <p className="hidden md:block font-semibold text-sm">
                {album.published_date.toString()}
              </p>
              <h1
                className="
                                text-white
                                text-4xl
                                sm:text-5xl
                                lg:text-7xl
                                font-bold
                            "
              >
                {album.name}
              </h1>
              {album.has_video && (
                <Link href="/video">
                  <Button>
                    <div
                      className="flex
                    items-center justify-center"
                    >
                      <BiSolidVideos size={25} />
                      <span>MUSIC VIDEO</span>
                    </div>
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Header>
      <AlbumContent songs={songs} />
    </div>
  );
};

export default AlbumPage;
