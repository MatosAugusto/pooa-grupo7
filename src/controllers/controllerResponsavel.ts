import { serviceResponsavel } from "../services/serviceResponsavel";
import { GrupoAcademico } from "../classes/grupoacademico";
import { Usuario } from "../classes/usuario";
import { Aluno } from "../classes/aluno";

class controllerResponsavel{
    private serviceResponsavel = new serviceResponsavel();
    
    async incluirParticipante(grupo: GrupoAcademico, participante: Aluno){
        await this.serviceResponsavel.incluirParticipante(grupo, participante)
    }
    
    async trocarResponsavel(grupo: GrupoAcademico, novoResponsavel: Usuario){
        await this.serviceResponsavel.trocarResponsavel(grupo, novoResponsavel);
    }
    
    removerParticipante(participante: Usuario){

    }
    
    mudarStatusGrupoAcademico(grupo: GrupoAcademico){

    }
}
