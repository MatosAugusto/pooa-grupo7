import { Aluno } from "../classes/aluno";
import { ProcessoSeletivo } from "../classes/processoseletivo";
import { repositoryAluno } from "../repositorio/repositoryAluno";
import { repositoryPerfil } from "../repositorio/repositoryPerfil";
import { processoSeletivoService } from "./processoSeletivoService";
import { repositoryProcessoSeletivo } from "../repositorio/repositoryProcessoSeletivo";
export class alunoService{
    private alunoRepository = new repositoryAluno();
    private perfilRepository = new repositoryPerfil();
    private psService = new processoSeletivoService(); 
    private psRepository = new repositoryProcessoSeletivo();
    async inscreverNoPS(aluno: Aluno, ps: ProcessoSeletivo){
        if(await !this.alunoRepository.getById(aluno.getRA())){
            throw new Error("Aluno não encontrado!");            
        }
        if(await !this.perfilRepository.getByName(aluno.getPerfil().getNome())){
            throw new Error("Perfil não encontrado!"); 
        }
        if(await this.psService.checarAluno(aluno)){
            this.psRepository.insertAluno(aluno);
        }
        
    }
}
