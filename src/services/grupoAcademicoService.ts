import { Usuario } from "../classes/usuario";
import { Perfil } from "../classes/perfil";
import { repositoryGrupoAcademico } from "../repositorio/repositoryGrupoAcademico";
import { Acoes } from "../classes/acoes";
export class grupoacademicoService{
    private grupoAcadRepository = new repositoryGrupoAcademico();
    async getById(idGrupo: string, user : Usuario){
        const buscarGrupo = new Acoes("BUSCAR_GRUPO", "001")
        if (!user.getPerfil().podeExecutar(buscarGrupo)) {
            throw new Error("Você não pode realizar essa ação!");
        }
        const grupo = await this.grupoAcadRepository.getById(idGrupo);
        
        return grupo;
    }
    async getByNome(nomeGrupo: string, user : Usuario){
        const buscarGrupo = new Acoes("BUSCAR_GRUPO", "001")
        if (!user.getPerfil().podeExecutar(buscarGrupo)) {
            throw new Error("Você não pode realizar essa ação!");
        }
        const grupo = await this.grupoAcadRepository.getByNome(nomeGrupo);
        
        return grupo;
    }

    async getParticipantes(idGrupo: string, user : Usuario){
        const buscarParticipantes = new Acoes("BUSCAR_PARTICIPANTES", "002")
        if (!user.getPerfil().podeExecutar(buscarParticipantes)) {
            throw new Error("Você não pode realizar essa ação!");
        }
        const participantes = await this.grupoAcadRepository.getParticipantes(idGrupo);
        
        return participantes;
    }

    async getResponsavel(idGrupo: string, user : Usuario){
        const buscarResponsavel = new Acoes("BUSCAR_RESPONSAVEL", "003")
        if (!user.getPerfil().podeExecutar(buscarResponsavel)) {
            throw new Error("Você não pode realizar essa ação!");
        }
        const responsavel = await this.grupoAcadRepository.getResponsavel(idGrupo);
        
        return responsavel;
    }

    async getEventosOrganizados(idGrupo: string, user : Usuario){
        const buscarEventos = new Acoes("BUSCAR_EVENTOS", "004")
        if (!user.getPerfil().podeExecutar(buscarEventos)) {
            throw new Error("Você não pode realizar essa ação!");
        }
        const eventos = await this.grupoAcadRepository.getEventosOrganizados(idGrupo);
        
        return eventos;
    }

    async getEventosParticipados(idGrupo: string, user : Usuario){
        const buscarEventos = new Acoes("BUSCAR_EVENTOS", "004")
        if (!user.getPerfil().podeExecutar(buscarEventos)) {
            throw new Error("Você não pode realizar essa ação!");
        }
        const eventos = await this.grupoAcadRepository.getEventosParticipados(idGrupo);
        
        return eventos;
    }

    async getMembrosAtivos(idGrupo: string, user : Usuario){
        const buscarMembros = new Acoes("BUSCAR_MEMBROS_ATIVOS", "005")
        if (!user.getPerfil().podeExecutar(buscarMembros)) {
            throw new Error("Você não pode realizar essa ação!");
        }
        const membros = await this.grupoAcadRepository.getMembrosAtivos(idGrupo);
        
        return membros;
    }
}