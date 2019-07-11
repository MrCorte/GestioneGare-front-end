export class Gara {
    Id: any;
    Nome: string;
    Data: Date;
    Sport: string;

    constructor(obj?: any) {
        if (obj) {
        this.Id = obj.Id;
        this.Nome = obj.Nome;
        this.Data = new Date(obj.Data);
        this.Sport = obj.Sport;
        }
    }
}
