import { GrupoAcademico } from "../classes/grupoacademico";
import { Usuario } from "../classes/usuario";
import { Aluno } from "../classes/aluno";
import { serviceResponsavel } from "../services/serviceResponsavel";

class controllerResponsavel{
    private serviceResponsavel = new serviceResponsavel();
    
    async incluirParticipante(grupo: GrupoAcademico, participante: Aluno){
        await this.serviceResponsavel.incluirParticipante(grupo, participante)
    }
    
    async trocarResponsavel(grupo: GrupoAcademico, novoResponsavel: Usuario){
        await this.serviceResponsavel.trocarResponsavel(grupo, novoResponsavel);
    }
    
    async removerParticipante(grupo: GrupoAcademico, participante: Aluno){
        await this.serviceResponsavel.removerParticipante(grupo, participante)
    }
    
    async mudarStatusGrupoAcademico(grupo: GrupoAcademico){
        await this.serviceResponsavel.mudarStatusGrupoAcademico(grupo)
    }
}
