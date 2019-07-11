export class Atleta {
     Id: any;
    Nome: string;
    Cognome: string;
    Peso: number;
    Data: Date;

    constructor(obj?: any) {
        if (obj) {
            this.Id = obj.Id;
            this.Nome = obj.Nome;
            this.Cognome = obj.Cognome;
            this.Peso = obj.Peso;
            this.Data = new Date(obj.Data);
        }
    }
}
