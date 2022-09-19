import { Perfil } from "./perfil"

export class Usuario {
    private nome: string;
    private cpf: string;
    private dataNascimento: Date;
    private senha: string;
    private perfil: Perfil;
    
    constructor(nome: string, cpf: string, dataNascimento: Date, senha: string, perfil: Perfil){
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = new Date(dataNascimento);
        this.senha = senha;
        this.perfil = perfil;
    }

    public getNome(){
        return this.nome;
    }
    
    public getCpf(){
        return this.cpf;
    }
    
    public getDataNascimento(){
        return this.dataNascimento;
    }
    
    public getSenha(){
        return this.senha;
    }
    
    public getPerfil() : Perfil{
        return this.perfil;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public setCpf(cpf: string){
        this.cpf = cpf;
    }

    public setDataNascimento(data: Date){
        this.dataNascimento = data;
    }

    public setSenha(senha: string){
        this.senha = senha;
    }
    
    public setPerfil(perfil: Perfil){
        this.perfil = perfil;
    }
}