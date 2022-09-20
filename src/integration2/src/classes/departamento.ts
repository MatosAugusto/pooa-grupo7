export class Departamento{
    id: number;
    nome: string;
    sigla: string;
    
    constructor(id: number, nome: string, sigla:string){
        this.id = id;
        this.nome = nome;
        this.sigla = sigla;
    }
    
    public getID(){
        return this.id;
    }

    public getNome(){
        return this.nome;
    }

    public getSigla(){
        return this.sigla;
    }

    public setID(id: number){
        this.id = id;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public setSigla(sigla: string){
        this.sigla = sigla;
    }
}