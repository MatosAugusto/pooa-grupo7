export class Disciplinas{
    private id: string;
    private nome: string;
    constructor(id: string, nome: string){
        this.id = id;
        this.nome = nome;
    }
    public getId(){
        return this.id;
    }
    public getNome(){
        return this.nome;
    }
}