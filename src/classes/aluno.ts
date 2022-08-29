import { Usuario } from './usuario'
import { Disciplinas } from './disciplinas'
import { Perfil } from './perfil'

export class Aluno extends Usuario{
    private RA: string;
    private disciplinas: Disciplinas[];
    private statusBiblioteca: boolean;
    constructor(RA: string, disciplinas: Disciplinas[], statusBiblioteca: boolean, nome: string, cpf: string, dataNascimento: Date, senha: string, perfil: Perfil){
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
}