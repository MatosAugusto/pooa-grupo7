import { Perfil } from '../classes/perfil'

export class repositoryPerfil {
    private connection = { execute(query: string) {} };

    insert(perfil: Perfil){
      const query = `insert into perfil (nome, criadoEm, alteradoEm) values (${perfil.getNome()},${perfil.getCriadoEm()},${perfil.getAlteradoEm()})`;
    }

    getAll(){
      let perfis: Perfil[] = [];
      const query = `select * from perfil`;
      const resultSet: any = this.connection.execute(query);
      while(resultSet){
        let perfil: any = new Perfil(resultSet.nome, resultSet.criadoEm, resultSet.alteradoEm, resultSet.acoes);

        perfis.push(perfil);
      }
      return perfis;
    }

    getByName(nome:String): Perfil{
      const query = `select * from perfil where nome = ${nome}`;
      const resultSet: any = this.connection.execute(query);
       
      
      const perfil: any = new Perfil(resultSet.nome, resultSet.criadoEm,resultSet.alteradoEm, resultSet.acoes);

      return perfil;
    }

    delete(perfil: Perfil) {
      const nome = perfil.getNome();
      const query = `delete from perfil where nome = ${nome}`;
   
    }
    
    update(perfil: Perfil){
      const query = `update Perfil set alteradoEm = ${perfil.getAlteradoEm()} where nome = ${perfil.getNome()}`;
    }
  }