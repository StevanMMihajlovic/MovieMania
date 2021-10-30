import { Movie } from "./movie.model";

export class MovieList {
    count: number;
    results: Movie[];

    constructor(obj?:any) {
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results && obj.results.map((x:any) => {
            return new Movie(x);
        }) || [];
    }
}