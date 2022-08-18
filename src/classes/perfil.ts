class Perfil {
    private nome: string;
    private criadoEm: Date;
    private alteradoEm: Date;
    constructor(nome: string, criadoEm: string, alteradoEm: string){
        this.nome = nome;
        this.criadoEm = new Date(criadoEm);
        this.alteradoEm = new Date(alteradoEm);
    }
    public adicionarNovaAcao(nomeAcao: string, codigoAcao: string){ 
    }
    public podeExecutar(nomeAcao: string, codigoAcao: string){

    }
}