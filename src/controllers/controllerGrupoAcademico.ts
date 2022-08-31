import { Usuario } from "../classes/usuario";
import { grupoacademicoService } from "../services/serviceGrupoAcademico";
class ControllerGrupoAcademico{
    private serviceGrupoAcademico = new serviceGrupoAcademico(); 
    
    async getGrupoAcademicoByID(idGrupo: string, user : Usuario){
        await this.serviceGrupoAcademico.getById(idGrupo, user);
    }
    async getGrupoAcademicoByNome(nomeGrupo: string, user : Usuario){
        await this.serviceGrupoAcademico.getByNome(nomeGrupo, user);   
    }
    async getParticipantes(idGrupo: string, user : Usuario){
        await this.serviceGrupoAcademico.getParticipantes(idGrupo, user);
    }
    async getResponsavel(idGrupo: string, user : Usuario){
        await this.serviceGrupoAcademico.getResponsavel(idGrupo, user);
    }
    async getEventosOrganizadosGrupo(idGrupo: string, user : Usuario){
        await this.serviceGrupoAcademico.getEventosOrganizados(idGrupo, user);
    }
    async getEventosParticipadosGrupo(idGrupo: string, user : Usuario){
        await this.serviceGrupoAcademico.getEventosParticipados(idGrupo, user);
    }
    async getMembrosAtivos(idGrupo: string, user : Usuario){
        await this.serviceGrupoAcademico.getMembrosAtivos(idGrupo, user);
    }

}
