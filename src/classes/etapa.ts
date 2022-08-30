import { Aluno } from './aluno'

export class Etapa{
    private id: bigint;
    private nome: string;
    private descricao: string;
    private participantes: Aluno[];
    constructor(id: bigint, nome: string, descricao: string, participantes : Aluno[]){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.participantes = participantes;
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
    public getParticipantes(){
        return this.participantes;
    }
}