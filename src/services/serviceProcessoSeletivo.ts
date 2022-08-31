import { Aluno } from "../classes/aluno";
import { repositoryAluno } from "../repositorio/repositoryAluno";
import { checkStatusAluno } from "../interfaces/iIntegracao";

export class processoSeletivoService{
    private alunoRepository = new repositoryAluno();
    async checarAluno(aluno: Aluno){
        if(!this.alunoRepository.getById(aluno.getRA())){
            throw new Error("Usuario não cadastrado!");           
        }
        if(!checkStatusAluno(aluno.getRA())){
            throw new Error("Aluno não está cumprindo os requisitos!"); 
        }    
        return true;
    }
}
