import { Usuario } from './usuario'

export class Aluno extends Usuario{
    private RA: string;
    private disciplinas: Disciplinas[];
    private statusBiblioteca: boolean;
    constructor(RA: string, disciplinas: Disciplinas[], statusBiblioteca: boolean, nome: string, cpf: string, dataNascimento: string, senha: string, perfil: Perfil){
        super(nome, cpf, dataNascimento, senha, perfil);
        this.RA = RA;
        this.disciplinas = disciplinas;
        this.statusBiblioteca = statusBiblioteca;
    }
}