import { Aluno } from '../classes/aluno'
import { Disciplinas } from '../classes/disciplinas';
import { GrupoAcademico } from '../classes/grupoacademico';
import { repositoryGrupoAcademico } from './repositoryGrupoAcademico';

export class repositoryAluno {
    private connection = { execute(query: string) {} };

    insert(aluno: Aluno){
      const query = `insert into aluno (ra, statusBiblioteca) values (${aluno.getRA()}, ${aluno.getStatusBiblioteca()} )`;
      let i : number = 0;
      while(i<aluno.getDisciplinas().length){
        const query2 =  `insert into AlunoDisciplina (raAluno, idDisciplina) values (${aluno.getRA()}, ${aluno.getDisciplinas()[i].getId()} )`;
      }
    }
    getAll(){
      let alunos: Aluno[] = [];
      let disciplinas: Disciplinas[] = [];
      const query = `select * from Aluno`;
      const resultSet: any = this.connection.execute(query);
      while(resultSet){//ver repositoryGrupoAcademico para simplificar
        let query2 = `select * from AlunoDisciplinas where raAluno = ${resultSet.ra}`;
        let resultSet2: any = this.connection.execute(query2);
        while(resultSet2){
          let query3 = `select * from Disciplinas where idDisciplina = ${resultSet2.idDisciplina}`;
          let resultSet3: any = this.connection.execute(query3);
          let disciplina = new Disciplinas(resultSet3.id, resultSet3.nome);
          disciplinas.push(disciplina);
        }
        let aluno: any = new Aluno(resultSet.ra, disciplinas, resultSet.statusBiblioteca, resultSet.nome, resultSet.cpf, resultSet.dataNascimento, resultSet.senha, resultSet.perfil);

        alunos.push(aluno);
        disciplinas.splice(0,disciplinas.length);
      }
      return alunos;
    }
    getById(ra: string){
      const query = `select * from Aluno where ra = ${ra}`;
      const resultSet: any = this.connection.execute(query);

      const aluno: any = new Aluno(resultSet.ra, resultSet.disciplinas, resultSet.statusBiblioteca, resultSet.nome, resultSet.cpf, resultSet.dataNascimento, resultSet.senha, resultSet.perfil);
      return aluno;
    }
    delete(aluno: Aluno) {
      const ra = aluno.getRA();
      const query = `delete from Aluno where ra = ${ra}`;
    }
    update(aluno: Aluno){

    }
  }