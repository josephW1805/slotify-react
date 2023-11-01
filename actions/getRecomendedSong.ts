import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getRecomendedSong = async (): Promise<Song[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase
        .from('songs')
        .select('*')
        .eq('album_id',1)
        .order('created_at', {ascending: true})

    if (error) {
        console.log(error.message)
    }

    return (data as any) || [];
}

export default getRecomendedSong;