import { Aluno } from './aluno'
import { Etapa } from './etapa'

export class ProcessoSeletivo{
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
    public verificaAluno(aluno: Aluno){}
}