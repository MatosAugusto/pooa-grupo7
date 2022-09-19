import { Professor } from "../classes/professor"
import { serviceProfessor } from "../services/serviceProfessor"

class controllerProfessor{
    private serviceProfessor = new serviceProfessor();

    async adicionarProfessor(professor: Professor){
        await this.serviceProfessor.adicionarProfessor(professor);
    }

    async buscarProfessores(){
        return await this.serviceProfessor.buscarProfessores();
    }
    
    async buscarProfessorPorRA(cpf: string){
        return await this.serviceProfessor.buscarProfessorPorCPF(cpf);
    }

    async deletarProfessor(professor: Professor){
        await this.serviceProfessor.deletarProfessor(professor);
    }

    async mudarProfessor(professor: Professor){
        await this.serviceProfessor.mudarProfessor(professor);
    }

}
