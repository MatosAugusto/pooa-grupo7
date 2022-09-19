import { Perfil } from "../classes/perfil";
import { Usuario } from "../classes/usuario";
import { Disciplina } from "../classes/disciplina";
import { serviceUsuario } from "../services/serviceUsuario";

export interface iIntegracao{
    (ra: string): void;
}    
    
    export function checkStatusAluno(ra : string){
        const api = "link_grupo1";
        const api2 = "link_grupo5";
        let disciplinas: Disciplina[] = api2(ra);
        
        if (api && disciplinas.length > 3){ 
            return true;
        }
        return false;
    }
   