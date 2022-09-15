import { serviceAluno } from "../services/serviceAluno"
import { Aluno } from "../classes/aluno"
import { ProcessoSeletivo } from "../classes/processoseletivo"
class controllerAluno{
    private serviceAluno = new serviceAluno();

    async inscreverNoPS(aluno: Aluno, ps : ProcessoSeletivo){
        await this.inscreverNoPS(aluno, ps);
    }
}
