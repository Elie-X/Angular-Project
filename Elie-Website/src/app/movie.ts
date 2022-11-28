export interface Movie {
    id: number;
    backdrop_path: string;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    runtime: string;
}

export const initMovie: Movie = {backdrop_path: "", id: 0, title: "", overview: "", poster_path: "", release_date: "", runtime: ""}