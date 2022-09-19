import { Acao } from '../classes/acao'

export class repositoryAcoes {
    private connection = { execute(query: string) {} };

    insert(acao: Acao){
      const query = `insert into acoes (nome, codigo) values (${acao.getNome()},${acao.getCodigo()} )`;
    }

    getAll(){
      let acoes: Acao[] = [];
      const query = `select * from acoes`;
      const resultSet: any = this.connection.execute(query);
      while(resultSet){
        let acao: any = new Acao(resultSet.nome, resultSet.codigo);

        acoes.push(acao);
      }
      return acoes;
    }

    getByCodigo(codigo: string){
      const query = `select * from acoes where codigo = ${codigo}`;
      const resultSet: any = this.connection.execute(query);

      const acao: any = new Acao(resultSet.codigo, resultSet.nome);
      return acao;
    }

    delete(acao: Acao) {
      const codigo = acao.getCodigo();
      const query = `delete from acoes where codigo = ${codigo}`;
    }
    
    update(acao: Acao){
      const query = `update acoes set nome = ${acao.getNome()} where codigo = ${acao.getCodigo()}`;
    }
  }