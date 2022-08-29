import { Usuario } from './usuario'
import { Aluno } from './aluno'
import { GrupoAcademico } from './grupoacademico'
import { Local } from './local'


export class Evento{
    private nome: string;
    private data: Date;
    private horaInicio: Date;
    private horaFim: Date;
    private organizadores: Aluno[];
    private local: Local;
    private palestrantes: Usuario[];
    private grupoResponsavel: GrupoAcademico[];
    constructor(nome: string, data: string, horaInicio: number, horaFim: number, organizadores: Aluno[], local: Local, palestrantes: Usuario[], grupoResponsavel: GrupoAcademico[]){
        this.nome = nome; 
        this.data = new Date(data);
        this.horaInicio = this.data;
        this.horaFim = this.data;
        this.horaInicio.setHours(horaInicio);
        this.horaFim.setHours(horaFim);
        //this.horaInicio = new Date().setHours(horaInicio);
       // this.horaFim = new Date().setHours(horaFim);
        this.organizadores = organizadores;
        this.local = local;
        this.palestrantes = palestrantes;
        this.grupoResponsavel = grupoResponsavel;
    }

    public getNome(){
        return this.nome;
    }
    
    public getData(){
        return this.data;
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
    
    public getGrupoResponsavel(){
        return this.grupoResponsavel;
    }

    public atualizarEvento(){}
}