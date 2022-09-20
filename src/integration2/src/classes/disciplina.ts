export class Disciplina{
    private id: string;
    private nome: string;
    
    constructor(id: string, nome: string){
        this.id = id;
        this.nome = nome;
    }
    
    public getID(){
        return this.id;
    }
    
    public getNome(){
        return this.nome;
    }

    public setID(id: string){
        this.id = id;
    }

    public setNome(nome: string){
        this.nome = nome;
    }
}