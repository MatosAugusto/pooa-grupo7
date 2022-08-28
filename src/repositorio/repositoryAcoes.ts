import { Acoes } from '../classes/acoes'

export class repositoryAcoes {
    private connection = { execute(query: string) {} };

    insert(acao : Acoes){
      const query = `insert into acoes (nome, codigo) values (${acao.getNome()},${acao.getCodigo()} )`;
    }
    getAll(){
      let acoes: Acoes[] = [];
      const query = `select * from acoes`;
      const resultSet: any = this.connection.execute(query);
      while(resultSet){
        let acao: any = new Acoes(resultSet.nome, resultSet.codigo);

        acoes.push(acao);
      }
      return acoes;
    }
    getByCodigo(codigo: string){
      const query = `select * from acoes where codigo = ${codigo}`;
      const resultSet: any = this.connection.execute(query);

      const acao: any = new Acoes(resultSet.codigo, resultSet.nome);
      return acao;
    }
    delete(acao: Acoes) {
      const codigo = acao.getCodigo();
      const query = `delete from acoes where codigo = ${codigo}`;
    }
    update(acao: Acoes){
      
    }
  }