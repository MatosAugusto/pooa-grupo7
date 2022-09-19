import { Usuario } from "./usuario"
import { Departamento } from "./departamento"
import { Perfil } from "./perfil"

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
    
    public getNroUniversidade(){
        return this.nroUniversidade;
    }
    
    public getDepartamento(){
        return this.departamento;
    }
    
    public getStatusBiblioteca(){
        return this.statusBiblioteca;
    }

    public setNroUniversidade(numero: string){
        this.nroUniversidade = numero;
    }

    public setDepartamento(departamento: Departamento){
        this.departamento = departamento;
    }

    public changeStatusBiblioteca(){
        if(this.statusBiblioteca){
            this.statusBiblioteca = false;
        }else{
            this.statusBiblioteca = true;
        }
    }
}
