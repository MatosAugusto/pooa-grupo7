import { Aluno } from "../classes/aluno";
import { Evento } from "../classes/evento";
import { Local } from "../classes/local";
import { Usuario } from "../classes/usuario";
import { serviceEvento } from "../services/serviceEvento"
class controllerEvento{
    private serviceEvento = new serviceEvento();
    
    adicionarPalestrante(usuario: Usuario, evento: Evento) {
        this.serviceEvento.adicionarPalestrante(usuario, evento);
    }
    adicionarOrganizador(organizador: Aluno, evento : Evento){
        this.serviceEvento.adicionarOrganizador(organizador, evento);
    }
    alterarStatus(){

    }
    alterarLocal(local : Local, evento : Evento){
        this.serviceEvento.alterarLocal(local, evento);
    }
    alterarData(data : Date, evento : Evento){
        this.serviceEvento.alterarData(data, evento);
    }
}
