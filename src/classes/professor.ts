import { Usuario } from './usuario'
import { Departamento } from './departamento'
import { Perfil } from './perfil'

class Professor extends Usuario{
    private nroUniversidade: string;
    private departamento: Departamento;
    private statusBiblioteca: boolean;
    constructor(nroUniversidade: string, departamento: Departamento, statusBiblioteca: boolean, nome: string, cpf: string, dataNascimento: string, senha: string, perfil: Perfil){
        super(nome, cpf, dataNascimento, senha, perfil);
        this.nroUniversidade = nroUniversidade;
        this.departamento = departamento;
        this.statusBiblioteca = statusBiblioteca;
    }
}
