import { Acoes } from './acoes'

export class Perfil {
    private nome: string;
    private criadoEm: Date;
    private alteradoEm: Date;
    private acoes: Array<Acoes>;
    constructor(nome: string, criadoEm: string, alteradoEm: string, acoes:Array<Acoes>){
        this.nome = nome;
        this.criadoEm = new Date(criadoEm);
        this.alteradoEm = new Date(alteradoEm);
        this.acoes = acoes;
    }
    public adicionarNovaAcao(acao: Acoes){ 
        this.acoes.push(acao);
    }
    podeExecutar(acao: Acoes): boolean{
        const podeAcessar =
        acao.nome === "CRIAR_EVENTO" ||
        acao.nome === "DESATIVAR_GRUPO";

        if(podeAcessar){
            return true;
        }
        return false;
    }
}