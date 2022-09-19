import { Perfil } from "../classes/perfil";
import { Aluno } from "../classes/aluno";
import { Disciplina } from "../classes/disciplina";
import { serviceUsuario } from "../services/serviceUsuario";

export interface iIntegracao{
    (aluno: Aluno): void;
}  
    
    export function checkStatusAluno(aluno: Aluno){
        let cpfAluno = aluno.getCpf();
        const api = "https://rest-api-projeto-pooa-grupo1.herokuapp.com/situacao?cpf="+cpfAluno;
        const api2 = "https://rest-api-projeto-pooa-grupo5.herokuapp.com/situacao?cpf="+cpfAluno;
        let disciplinas: Disciplina[] = api2.getDisciplinas();
        let statusBiblioteca = api.getStatus();

        if (!statusBiblioteca && disciplinas.length > 3){ 
            return true;
        }
        return false;
    }
  