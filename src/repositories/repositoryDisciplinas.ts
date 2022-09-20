import { Disciplina } from '../classes/disciplina'

export class repositoryDisciplina {
    private connection = { execute(query: string) {} };

    insert(disciplina: Disciplina){
      const query = `insert into Disciplina (nome) values (${disciplina.getNome()} )`;
    }

    getAll(){
      let disciplinas: Disciplina[] = [];
      const query = `select * from Disciplina`;
      const resultSet: any = this.connection.execute(query);
      while(resultSet){
        let disciplina: any = new Disciplina(resultSet.idDisciplina, resultSet.nome);

        disciplinas.push(disciplina);
      }
      return disciplinas;
    }

    getByID(id:string){
      const query = `select * from Disciplina where idDisciplina = ${id}`;
      const resultSet: any = this.connection.execute(query);

      const disciplina: any = new Disciplina(resultSet.idDisciplina, resultSet.nome);
      return disciplina;
    }

    delete(disciplina: Disciplina) {
      const id = disciplina.getID();
      const query = `delete from Disciplina where idDisciplina = ${id}`;
    }
    
    update(disciplina: Disciplina){
      const query = `update Disciplina set nome = ${disciplina.getNome()} where idDisciplina = ${disciplina.getID()}`;
    }
  }