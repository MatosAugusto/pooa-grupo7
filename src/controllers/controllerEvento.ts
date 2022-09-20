import { Aluno } from "../classes/aluno";
import { Evento } from "../classes/evento";
import { GrupoAcademico } from "../classes/grupoacademico";
import { Local } from "../classes/local";
import { Usuario } from "../classes/usuario";
import { serviceEvento } from "../services/serviceEvento"

class controllerEvento{
    private serviceEvento = new serviceEvento();

    async criarEvento(evento: Evento){
        await this.serviceEvento.criarEvento(evento);
    }

    async deletarEvento(evento: Evento){
        await this.serviceEvento.deletarEvento(evento);
    }

    async buscarEventos(){
        await this.serviceEvento.buscarEventos();
    }

    async buscarEventoPorNome(nome: string){
        await this.serviceEvento.buscarEventoPorNome(nome);
    }
    
    adicionarPalestrante(usuario: Usuario, evento: Evento) {
        this.serviceEvento.adicionarPalestrante(usuario, evento);
    }

    adicionarOrganizador(organizador: Aluno, evento: Evento){
        this.serviceEvento.adicionarOrganizador(organizador, evento);
    }
    
    adicionarGrupoOrganizador(grupo: GrupoAcademico, evento: Evento){
        this.serviceEvento.adicionarGrupoOrganizador(grupo, evento);
    }

    removerGrupoOrganizador(grupo: GrupoAcademico, evento: Evento){
        this.serviceEvento.removerGrupoOrganizador(grupo, evento);
    }

    alterarLocal(local: Local, evento: Evento){
        this.serviceEvento.alterarLocal(local, evento);
    }

    alterarData(data: Date, evento: Evento){
        this.serviceEvento.alterarData(data, evento);
    }

    alterarStatus(status: string, evento: Evento){
        this.serviceEvento.alterarStatus(status, evento)
    }
}
