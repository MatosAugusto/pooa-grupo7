import { Acao } from "./acao"

export class Perfil {
    private nome: string;
    private criadoEm: Date;
    private alteradoEm: Date;
    private acoes: Acao[];
    
    constructor(nome: string, criadoEm: string, alteradoEm: string, acoes: Acao[]){
        this.nome = nome;
        this.criadoEm = new Date(criadoEm);
        this.alteradoEm = new Date(alteradoEm);
        this.acoes = acoes;
    }

    public podeExecutar(acao: Acao): boolean{
        const podeAcessar =
        acao.getNome() === "CRIAR_EVENTO" ||
        acao.getNome() === "DESATIVAR_GRUPO";

        if(podeAcessar){
            return true;
        }
        return false;
    }
    
    public getNome(){
        return this.nome;
    }
    
    public getCriadoEm(){
        return this.criadoEm;
    }
    
    public getAlteradoEm(){
        return this.alteradoEm;
    }

    public getAcoes(){
        return this.acoes;
    }

    public insertAcao(acao: Acao){ 
        this.acoes.push(acao);
    }

    public removeAcao(acao: Acao){ 
        const index = this.acoes.indexOf(acao);
        this.acoes.splice(index, 1);
    }
}