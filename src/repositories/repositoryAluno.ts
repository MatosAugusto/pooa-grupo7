import { Aluno } from '../classes/aluno'
import { Departamento } from '../classes/departamento';
import { Disciplina } from '../classes/disciplina';
import { GrupoAcademico } from '../classes/grupoacademico';
import { Usuario } from '../classes/usuario';
import { repositoryDisciplina } from './repositoryDisciplinas';
import { repositoryGrupoAcademico } from './repositoryGrupoAcademico';
import { repositoryUsuario } from './repositoryUsuario';

export class repositoryAluno {
    private connection = { execute(query: string) {} };

    insert(aluno: Aluno){
      const query = `insert into aluno (ra, statusBiblioteca) values (${aluno.getRA()}, ${aluno.getStatusBiblioteca()} )`;
      let i : number = 0;
      while(i<aluno.getDisciplinas().length){
        const query2 =  `insert into AlunoDisciplina (raAluno, idDisciplina) values (${aluno.getRA()}, ${aluno.getDisciplinas()[i].getID()} )`;
      }
    }
    
    getAll(){
      let alunos: Aluno[] = [];
      let disciplinas: Disciplina[] = [];
      let disciplina : Disciplina;
      const query = `select * from Aluno`;
      const resultSet: any = this.connection.execute(query);
      let d = new repositoryDisciplina;
      let u = new repositoryUsuario;
      
      while(resultSet){
        let query2 = `select * from AlunoDisciplinas where raAluno = ${resultSet.ra}`;
        let resultSet2: any = this.connection.execute(query2);
        while(resultSet2){
          disciplina = d.getByID(resultSet2.idDisciplina);
          disciplinas.push(disciplina);
        }
        let usuario: Usuario = u.getByCpf(resultSet.cpf);
        let aluno: any = new Aluno(resultSet.ra, disciplinas, resultSet.statusBiblioteca, usuario.getNome(), usuario.getCpf(), usuario.getDataNascimento(), usuario.getSenha(), usuario.getPerfil());

        alunos.push(aluno);
        disciplinas.splice(0,disciplinas.length);
      }
      return alunos;
    }

    getByID(ra: string){
      let disciplinas: Disciplina[] = [];
      let disciplina : Disciplina;
      let d = new repositoryDisciplina;
      const query = `select * from Aluno where ra = ${ra}`;
      const resultSet: any = this.connection.execute(query);
      let query2 = `select * from AlunoDisciplinas where raAluno = ${resultSet.ra}`;
      let resultSet2: any = this.connection.execute(query2);
      
      while(resultSet2){
        disciplina = d.getByID(resultSet2.idDisciplina);
        disciplinas.push(disciplina);
      }
      let u = new repositoryUsuario;
      let usuario: Usuario = u.getByCpf(resultSet.cpf);
      let aluno: any = new Aluno(resultSet.ra, disciplinas, resultSet.statusBiblioteca, usuario.getNome(), usuario.getCpf(), usuario.getDataNascimento(), usuario.getSenha(), usuario.getPerfil());
      return aluno;
    }

    delete(aluno: Aluno) {
      const ra = aluno.getRA();
      const query = `delete from Aluno where ra = ${ra}`;
    }

    update(aluno: Aluno){
      const query = `update aluno set statusBiblioteca=${aluno.getStatusBiblioteca} where ra = ${aluno.getRA()}`;
    }
  }