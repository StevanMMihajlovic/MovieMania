
export class GenreList {
    results: Genre[];

    constructor(obj?:any) {;
        this.results = obj && obj.map((x:any) => { return new Genre(x);}) || [];
    }
}

export class Genre {
    _id: number;
    name: string;

    constructor(obj?:any) {
        this.name = obj && obj.name || "";
        this._id = obj && obj._id || 0;      
    }
}