import { Etapa } from "./etapa"

export class ProcessoSeletivo{
    private id : String;
    private data: Date;
    private nroInscritos: number;
    private nroVagas: number;
    private nroAprovados: number;
    private etapas: Etapa[];
    
    constructor(data: string, nroInscritos: number, nroVagas: number, nroAprovados: number, etapas: Etapa[]){
        this.data = new Date(data);
        this.nroInscritos = nroInscritos;
        this.nroVagas = nroVagas;
        this.nroAprovados = nroAprovados;
        this.etapas = etapas;
    }
    
    public getID(){
        return this.id;
    }
    
    public getData(){
        return this.data;
    }
    
    public getNroInscritos(){
        return this.nroInscritos;
    }
    
    public getNroVagas(){
        return this.nroVagas;
    }
    
    public getNroAprovados(){
        return this.nroAprovados;
    }

    public getEtapas(){
        return this.etapas;
    }

    public setID(id: string){
        this.id = id;
    }

    public setData(data: Date){
        this.data = data;
    }

    public setNroInscritos(numero: number){
        this.nroInscritos = numero;
    }

    public setNroVagas(numero: number){
        this.nroVagas = numero;
    }

    public setNroAprovados(numero: number){
        this.nroAprovados = numero;
    }

    public insertEtapa(etapa: Etapa){
        this.etapas.push(etapa);
    }

    public removeEtapa(etapa: Etapa){
        const index = this.etapas.indexOf(etapa);
        this.etapas.splice(index, 1);
    }
}