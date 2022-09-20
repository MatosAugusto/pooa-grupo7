import { Departamento } from '../classes/departamento'

export class repositoryDepartamento {
    private connection = { execute(query: string) {} };

    insert(departamento: Departamento){
      const query = `insert into Departamento (nome, sigla) values (${departamento.getNome()},${departamento.getSigla()} )`;
    }
    
    getAll(){
      let departamentos: Departamento[] = [];
      const query = `select * from Departamento`;
      const resultSet: any = this.connection.execute(query);
      
      while(resultSet){
        let departamento: any = new Departamento(resultSet.idDepartamento, resultSet.nome, resultSet.sigla);

        departamentos.push(departamento);
      }
      return departamentos;
    }
    
    getByID(id: string){
      const query = `select * from Departamento where idDepartamento = ${id}`;
      const resultSet: any = this.connection.execute(query);

      const departamento: any = new Departamento(resultSet.idDepartamento, resultSet.nome, resultSet.sigla);
      return departamento;
    }
    
    delete(dpto: Departamento) {
      const id = dpto.getID();
      const query = `delete from Departamento where idDepartamento = ${id}`;
    }
    
    update(dpto: Departamento){
      const query = `update departamento set nome = ${dpto.getNome()}, sigla = ${dpto.getSigla} where idDepartamento = ${dpto.getID()}`;
    }
  }