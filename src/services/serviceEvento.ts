import { Aluno } from "../classes/aluno";
import { Evento } from "../classes/evento";
import { Usuario } from "../classes/usuario";
import { Local } from "../classes/local";
import { repositoryEvento } from "../repositories/repositoryEvento";

export class serviceEvento{
    private eventoRepository = new repositoryEvento();

    async adicionarPalestrante(usuario: Usuario, evento: Evento){
        this.eventoRepository.insertPalestrante(usuario, evento);
        evento.insertPalestrante(usuario)
    }
    
    async adicionarOrganizador(aluno: Aluno, evento: Evento){
        this.eventoRepository.insertOrganizador(aluno, evento);
        evento.insertOrganizador(aluno)
    }
    
    async alterarLocal(local: Local, evento: Evento){
        this.alterarLocal(local, evento);
        evento.setLocal(local)
    }

    async alterarData(data: Date, evento: Evento){
        let dataAtual = new Date();

        if(await !(data<dataAtual)){
            throw new Error("Data anterior a atual!"); 
        }
        this.alterarData(data, evento);
        evento.setDate(data)
    }
    
    async alterarStatus(status: string, evento: Evento){
        let dataAtual = new Date();
        let status1 = "A_ACONTECER"
        let status2 = "ACONTECENDO"
        let status3 = "CANCELADO"
        //esse status não está no documento de requisitos
        let status4 = "FINALIZADO"

        //se a data do evento for antes da data atual, não será possivel atribuir "A_ACONTECER"
        if(status==status1){
            if(evento.getData()<dataAtual){
                throw new Error("Esse evento não pode receber esse status!"); 
            }
        }
        
        //se a data atual não for a mesma da data do evento, não será possivel atribuir "ACONTECENDO"
        if(status==status2){
            if(!(evento.getData()==dataAtual)){
                throw new Error("Esse evento não pode receber esse status!"); 
            }
        }

        //se a data do evento ainda não tiver passado, não será possivel atribuir "FINALIZADO"
        if(status==status4){
            if(evento.getData()>dataAtual){
                throw new Error("Esse evento não pode receber esse status!"); 
            }  
        }
    }
}
