import { Usuario } from "../classes/usuario";
import { grupoacademicoService } from "../services/grupoAcademicoService";
class ControllerGrupoAcademico{
    private gpAcadService = new grupoacademicoService(); 
    
    async getGrupoAcademicoByID(idGrupo: string, user : Usuario){
        await this.gpAcadService.getById(idGrupo, user);
    }
    async getGrupoAcademicoByNome(nomeGrupo: string, user : Usuario){
        await this.gpAcadService.getByNome(nomeGrupo, user);   
    }
    async getParticipantes(idGrupo: string, user : Usuario){
        await this.gpAcadService.getParticipantes(idGrupo, user);
    }
    async getResponsavel(idGrupo: string, user : Usuario){
        await this.gpAcadService.getResponsavel(idGrupo, user);
    }
    async getEventosOrganizadosGrupo(idGrupo: string, user : Usuario){
        await this.gpAcadService.getEventosOrganizados(idGrupo, user);
    }
    async getEventosParticipadosGrupo(idGrupo: string, user : Usuario){
        await this.gpAcadService.getEventosParticipados(idGrupo, user);
    }
    async getMembrosAtivos(idGrupo: string, user : Usuario){
        await this.gpAcadService.getMembrosAtivos(idGrupo, user);
    }

}