import { Disciplinas } from '../classes/disciplinas'

export class repositoryDisciplina {
    private connection = { execute(query: string) {} };

    insert(disciplina: Disciplinas){
      // const query = `insert into Disciplina (idDisciplina, nome) values (${disciplina.getId()},${disciplina.getNome()} )`;
      const query = `insert into Disciplina (nome) values (${disciplina.getNome()} )`;
    }
    getAll(){
      let disciplinas: Disciplinas[] = [];
      const query = `select * from Disciplina`;
      const resultSet: any = this.connection.execute(query);
      while(resultSet){
        let disciplina: any = new Disciplinas(resultSet.idDisciplina, resultSet.nome);

        disciplinas.push(disciplina);
      }
      return disciplinas;
    }
    getById(id:bigint){
      const query = `select * from Disciplina where idDisciplina = ${id}`;
      const resultSet: any = this.connection.execute(query);

      const disciplina: any = new Disciplinas(resultSet.idDisciplina, resultSet.nome);
      return disciplina;
    }
    delete(disciplina: Disciplinas) {
      const id = disciplina.getId();
      const query = `delete from Aluno where idDisciplina = ${id}`;
    }
    update(disciplina: Disciplinas){

    }
  }