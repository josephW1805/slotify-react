import { Album } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getAllAlbums = async (): Promise<Album[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data, error } = await supabase
    .from("albums")
    .select("*")
    .order("published_date", { ascending: false });

  if (error) {
    console.log(error);
  }

  return (data as any) || [];
};

export default getAllAlbums;
