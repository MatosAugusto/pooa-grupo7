import { Aluno } from "../classes/aluno";
import { Evento } from "../classes/evento";
import { Usuario } from "../classes/usuario";
import { repositoryEvento } from "../repositorio/repositoryEvento";
import { checkStatusAluno } from "../interfaces/iIntegracao";
import { Local } from "../classes/local";

export class serviceEvento{
    private eventoRepository = new repositoryEvento();

    async adicionarPalestrante(usuario: Usuario, evento : Evento){
        this.eventoRepository.insertPalestrante(usuario, evento);        
    }
    async adicionarOrganizador(aluno : Aluno, evento : Evento){
        if(await !checkStatusAluno(aluno.getRA())){
            throw new Error("Aluno não está cumprindo os requisitos!"); 
        }
        this.eventoRepository.insertOrganizador(aluno, evento);
    }
    async alterarLocal(local : Local, evento : Evento){
        this.alterarLocal(local, evento);
    }

    async alterarData(data : Date, evento : Evento){
        let dataAtual = new Date();
        if(await !(data<dataAtual)){
            throw new Error("Data anterior a atual!"); 
        }
        this.alterarData(data, evento);
    }
    
}
