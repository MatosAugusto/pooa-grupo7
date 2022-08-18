
export class Local{
    private cep:string;
    private logradouro: string;
    private numero: number;
    private bairro: string;
    private cidade: string;
    constructor(cep: string, logradouro: string, numero: number, bairro: string, cidade:string){
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
    }
}