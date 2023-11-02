import { Artist } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadAvatar = (artist: Artist) => {
  const supabaseClient = useSupabaseClient();

  if (!artist) {
    return null;
  }

  const { data: imageData } = supabaseClient.storage
    .from("images")
    .getPublicUrl(artist.avatar ?? "");

  return imageData.publicUrl;
};

export default useLoadAvatar;
