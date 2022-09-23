import { Usuario } from "./usuario"
import { Disciplina } from "./disciplina"
import { Perfil } from "./perfil"

export class Aluno extends Usuario{
    private RA: string;
    private disciplinas: Disciplina[];
    private statusBiblioteca: boolean;

    constructor(RA: string, disciplinas: Disciplina[], statusBiblioteca: boolean, nome: string, cpf: string, dataNascimento: Date, senha: string, perfil: Perfil){
        super(nome, cpf, dataNascimento, senha, perfil);
        this.RA = RA;
        this.disciplinas = disciplinas;
        this.statusBiblioteca = statusBiblioteca;
    }

    public getRA(){
        return this.RA;
    }

    public getDisciplinas(){
        return this.disciplinas;
    }

    public getStatusBiblioteca(){
        return this.statusBiblioteca;
    }

    public setRA(ra: string){
        this.RA = ra;
    }

    public insertDisciplinas(disciplina: Disciplina){
        this.disciplinas.push(disciplina);
    }

    public removeDisciplinas(disciplina: Disciplina){
        const index = this.disciplinas.indexOf(disciplina);
        this.disciplinas.splice(index, 1);
    }

    // por conta do status ser um valor booleano, não há a necessidade de um set, apenas um change
    public changeStatusBiblioteca(){
        if(this.statusBiblioteca){
            this.statusBiblioteca = false;
        }else{
            this.statusBiblioteca = true;
        }
    }
}