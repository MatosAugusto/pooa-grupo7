import { Aluno } from "../classes/aluno";
import { repositoryAluno } from "../repositorio/repositoryAluno";
import { checkStatusAluno } from "../interfaces/iIntegracao";
import { ProcessoSeletivo } from "../classes/processoseletivo";

export class serviceProcessoSeletivo{
    private repositoryAluno = new repositoryAluno();
    async checarAluno(aluno: Aluno, ps : ProcessoSeletivo){
        if(!this.repositoryAluno.getById(aluno.getRA())){
            throw new Error("Usuario não cadastrado!");           
        }
        if(!checkStatusAluno(aluno.getRA())){
            throw new Error("Aluno não está cumprindo os requisitos!"); 
        }    
        return true;
    }
}
