import { Aluno } from '../classes/aluno'

export class repositoryAluno {
    private connection = { execute(query: string) {} };

    insert(aluno: Aluno){
      const query = `insert into aluno (ra, disciplinas, statusBiblioteca) values (${aluno.getRA()},${aluno.getDisciplinas()}, ${aluno.getStatusBiblioteca()} )`;
    }
    getAll(){
      let alunos: Aluno[] = [];
      const query = `select * from Aluno`;
      const resultSet: any = this.connection.execute(query);
      while(resultSet){
        let aluno: any = new Aluno(resultSet.ra, resultSet.disciplinas, resultSet.statusBiblioteca, resultSet.nome, resultSet.cpf, resultSet.dataNascimento, resultSet.senha, resultSet.perfil);

        alunos.push(aluno);
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