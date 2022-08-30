import { alunoService } from "../services/alunoService"
import { Aluno } from "../classes/aluno"
import { ProcessoSeletivo } from "../classes/processoseletivo"
class controllerAluno{
    private alunoService = new alunoService();

    async inscreverNoPS(aluno: Aluno, ps : ProcessoSeletivo){
        await this.inscreverNoPS(aluno, ps);
    }
}