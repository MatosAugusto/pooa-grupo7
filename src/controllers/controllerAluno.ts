import { Aluno } from "../classes/aluno"
import { ProcessoSeletivo } from "../classes/processoseletivo"
import { serviceAluno } from "../services/serviceAluno"

class controllerAluno{
    private serviceAluno = new serviceAluno();

    async adicionarAluno(aluno: Aluno){
        await this.serviceAluno.adicionarAluno(aluno);
    }

    async buscarAlunos(){
        return await this.serviceAluno.buscarAlunos();
    }
    
    async buscarAlunoPorRA(ra: string){
        return await this.serviceAluno.buscarAlunoPorRA(ra);
    }

    async deletarAluno(aluno: Aluno){
        await this.serviceAluno.deletarAluno(aluno);
    }

    async mudarAluno(aluno: Aluno){
        await this.serviceAluno.mudarAluno(aluno);
    }

    async inscreverNoPS(aluno: Aluno, ps : ProcessoSeletivo){
        await this.serviceAluno.inscreverNoPS(aluno, ps);
    }
}
