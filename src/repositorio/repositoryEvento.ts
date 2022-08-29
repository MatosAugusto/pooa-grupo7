import { Aluno } from '../classes/aluno';
import { Evento } from '../classes/evento'

export class repositoryEvento {
    private connection = { execute(query: string) {} };

    insert(evento: Evento){
      const query = `insert into evento (nome, dataCriacao, horaInicio, horaFim, cepLocal) values (${evento.getNome()}, ${evento.getData()}, ${evento.getHoraInicio()}, ${evento.getHoraFim()}, ${evento.getLocal().getCep()} )`;
      let i : number = 0;
      while(i<evento.getOrganizadores().length){
        const query2 =  `insert into Organizadores (nomeEvento, raAluno) values (${evento.getNome}, ${evento.getOrganizadores[i].getRA()} )`;
      }
      i = 0;
      while(i<evento.getPalestrantes.length){
        const query3 =  `insert into Palestrantes (nomeEvento, cpfUsuario) values (${evento.getNome}, ${evento.getPalestrantes[i].getCpf()} )`;
      }
      i = 0;
      while(i<evento.getGrupoResponsavel.length){
        const query4 =  `insert into GrupoEvento (nomeEvento, idGrupo, tipo) values (${evento.getNome}, ${evento.getGrupoResponsavel[i].getId()}, 'ORGANIZADOR' )`;
      }
    }
    getAll(){
    }
    getByNome(nome: string){
      return Evento;
    }
    delete(evento: Evento) {
    }
    update(evento: Evento){

    }
  }