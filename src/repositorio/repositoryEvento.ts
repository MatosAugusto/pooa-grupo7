import { Aluno } from '../classes/aluno';
import { Evento } from '../classes/evento'
import { GrupoAcademico } from '../classes/grupoacademico';
import { Usuario } from '../classes/usuario';
import { repositoryAluno } from './repositoryAluno';
import { repositoryGrupoAcademico } from './repositoryGrupoAcademico';
import { repositoryLocal } from './repositoryLocal';
import { repositoryUsuario } from './repositoryUsuario';

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
      const eventos : Evento[] = [];
      const query = `select * from Evento`;
      const resultSet: any = this.connection.execute(query);
      while(resultSet){
        const query2 = `select * from Organizadores where nomeEvento = ${resultSet.nome}`;
        const resultSet2: any = this.connection.execute(query2);
        let a = new repositoryAluno;
        let organizadores : Aluno[] = [];
        while(resultSet2){
          organizadores.push(a.getById(resultSet2.raAluno));
        }
        const query3 = `select * from LocalEvento where cepLocal = ${resultSet.cepLocal}`;
        const resultSet3: any = this.connection.execute(query3);
        let l = new repositoryLocal;
        let local = l.getById(resultSet3.cep);
        const query4 = `select * from Palestrantes where nomeEvento = ${resultSet.nome}`;
        const resultSet4: any = this.connection.execute(query4);
        let u = new repositoryUsuario;
        let palestrantes : Usuario[] = [];
        while(resultSet4){
          palestrantes.push(u.getByCpf(resultSet4.cpfUsuario));
        }
        const query5 = `select * from GrupoEvento where nomeEvento = ${resultSet.nome} and tipo="ORGANIZADOR"`;
        const resultSet5: any = this.connection.execute(query5);
        let g = new repositoryGrupoAcademico;
        let grupos : GrupoAcademico[] = [];
        while(resultSet5){
          grupos.push(g.getById(resultSet5.idGrupo));
        }
        const evento = new Evento(resultSet.nome, resultSet.data, resultSet.horaInicio, resultSet.horaFim, organizadores, local, palestrantes, grupos);
        eventos.push(evento);
      }
      return eventos;
    }
    getByNome(nome: string){
      const query = `select * from Evento where nome = ${nome}`;
      const resultSet: any = this.connection.execute(query);
      const query2 = `select * from Organizadores where nomeEvento = ${nome}`;
      const resultSet2: any = this.connection.execute(query2);
      let a = new repositoryAluno;
      let organizadores : Aluno[] = [];
      while(resultSet2){
        organizadores.push(a.getById(resultSet2.raAluno));
      }
      const query3 = `select * from LocalEvento where cepLocal = ${resultSet.cepLocal}`;
      const resultSet3: any = this.connection.execute(query3);
      let l = new repositoryLocal;
      let local = l.getById(resultSet3.cep);
      const query4 = `select * from Palestrantes where nomeEvento = ${nome}`;
      const resultSet4: any = this.connection.execute(query4);
      let u = new repositoryUsuario;
      let palestrantes : Usuario[] = [];
      while(resultSet4){
        palestrantes.push(u.getByCpf(resultSet4.cpfUsuario));
      }
      const query5 = `select * from GrupoEvento where nomeEvento = ${nome} and tipo="ORGANIZADOR"`;
      const resultSet5: any = this.connection.execute(query5);
      let g = new repositoryGrupoAcademico;
      let grupos : GrupoAcademico[] = [];
      while(resultSet5){
        grupos.push(g.getById(resultSet5.idGrupo));
      }
      const evento = new Evento(resultSet.nome, resultSet.data, resultSet.horaInicio, resultSet.horaFim, organizadores, local, palestrantes, grupos);
      return evento;
    }
    delete(evento: Evento) {
      const nome = evento.getNome();
      const query = `delete from Evento where nome = ${nome}`;
    }
    update(evento: Evento){
      const query = `update Evento set horaInicio = ${evento.getHoraInicio()}, horaFim = ${evento.getHoraFim}, cepLocal = ${evento.getLocal().getCep} where nome = ${evento.getNome()}`;
    }
  }