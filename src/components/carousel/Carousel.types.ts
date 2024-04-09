export type CarouselProps= {
    data: {
        id: number;
        poster_path: string | null;
        media_type: string;
        title: string;
        name: string;
        release_date: string;
        first_air_date: string;
        vote_average: number;
        genre_ids: number[];
    }[];
    loading: boolean;
    title?: string;
}