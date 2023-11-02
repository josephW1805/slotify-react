import { Album } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadCover = (album: Album) => {
  const supabaseClient = useSupabaseClient();

  if (!album) {
    return null;
  }

  const { data: imageData } = supabaseClient.storage
    .from("images")
    .getPublicUrl(album.image_path);

  return imageData.publicUrl;
};

export default useLoadCover;
