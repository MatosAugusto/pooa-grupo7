import { Local } from '../classes/local'

export class repositoryLocal {
    private connection = { execute(query: string) {} };

    insert(local: Local){
      const query = `INSERT INTO LocalEvento (cep, logradouro, numero, bairro, cidade) VALUES (${local.getCep()}, ${local.getLogradouro()}, ${local.getNumero()}, ${local.getNumero()}, ${local.getBairro()}, ${local.getCidade()})`;
    }

    getAll(){
      let locais : Local[] =[];
      const query = `SELECT * FROM LocalEvento`;
      const resultSet: any = this.connection.execute(query);
      while (resultSet) {
        let local = new Local(resultSet.cep, resultSet.logradouro, resultSet.numero, resultSet.bairro, resultSet.cidade);
        locais.push(local);
      }
      return locais;
    }

    getById(cep: string){
      const query = `SELECT * FROM LocalEvento WHERE cep = ${cep}`;
      const resultSet: any = this.connection.execute(query);
      const local = new Local(resultSet.cep, resultSet.logradouro, resultSet.numero, resultSet.bairro, resultSet.cidade);
      return local;
    }

    delete(local: Local) {
      const query = `DELETE FROM LocalEvento WHERE cep = ${local.getCep()}`
    }
    
    update(local: Local){
      const query = `update LocalEvento set logradouro = ${local.getLogradouro()}, numero = ${local.getNumero}, bairro = ${local.getBairro}, cidade = ${local.getCidade} where cep = ${local.getCep()}`;
    }
  }