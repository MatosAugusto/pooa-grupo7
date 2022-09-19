import { Aluno } from "../classes/aluno";
import { ProcessoSeletivo } from "../classes/processoseletivo";
import { serviceProcessoSeletivo } from "./serviceProcessoSeletivo";
import { repositoryAluno } from "../repositories/repositoryAluno";
import { repositoryPerfil } from "../repositories/repositoryPerfil";
import { repositoryProcessoSeletivo } from "../repositories/repositoryProcessoSeletivo";

export class serviceAluno{
    private alunoRepository = new repositoryAluno();
    private perfilRepository = new repositoryPerfil();
    private psService = new serviceProcessoSeletivo(); 
    private psRepository = new repositoryProcessoSeletivo();
    
    async inscreverNoPS(aluno: Aluno, ps: ProcessoSeletivo){
        if(!this.alunoRepository.getByID(aluno.getRA())){
            throw new Error("Aluno não encontrado!");
        }

        if(!this.perfilRepository.getByName(aluno.getPerfil().getNome())){
            throw new Error("Perfil não encontrado!"); 
        }

        if(!this.psService.checarAluno(aluno)){
            throw new Error("Aluno não está cumprindo os requisitos!");
        }else{
            this.psRepository.insertAluno(aluno, ps);
            ps.getEtapas()[0].insertParticipante(aluno)
        }
    }
}
