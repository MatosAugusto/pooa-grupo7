import { Aluno } from "../classes/aluno";
import { ProcessoSeletivo } from "../classes/processoseletivo";
import { alunoService } from "../services/serviceAluno";

interface iAluno{
    (aluno: Aluno, ps : ProcessoSeletivo): void;
}    
    
    function inscreverNoPS: iAluno = (aluno, ps) =>{
        const aluno = new usuarioService();
        aluno.inscreverNoPs(aluno, ps);
    }
