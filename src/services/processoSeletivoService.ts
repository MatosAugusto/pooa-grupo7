import { Aluno } from "../classes/aluno";
import { Perfil } from "../classes/perfil";
import { repositoryAluno } from "../repositorio/repositoryAluno";
import { repositoryPerfil } from "../repositorio/repositoryPerfil";
import { iIntegracao } from "../interfaces/iIntegracao";

export class processoSeletivoService{
    private alunoRepository = new repositoryAluno();
    private perfilRepository = new repositoryPerfil();
    async checarAluno(aluno: Aluno){
        if(!this.alunoRepository.getById(aluno.getRA())){
            throw new Error("Usuario não cadastrado!");            
        }
        checkStatusAluno(aluno.getRA);    
        this.alunoRepository.insert(aluno);
    }
}