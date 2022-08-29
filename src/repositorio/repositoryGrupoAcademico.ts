import { Aluno } from '../classes/aluno';
import { Departamento } from '../classes/departamento';
import { Evento } from '../classes/evento';
import { GrupoAcademico } from '../classes/grupoacademico'
import { Usuario } from '../classes/usuario';
import { repositoryAluno } from './repositoryAluno';
import { repositoryDepartamento } from './repositoryDepartamento';
import { repositoryEvento } from './repositoryEvento';
import { repositoryUsuario } from './repositoryUsuario';

export class repositoryGrupoAcademico {
    private connection = { execute(query: string) {} };

    insert(grupo: GrupoAcademico){
      const query = `insert into GrupoAcademico (id, nome, descricao, dataCriacao, statusGrupo, idDepartamento, cpfResponsavel, limiteParticipantes) values (${grupo.getId()}, ${grupo.getNome()}, ${grupo.getDescricao()}, ${grupo.getDataCriacao()}, ${grupo.getStatus()}, ${grupo.getDepartamento().getID()}, ${grupo.getResponsavel().getCpf}, ${grupo.getLimiteParticipantes()} )`;
      let i : number = 0;
      while(i<grupo.getParticipantes.length){
        const query2 =  `insert into participantes (idGrupo, raAluno) values (${grupo.getId}, ${grupo.getParticipantes[i].getRA()} )`;
      }
      i = 0;
      while(i<grupo.getRepresentantes.length){
        const query3 =  `insert into Representantes (idGrupo, raAluno) values (${grupo.getId}, ${grupo.getRepresentantes[i].getRA()} )`;
      }
      i = 0;
      while(i<grupo.getListaEventos.length){
        const query4 =  `insert into GrupoEvento (nomeEvento, idGrupo, tipo) values (${grupo.getListaEventos[i].getNome}, ${grupo.getId()}, 'ORGANIZADOR' )`;
      }
      i = 0;
      while(i<grupo.getEventosParticipados.length){
        const query4 =  `insert into GrupoEvento (nomeEvento, idGrupo, tipo) values (${grupo.getEventosParticipados[i].getNome}, ${grupo.getId()}, 'PARTICIPANTE' )`;
      }
    }
    getAll(){
      let grupos: GrupoAcademico[] = [];
      let representantes: Aluno[] = [];
      let participantes: Aluno[] = [];
      let eventosOrganizados: Evento[] = [];
      let eventosParticipados: Evento[] = [];
      const query = `select * from GrupoAcademico`;
      const resultSet: any = this.connection.execute(query);
      let departamento: Departamento;
      let d = new repositoryDepartamento;
      let responsavel: Usuario;
      let r = new repositoryUsuario;
      let aluno : Aluno;
      let a = new repositoryAluno;
      let evento : Evento;
      let e = new repositoryEvento;
      while(resultSet){
        let query2 = `select * from Representantes where idGrupo = ${resultSet.idGrupo}`;
        let resultSet2: any = this.connection.execute(query2);
        while(resultSet2){
            aluno = a.getById(resultSet2.raAluno);
            representantes.push(aluno);
        }
        let query3 = `select * from Participantes where idGrupo = ${resultSet.idGrupo}`;
        let resultSet3: any = this.connection.execute(query3);
        while(resultSet3){
            aluno = a.getById(resultSet3.raAluno);
            participantes.push(aluno);
        }
        /*let query4 = `select * from GrupoEvento where idGrupo = ${resultSet.idGrupo} AND tipo = 'ORGANIZADOR'`;
        let resultSet4: any = this.connection.execute(query4);
        while(resultSet4){
            evento = e.getByNome(resultSet4.nomeEvento);
            eventosOrganizados.push(evento);
        }
        let query5 = `select * from GrupoEvento where idGrupo = ${resultSet.idGrupo} AND tipo = 'PARTICIPANTE'`;
        let resultSet5: any = this.connection.execute(query5);
        while(resultSet5){
            evento = e.getByNome(resultSet5.nomeEvento);
            eventosParticipados.push(evento);
        }*/
        departamento = d.getById(resultSet.idDepartamento)
        responsavel = r.getByCpf(resultSet.cpfResponsavel)
        let grupoacademico: any = new GrupoAcademico(resultSet.id, resultSet.nome, resultSet.descricao, resultSet.dataCriacao, resultSet.statusGrupo, departamento, responsavel, representantes, resultSet.limiteParticipantes, participantes, eventosOrganizados, eventosParticipados);

        grupos.push(grupoacademico);
      }
      return grupos;
    }
    getById(id: string){
      let representantes: Aluno[] = [];
      let participantes: Aluno[] = [];
      let eventosOrganizados: Evento[] = [];
      let eventosParticipados: Evento[] = [];
      let departamento: Departamento;
      let d = new repositoryDepartamento;
      let responsavel: Usuario;
      let r = new repositoryUsuario;
      let aluno : Aluno;
      let a = new repositoryAluno;
      let evento : Evento;
      let e = new repositoryEvento;
      const query = `select * from GrupoAcademico where idGrupo = ${id}`;
      const resultSet: any = this.connection.execute(query);

      let query2 = `select * from Representantes where idGrupo = ${resultSet.idGrupo}`;
        let resultSet2: any = this.connection.execute(query2);
        while(resultSet2){
            aluno = a.getById(resultSet2.raAluno);
            representantes.push(aluno);
        }
        let query3 = `select * from Participantes where idGrupo = ${resultSet.idGrupo}`;
        let resultSet3: any = this.connection.execute(query3);
        while(resultSet3){
            aluno = a.getById(resultSet3.raAluno);
            participantes.push(aluno);
        }
        /*let query4 = `select * from GrupoEvento where idGrupo = ${resultSet.idGrupo} AND tipo = 'ORGANIZADOR'`;
        let resultSet4: any = this.connection.execute(query4);
        while(resultSet4){
            evento = e.getByNome(resultSet4.nomeEvento);
            eventosOrganizados.push(evento);
        }
        let query5 = `select * from GrupoEvento where idGrupo = ${resultSet.idGrupo} AND tipo = 'PARTICIPANTE'`;
        let resultSet5: any = this.connection.execute(query5);
        while(resultSet5){
            evento = e.getByNome(resultSet5.nomeEvento);
            eventosParticipados.push(evento);
        }*/
      departamento = d.getById(resultSet.idDepartamento)
      responsavel = r.getByCpf(resultSet.cpfResponsavel)

      const grupo: any = new GrupoAcademico(resultSet.id, resultSet.nome, resultSet.descricao, resultSet.dataCriacao, resultSet.statusGrupo, departamento, responsavel, representantes, resultSet.limiteParticipantes, participantes, eventosOrganizados, eventosParticipados);
      return grupo;
    }
    delete(grupo: GrupoAcademico) {
      const id = grupo.getId();
      const query = `delete from GrupoAcademico where idGrupo = ${id}`;
   
    }
    update(grupo: GrupoAcademico){

    }
}