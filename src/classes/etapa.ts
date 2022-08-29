export class Etapa{
    private id: bigint;
    private nome: string;
    private descricao: string;
    constructor(id: bigint, nome: string, descricao: string){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    public getId(){
        return this.id;
    }
    public getNome(){
        return this.nome;
    }
    public getDescricao(){
        return this.descricao;
    }
}