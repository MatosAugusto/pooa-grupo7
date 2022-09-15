import { Perfil } from './perfil'

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
    public atualizaUsuario(idUsuario: string, novosDados: Usuario){
    }
    public removeUsuario(idUsuario: string){}
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
    public setPerfil(perfil: Perfil){
        this.perfil=perfil;
    }
}