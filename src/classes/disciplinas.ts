export class Disciplinas{
    private id: bigint;
    private nome: string;
    constructor(id: bigint, nome: string){
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