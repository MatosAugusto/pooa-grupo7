import { Aluno } from "../classes/aluno"
import { ProcessoSeletivo } from "../classes/processoseletivo"
import { serviceAluno } from "../services/serviceAluno"

class controllerAluno{
    private serviceAluno = new serviceAluno();

    async inscreverNoPS(aluno: Aluno, ps : ProcessoSeletivo){
        await this.serviceAluno.inscreverNoPS(aluno, ps);
    }
}
