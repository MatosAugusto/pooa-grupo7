import { Usuario } from "./usuario"
import { Aluno } from "./aluno"
import { Departamento } from "./departamento"
import { Evento } from "./evento"

export class GrupoAcademico{
    private id: string;
    private nome: string;
    private descricao: string;
    private dataCriacao: Date;
    private status: boolean = true;
    private departamento: Departamento;
    private responsavel: Usuario;
    private representantes: Aluno[];
    private limiteParticipantes: number;
    private participantes: Aluno[];
    private listaEventos: Evento[];
    private eventosParticipados: Evento[];
    
    constructor(id: string, nome: string, descricao: string, dataCriacao:string, status: boolean, departamento: Departamento, responsavel: Usuario, representantes: Aluno[], limiteParticipantes: number, participantes: Aluno[], listaEventos: Evento[], eventosParticipados: Evento[]){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dataCriacao = new Date(dataCriacao);
        this.status = status;
        this.departamento = departamento;
        this.responsavel = responsavel;
        this.representantes = representantes;
        this.limiteParticipantes = limiteParticipantes;
        this.participantes = participantes;
        this.listaEventos = listaEventos;
        this.eventosParticipados = eventosParticipados;
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
    
    public getDataCriacao(){
        return this.dataCriacao;
    }
    
    public getStatus(){
        return this.status;
    }
    
    public getDepartamento(){
        return this.departamento;
    }
    
    public getResponsavel(){
        return this.responsavel;
    }

    public getRepresentantes(){
        return this.representantes;
    }
    
    public getLimiteParticipantes(){
        return this.limiteParticipantes;
    }
    
    public getParticipantes(){
        return this.participantes;
    }
    
    public getListaEventos(){
        return this.listaEventos;
    }
    
    public getEventosParticipados(){
        return this.eventosParticipados;
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

    public changeStatus(){
        if(this.status){
            this.status = false;
        }else{
            this.status = true;
        }
    }

    public setDepartamento(departamento: Departamento){
        this.departamento = departamento;
    }

    public setResponsavel(usuario: Usuario){
        this.responsavel=usuario;
    }    

    public insertRepresentante(aluno: Aluno){
        this.representantes.push(aluno);
    }
    
    public removeRepresentante(aluno: Aluno){
        const index = this.representantes.indexOf(aluno);
        this.representantes.splice(index, 1);
    }

    public setLimiteParticipantes(limiteParticipantes: number){
        this.limiteParticipantes = limiteParticipantes;
    }

    public insertParticipante(aluno: Aluno){
        this.participantes.push(aluno);
    }

    public removeParticipante(aluno: Aluno){
        const index = this.participantes.indexOf(aluno);
        this.participantes.splice(index, 1);
    }

    public insertEvento(evento: Evento){
        this.listaEventos.push(evento);
    }
    
    public removeEvento(evento: Evento){
        const index = this.listaEventos .indexOf(evento);
        this.listaEventos.splice(index, 1);
    }

    public insertEventoParticipado(evento: Evento){
        this.eventosParticipados.push(evento);
    }
    
    public removeEventoParticipado(evento: Evento){
        const index = this.eventosParticipados.indexOf(evento);
        this.eventosParticipados.splice(index, 1);
    }
}