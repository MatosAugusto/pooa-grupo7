import { responsavelService } from "../services/serviceResponsavel";
import { GrupoAcademico } from "../classes/grupoacademico";
import { Usuario } from "../classes/usuario";

class ControllerResponsavel{
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
