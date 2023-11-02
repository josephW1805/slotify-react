import { Album } from "@/types";
import {
  createServerComponentClient,
  SupabaseClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getAlbumsByArtist = async (
  artistId: string | string[] | undefined
): Promise<Album[]> => {
  // Check if artistId is defined and is a string before trying to convert it to a number.
  if (artistId === undefined || typeof artistId !== "string") {
    return [];
  }

  // Convert albumId to a number.
  const artistIdNumber: number = parseInt(artistId, 10);

  if (isNaN(artistIdNumber)) {
    return [];
  }

  const supabase: SupabaseClient = createServerComponentClient({
    cookies: cookies,
  });

  const { data, error } = await supabase
    .from("albums")
    .select("*")
    .eq("artist_id", artistIdNumber)
    .order("created_at", { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return data || [];
};

export default getAlbumsByArtist;
