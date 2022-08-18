export class Departamento{
    private id: string;
    private nome: string;
    private sigla: string;
    constructor(id: string, nome: string, sigla:string){
        this.id = id;
        this.nome = nome;
        this.sigla = sigla;
    }
}