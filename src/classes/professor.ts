import { Usuario } from './usuario'
import { Departamento } from './departamento'
import { Perfil } from './perfil'

export class Professor extends Usuario{
    private nroUniversidade: string;
    private departamento: Departamento;
    private statusBiblioteca: boolean;
    constructor(nroUniversidade: string, departamento: Departamento, statusBiblioteca: boolean, nome: string, cpf: string, dataNascimento: Date, senha: string, perfil: Perfil){
        super(nome, cpf, dataNascimento, senha, perfil);
        this.nroUniversidade = nroUniversidade;
        this.departamento = departamento;
        this.statusBiblioteca = statusBiblioteca;
    }
    public getUniversidade(){
        return this.nroUniversidade;
    }
    public getDepartamento(){
        return this.departamento;
    }
    public getstatusBiblioteca(){
        return this.statusBiblioteca;
    }
}
