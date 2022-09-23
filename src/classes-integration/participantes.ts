export class Participantes {
    idGrupo: number;
    raAluno: string;
    
    constructor(idGrupo: number, raAluno: string){
        this.idGrupo = idGrupo;
        this.raAluno = raAluno;
    }
    
    public getidGrupo(){
        return this.idGrupo;
    }
    
    public getraAluno(){
        return this.raAluno;
    }

    public setidGrupo(idGrupo: number){
        this.idGrupo = idGrupo;
    }

    public setraAluno(raAluno: string){
        this.raAluno = raAluno;
    }
}