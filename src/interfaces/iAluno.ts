import { Aluno } from "../classes/aluno";
import { ProcessoSeletivo } from "../classes/processoseletivo";
import { serviceAluno } from "../services/serviceAluno";
import { serviceUsuario } from "../services/serviceUsuario";

interface iAluno{
    (aluno: Aluno, ps : ProcessoSeletivo): void;
}    
    
    function inscreverNoPS(aluno, ps){
        const aluno2 = new serviceAluno();
        aluno.inscreverNoPs(aluno, ps);
    }
