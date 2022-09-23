import { Aluno } from "../classes/aluno";
import { Disciplina } from "../classes/disciplina";

export interface iIntegracao{
    (aluno: Aluno): void;
}  
    
    export function checkStatusAluno(aluno: Aluno){
        let cpfAluno = aluno.getCpf();
        //retorna true se tiver pendências e false se não tiver
        const api = "https://rest-api-projeto-pooa-grupo1.herokuapp.com/situacao?cpf="+cpfAluno;
        
        //retorna o número de disciplinas que o aluno está inscrito
        const api2 = "https://rest-api-projeto-pooa-grupo5.herokuapp.com/situacao?cpf="+cpfAluno;
        
        if(!api){
            return true;
        }
        return false;
        // if (!api && api2 >= 3){ 
        //     return true;
        // }
        // return false;
    }
  
