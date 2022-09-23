import { Usuario } from "./usuario"
import { Aluno } from "./aluno"
import { GrupoAcademico } from "./grupoacademico"
import { Local } from "./local"


export class Evento{
    nome: string;
    dataCriacao: Date;
    status: string = "A_ACONTECER";
    horaInicio: Date;
    horaFim: Date;
    organizadores: Aluno[];
    cepLocal: string;
    local: Local;
    palestrantes: Usuario[];
    gruposResponsaveis: GrupoAcademico[];
    
    constructor(nome: string, data: string, status: string, horaInicio: number, horaFim: number, organizadores: Aluno[], cepLocal: string,local: Local, palestrantes: Usuario[], grupoResponsavel: GrupoAcademico[]){
        this.cepLocal = cepLocal;
        this.nome = nome; 
        this.dataCriacao = new Date(data);
        this.status = status;
        this.horaInicio = this.dataCriacao;
        this.horaFim = this.dataCriacao;
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
        return this.dataCriacao;
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
        this.dataCriacao = date;
    }

    public setHoraInicio(horaInicio: number){
        this.horaInicio = this.dataCriacao;
        this.horaInicio.setHours(horaInicio);
    }

    public setHoraFim(horaFim: number){
        this.horaFim = this.dataCriacao;
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