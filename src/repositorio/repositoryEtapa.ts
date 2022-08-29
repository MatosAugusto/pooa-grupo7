import { Etapa } from '../classes/etapa'

export class repositoryEtapa {
    private connection = { execute(query: string) {} };

    insert(etapa : Etapa){
      const query =  `insert into Etapa (nome, descricao) values (${etapa.getNome()}, ${etapa.getDescricao()})`;
    }
    getAll(){
      let etapas: Etapa[] = [];
      const query = `select * from Etapa`;
      const resultSet: any = this.connection.execute(query);
      while(resultSet){
        let etapa: any = new Etapa(resultSet.idEtapa, resultSet.nome, resultSet.descricao);

        etapas.push(etapa);
      }
      return etapas;
    }
    getById(id:bigint){
      const query = `select * from Etapa where idEtapa = ${id}`;
      const resultSet: any = this.connection.execute(query);

      const etapa: any = new Etapa(resultSet.idEtapa, resultSet.nome, resultSet.descricao);
      return etapa;
    }
    delete(etapa: Etapa) {
      const id = etapa.getId();
      const query = `delete from Etapa where idEtapa = ${id}`;
    }
    update(etapa: Etapa){

    }
  }