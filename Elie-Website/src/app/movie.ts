export interface Movie {
    id: number;
    backdrop_path: string;
    title: string;
}

export const initMovie: Movie = {backdrop_path: "", id: 0, title: ""}