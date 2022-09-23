export class Acao {
    nome: string;
    codigo: string;
    
    constructor(nome: string, codigo: string){
        this.nome = nome;
        this.codigo = codigo;
    }
    
    public getNome(){
        return this.nome;
    }
    
    public getCodigo(){
        return this.codigo;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public setCodigo(codigo: string){
        this.codigo = codigo;
    }
}