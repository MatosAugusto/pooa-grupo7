export class Local{
    private cep: string;
    private logradouro: string;
    private numero: number;
    private bairro: string;
    private cidade: string;
    
    constructor(cep: string, logradouro: string, numero: number, bairro: string, cidade:string){
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
    }
    
    public getCep(){
        return this.cep;
    }
    
    public getLogradouro(){
        return this.logradouro;
    }
    
    public getNumero(){
        return this.numero;
    }
    
    public getBairro(){
        return this.bairro;
    }
    
    public getCidade(){
        return this.cidade;
    }

    public setCep(cep: string){
        this.cep = cep;
    }

    public setLogradouro(logradouro : string){
        this.logradouro = logradouro;
    }

    public setNumero(numero: number){
        this.numero = numero;
    }

    public setBairro(bairro: string){
        this.bairro = bairro;
    }

    public setCidade(cidade: string){
        this.cidade = cidade;
    }
}