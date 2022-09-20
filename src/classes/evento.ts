import { Usuario } from "./usuario"
import { Aluno } from "./aluno"
import { GrupoAcademico } from "./grupoacademico"
import { Local } from "./local"


export class Evento{
    private nome: string;
    private data: Date;
    private status: string = "A_ACONTECER";
    private horaInicio: Date;
    private horaFim: Date;
    private organizadores: Aluno[];
    private local: Local;
    private palestrantes: Usuario[];
    private gruposResponsaveis: GrupoAcademico[];
    
    constructor(nome: string, data: string, status: string, horaInicio: number, horaFim: number, organizadores: Aluno[], local: Local, palestrantes: Usuario[], grupoResponsavel: GrupoAcademico[]){
        this.nome = nome; 
        this.data = new Date(data);
        this.status = status;
        this.horaInicio = this.data;
        this.horaFim = this.data;
        this.horaInicio.setHours(horaInicio);
        this.horaFim.setHours(horaFim);
        this.organizadores = organizadores;
        this.local = local;
        this.palestrantes = palestrantes;
        this.gruposResponsaveis = grupoResponsavel;
    }

    public getNome(){
        return this.nome;
    }
    
    public getData(){
        return this.data;
    }

    public getStatus(){
        return this.status;
    }
    
    public getHoraInicio(){
        return this.horaInicio;
    }

    public getHoraFim(){
        return this.horaFim;
    }
    
    public getOrganizadores(){
        return this.organizadores;
    }
    
    public getLocal(){
        return this.local;
    }

    public getPalestrantes(){
        return this.palestrantes;
    }
    
    public getGruposResponsaveis(){
        return this.gruposResponsaveis;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public setDate(date: Date){
        this.data = date;
    }

    public setHoraInicio(horaInicio: number){
        this.horaInicio = this.data;
        this.horaInicio.setHours(horaInicio);
    }

    public setHoraFim(horaFim: number){
        this.horaFim = this.data;
        this.horaFim.setHours(horaFim);
    }

    public insertOrganizador(organizador: Aluno){
        this.organizadores.push(organizador);
    }

    public removeOrganizador(organizador: Aluno){
        const index = this.organizadores.indexOf(organizador);
        this.organizadores.splice(index, 1);
    }

    public setLocal(local: Local){
        this.local = local;
    }

    public insertPalestrante(palestrante: Usuario){
        this.palestrantes.push(palestrante);
    }

    public removePalestrante(palestrante: Usuario){
        const index = this.palestrantes.indexOf(palestrante);
        this.palestrantes.splice(index, 1);
    }

    public insertGrupoResponsavel(grupo: GrupoAcademico){
        this.gruposResponsaveis.push(grupo);
    }

    public removeGrupoResponsavel(grupo: GrupoAcademico){
        const index = this.gruposResponsaveis.indexOf(grupo);
        this.gruposResponsaveis.splice(index, 1);
    }

}