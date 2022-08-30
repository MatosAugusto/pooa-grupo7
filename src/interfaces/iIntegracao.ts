import { Perfil } from "../classes/perfil";
import { Usuario } from "../classes/usuario";
import { Disciplinas } from "../classes/disciplinas";
import { usuarioService } from "../services/usuarioService";

export interface iIntegracao{
    (ra: string): void;
}    
    
    function checkStatusAluno(ra : string){
        const api = "link_grupo1";
        let statusB : boolean = api.getStatusBiblioteca(ra);
        const api2 = "link_grupo5";
        let disciplinas: Disciplinas[] = api2.getDisciplinasAluno(ra);
        if (statusB && disciplinas.length > 3){ 
            return true;
        }
        return false;
    }
   