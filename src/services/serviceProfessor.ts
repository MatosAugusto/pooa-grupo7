import { Professor } from "../classes/professor";
import { repositoryProfessor } from "../repositories/repositoryProfessor";
import { repositoryUsuario } from "../repositories/repositoryUsuario";

export class serviceProfessor{
    private professorRepository = new repositoryProfessor();
    private usuarioRepository = new repositoryUsuario();

    async adicionarProfessor(professor: Professor){
        if(!this.usuarioRepository.getByCpf(professor.getCpf())){
            throw new Error("Usuário não encontrado!");
        }
        this.professorRepository.insert(professor);
    }

    async buscarProfessores(){
        return this.professorRepository.getAll();
    }

    async buscarProfessorPorCPF(cpf: string){
        return this.professorRepository.getById(cpf);
    }

    async deletarProfessor(professor: Professor){
        if(!this.usuarioRepository.getByCpf(professor.getCpf())){
            throw new Error("Usuário não encontrado!");
        }
        this.professorRepository.delete(professor);
    }

    async mudarProfessor(professor: Professor){
        if(!this.usuarioRepository.getByCpf(professor.getCpf())){
            throw new Error("Usuário não encontrado!");
        }
        this.professorRepository.update(professor);
    }

    
}
