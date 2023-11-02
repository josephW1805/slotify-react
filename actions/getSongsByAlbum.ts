import { Song } from "@/types";
import {
  createServerComponentClient,
  SupabaseClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getSongsByAlbum = async (
  albumId: string | string[] | undefined
): Promise<Song[]> => {
  // Check if albumId is defined and is a string before trying to convert it to a number.
  if (albumId === undefined || typeof albumId !== "string") {
    return [];
  }

  // Convert albumId to a number.
  const albumIdNumber: number = parseInt(albumId, 10);

  if (isNaN(albumIdNumber)) {
    return [];
  }

  const supabase: SupabaseClient = createServerComponentClient({
    cookies: cookies,
  });

  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .eq("album_id", albumIdNumber)
    .order("created_at", { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return data || [];
};

export default getSongsByAlbum;
