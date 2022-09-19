import { Aluno } from "../classes/aluno";
import { ProcessoSeletivo } from "../classes/processoseletivo";
import { checkStatusAluno } from "../interfaces/iIntegracao";
import { repositoryAluno } from "../repositories/repositoryAluno";

export class serviceProcessoSeletivo{
    private repositoryAluno = new repositoryAluno();
    
    async checarAluno(aluno: Aluno){
        if(!this.repositoryAluno.getByID(aluno.getRA())){
            throw new Error("Usuario não cadastrado!");           
        }
        
        if(!checkStatusAluno(aluno)){
            throw new Error("Aluno não está cumprindo os requisitos!"); 
        }    
        return true;
    }
}
