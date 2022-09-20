export class Departamento{
    private id: string;
    private nome: string;
    private sigla: string;
    
    constructor(id: string, nome: string, sigla:string){
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

    public setID(id: string){
        this.id = id;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public setSigla(sigla: string){
        this.sigla = sigla;
    }
}