import { Evento } from "../classes/evento";
import { Usuario } from "../classes/usuario";
import { serviceGrupoAcademico } from "../services/serviceGrupoAcademico";

class controllerGrupoAcademico{
    private serviceGrupoAcademico = new serviceGrupoAcademico(); 

    async getGrupos(){
        return await this.serviceGrupoAcademico.buscarGrupos();
    }

    async getGrupoAcademicoByID(idGrupo: string, user : Usuario){
        return await this.serviceGrupoAcademico.getByID(idGrupo, user);
    }

    async getGrupoAcademicoByNome(nomeGrupo: string, user : Usuario){
        return await this.serviceGrupoAcademico.getByNome(nomeGrupo, user);   
    }

    async getParticipantes(idGrupo: string, user : Usuario){
        return await this.serviceGrupoAcademico.getParticipantes(idGrupo, user);
    }

    async getResponsavel(idGrupo: string, user : Usuario){
        return await this.serviceGrupoAcademico.getResponsavel(idGrupo, user);
    }

    async getEventosOrganizadosGrupo(idGrupo: string, user : Usuario){
        return await this.serviceGrupoAcademico.getEventosOrganizados(idGrupo, user);
    }

    async getEventosParticipadosGrupo(idGrupo: string, user : Usuario){
        return await this.serviceGrupoAcademico.getEventosParticipados(idGrupo, user);
    }
    
    async getMembrosAtivos(idGrupo: string, user : Usuario){
        return await this.serviceGrupoAcademico.getMembrosAtivos(idGrupo, user);
    }

}
