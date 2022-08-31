import { Local } from '../classes/local'

export class repositoryLocal {
    private connection = { execute(query: string) {} };

    insert(local: Local){
      const query = `INSERT INTO LocalEvento (cep, logradouro, numero, bairro, cidade) VALUES (${local.getCep()}, ${local.getLogradouro()}, ${local.getNumero()}, ${local.getNumero()}, ${local.getBairro()}, ${local.getCidade()})`;
    }
    getAll(){
      const query = `SELECT * FROM LocalEvento`;
    }
    getById(cep: string){
      const query = `SELECT * FROM LocalEvento WHERE cep = ${cep}`;
    }
    delete(local: Local) {
      const query = `DELETE FROM LocalEvento WHERE cep = ${local.getCep()}`
    }
    update(local: Local){

    }
  }