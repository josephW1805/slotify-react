import { Album } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getAllArtists = async (): Promise<Album[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data, error } = await supabase
    .from("artists")
    .select("*")
    .order("name");

  if (error) {
    console.log(error);
  }

  return (data as any) || [];
};

export default getAllArtists;
