import { serviceResponsavel } from "../services/serviceResponsavel";
import { GrupoAcademico } from "../classes/grupoacademico";
import { Usuario } from "../classes/usuario";

class controllerResponsavel{
    private serviceResponsavel = new serviceResponsavel();
    
    incluirParticipante(participante:Usuario){

    }
    
    alterarResponsavel(grupo: GrupoAcademico, idNovoResponsavel: string){

    }
    
    removerParticipante(participante: Usuario){

    }
    
    mudarStatusGrupoAcademico(grupo: GrupoAcademico){

    }
}
