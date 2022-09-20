import { Aluno } from "../classes/aluno";
import { ProcessoSeletivo } from "../classes/processoseletivo";
import { serviceProcessoSeletivo } from "./serviceProcessoSeletivo";
import { repositoryAluno } from "../repositories/repositoryAluno";
import { repositoryPerfil } from "../repositories/repositoryPerfil";
import { repositoryProcessoSeletivo } from "../repositories/repositoryProcessoSeletivo";
import { repositoryUsuario } from "../repositories/repositoryUsuario";

export class serviceAluno{
    private alunoRepository = new repositoryAluno();
    private perfilRepository = new repositoryPerfil();
    private psService = new serviceProcessoSeletivo(); 
    private psRepository = new repositoryProcessoSeletivo();
    private usuarioRepository = new repositoryUsuario();

    async adicionarAluno(aluno: Aluno){
        if(!this.usuarioRepository.getByCpf(aluno.getCpf())){
            throw new Error("Usuário não encontrado!");
        }
        this.alunoRepository.insert(aluno);
    }

    async buscarAlunos(){
        return this.alunoRepository.getAll();
    }

    async buscarAlunoPorRA(ra: string){
        return this.alunoRepository.getByID(ra);
    }

    async deletarAluno(aluno: Aluno){
        if(!this.usuarioRepository.getByCpf(aluno.getCpf())){
            throw new Error("Usuário não encontrado!");
        }
        this.alunoRepository.delete(aluno);
    }

    async mudarAluno(aluno: Aluno){
        if(!this.usuarioRepository.getByCpf(aluno.getCpf())){
            throw new Error("Usuário não encontrado!");
        }
        this.alunoRepository.update(aluno);
    }

    async inscreverNoPS(aluno: Aluno, ps: ProcessoSeletivo){
        if(!this.alunoRepository.getByID(aluno.getRA())){
            throw new Error("Aluno não encontrado!");
        }

        if(!this.perfilRepository.getByName(aluno.getPerfil().getNome())){
            throw new Error("Perfil não encontrado!"); 
        }

        if(!this.psService.checarAluno(aluno)){
            throw new Error("Aluno não está cumprindo os requisitos!");
        }

        this.psRepository.insertAluno(aluno, ps, 0);
        ps.getEtapas()[0].insertParticipante(aluno)
        
    }
}
