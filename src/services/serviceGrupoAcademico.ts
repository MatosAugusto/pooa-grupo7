import { Usuario } from "../classes/usuario";
import { Perfil } from "../classes/perfil";
import { Acao } from "../classes/acao";
import { GrupoAcademico } from "../classes/grupoacademico";
import { repositoryGrupoAcademico } from "../repositories/repositoryGrupoAcademico";

export class serviceGrupoAcademico{
    private repositoryGrupoAcad = new repositoryGrupoAcademico();

    async criarGrupo(grupo: GrupoAcademico){
        if(this.repositoryGrupoAcad.getById(grupo.getID())){
            throw new Error("Grupo já cadastrado!");            
        }
        this.repositoryGrupoAcad.insert(grupo);
    }

    async deletarGrupo(grupo: GrupoAcademico){
        this.repositoryGrupoAcad.delete(grupo);
    }

    async buscarGrupos(){
        return this.repositoryGrupoAcad.getAll();
    }

    async getByID(idGrupo: string, user : Usuario){
        const buscarGrupo = new Acao("BUSCAR_GRUPO", "001")
        if (!user.getPerfil().podeExecutar(buscarGrupo)) {
            throw new Error("Você não pode realizar essa ação!");
        }
        const grupo = await this.repositoryGrupoAcad.getById(idGrupo);
        return grupo;
    }
    
    async getByNome(nomeGrupo: string, user : Usuario){
        const buscarGrupo = new Acao("BUSCAR_GRUPO", "001")
        if (!user.getPerfil().podeExecutar(buscarGrupo)) {
            throw new Error("Você não pode realizar essa ação!");
        }
        const grupo = await this.repositoryGrupoAcad.getByNome(nomeGrupo);
        return grupo;
    }

    async getParticipantes(idGrupo: string, user : Usuario){
        const buscarParticipantes = new Acao("BUSCAR_PARTICIPANTES", "002")
        if (!user.getPerfil().podeExecutar(buscarParticipantes)) {
            throw new Error("Você não pode realizar essa ação!");
        }
        const participantes = await this.repositoryGrupoAcad.getParticipantes(idGrupo);
        return participantes;
    }

    async getResponsavel(idGrupo: string, user : Usuario){
        const buscarResponsavel = new Acao("BUSCAR_RESPONSAVEL", "003")
        if (!user.getPerfil().podeExecutar(buscarResponsavel)) {
            throw new Error("Você não pode realizar essa ação!");
        }
        const responsavel = await this.repositoryGrupoAcad.getResponsavel(idGrupo);
        return responsavel;
    }

    async getEventosOrganizados(idGrupo: string, user : Usuario){
        const buscarEventos = new Acao("BUSCAR_EVENTOS", "004")
        if (!user.getPerfil().podeExecutar(buscarEventos)) {
            throw new Error("Você não pode realizar essa ação!");
        }
        const eventos = await this.repositoryGrupoAcad.getEventosOrganizados(idGrupo);
        return eventos;
    }

    async getEventosParticipados(idGrupo: string, user : Usuario){
        const buscarEventos = new Acao("BUSCAR_EVENTOS", "004")
        if (!user.getPerfil().podeExecutar(buscarEventos)) {
            throw new Error("Você não pode realizar essa ação!");
        }
        const eventos = await this.repositoryGrupoAcad.getEventosParticipados(idGrupo);
        return eventos;
    }

    async getMembrosAtivos(idGrupo: string, user : Usuario){
        const buscarMembros = new Acao("BUSCAR_MEMBROS_ATIVOS", "005")
        if (!user.getPerfil().podeExecutar(buscarMembros)) {
            throw new Error("Você não pode realizar essa ação!");
        }
        const membros = await this.repositoryGrupoAcad.getMembrosAtivos(idGrupo);
        return membros;
    }
}
