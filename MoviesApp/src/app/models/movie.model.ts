
export class Movie {
    _id: number;
    name: string;
    description: string;
    director: string;
    genre: string;
    year: string;
    rating: string;
    duration: string;

    constructor(obj?:any) {
        this.name = obj && obj.name || "";
        this.director = obj && obj.director || "";
        this._id = obj && obj._id || 0;
        this.description = obj && obj.description || "";
        this.year = obj && obj.year || "";
        this.genre = obj && obj.genre || "";
        this.rating = obj && obj.rating || "";
        this.duration = obj && obj.duration || "";
        
    }
}