import { GrupoAcademico } from "../classes/grupoacademico";
import { Usuario } from "../classes/usuario";
import { Aluno } from "../classes/aluno";
import { serviceResponsavel } from "../services/serviceResponsavel";
import { serviceGrupoAcademico } from "../services/serviceGrupoAcademico";

class controllerResponsavel{
    private serviceResponsavel = new serviceResponsavel();
    private serviceGA = new serviceGrupoAcademico();

    async criarGrupo(grupo: GrupoAcademico, responsavel: Usuario){
        this.serviceResponsavel.checkResponsavel(responsavel);
        await this.serviceGA.criarGrupo(grupo);
    }

    async deletarGrupo(grupo: GrupoAcademico){
        await this.serviceGA.deletarGrupo(grupo);
    }
    
    async incluirParticipante(grupo: GrupoAcademico, participante: Aluno){
        await this.serviceResponsavel.incluirParticipante(grupo, participante);
    }
    
    async alterarResponsavel(grupo: GrupoAcademico, novoResponsavel: Usuario){
        await this.serviceResponsavel.trocarResponsavel(grupo, novoResponsavel);
    }
    
    async removerParticipante(grupo: GrupoAcademico, participante: Aluno){
        await this.serviceResponsavel.removerParticipante(grupo, participante);
    }
    
    async mudarStatusGrupoAcademico(grupo: GrupoAcademico){
        await this.serviceResponsavel.mudarStatusGrupoAcademico(grupo);
    }

    async alterarLimiteParticipantes(grupo: GrupoAcademico, limite: number){
        await this.serviceResponsavel.mudarLimiteGrupoAcademico(grupo, limite);
    }
}
