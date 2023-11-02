export interface Video {
    id: string;
    name: string;
    video_url: string
}

export interface Album {
    id: string;
    name: string;
    image_path: string;
    public_url: string;
    published_date: Date;
    has_video: boolean;
}

export interface Song {
    id: string;
    user_id: string;
    author: string;
    title: string;
    song_path: string;
    image_path: string;
}

export interface UserDetails {
    id: string;
    first_name: string;
    last_name: string;
    full_name?: string;
};
