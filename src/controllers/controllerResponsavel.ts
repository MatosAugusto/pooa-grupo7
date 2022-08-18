import { responsavelService } from "../services/responsavelService";
import { GrupoAcademico } from "../classes/grupoacademico";
import { Usuario } from "../classes/usuario";

class ControllerResponsavel{
    private respService = new responsavelService();
    
    incluirParticipante(participante:Usuario){

    }
    
    alterarResponsavel(grupo: GrupoAcademico, idNovoResponsavel: string){

    }
    
    removerParticipante(participante: Usuario){

    }
    
    mudarStatusGrupoAcademico(grupo: GrupoAcademico){

    }
}