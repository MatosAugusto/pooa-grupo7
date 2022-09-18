import { Aluno } from "../classes/aluno";
import { ProcessoSeletivo } from "../classes/processoseletivo";
import { repositoryAluno } from "../repositorio/repositoryAluno";
import { repositoryPerfil } from "../repositorio/repositoryPerfil";
import { serviceProcessoSeletivo } from "./serviceProcessoSeletivo";
import { repositoryProcessoSeletivo } from "../repositorio/repositoryProcessoSeletivo";
export class serviceAluno{
    private alunoRepository = new repositoryAluno();
    private perfilRepository = new repositoryPerfil();
    private psService = new serviceProcessoSeletivo(); 
    private psRepository = new repositoryProcessoSeletivo();
    async inscreverNoPS(aluno: Aluno, ps: ProcessoSeletivo){
        if(await !this.alunoRepository.getById(aluno.getRA())){
            throw new Error("Aluno não encontrado!");
        }
        if(await !this.perfilRepository.getByName(aluno.getPerfil().getNome())){
            throw new Error("Perfil não encontrado!"); 
        }
        if(await this.psService.checarAluno(aluno, ps)){
            this.psRepository.insertAluno(aluno, ps);
        }
        
    }
}
