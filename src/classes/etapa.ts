import { Aluno } from "./aluno"

export class Etapa{
    private id: string;
    private nome: string;
    private descricao: string;
    private participantes: Aluno[];
    
    constructor(id: string, nome: string, descricao: string, participantes : Aluno[]){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.participantes = participantes;
    }
    
    public getID(){
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

    public setID(id: string){
        this.id = id;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public setDescricao(descricao: string){
        this.descricao = descricao;
    }

    public insertParticipante(participante: Aluno){
        this.participantes.push(participante);
    }

    public removeParticipante(participante: Aluno){
        const index = this.participantes.indexOf(participante);
        this.participantes.splice(index, 1);
    }
}