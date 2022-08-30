import { Aluno } from '../classes/aluno';
import { repositoryAluno } from './repositoryAluno';
import { Etapa } from '../classes/etapa';
import { processoSeletivoService } from '../services/processoSeletivoService';

export class repositoryEtapa {
    private connection = { execute(query: string) {} };

    insert(etapa : Etapa){
      const query =  `insert into Etapa (nome, descricao) values (${etapa.getNome()}, ${etapa.getDescricao()})`;
    }
    getAll(){
      let etapas: Etapa[] = [];
      let alunos: Aluno[] = [];
      const query = `select * from Etapa`;
      const resultSet: any = this.connection.execute(query);
      let aluno : Aluno;
      let a = new repositoryAluno;
      while(resultSet){
        const query2 = `select * from EtapaAluno where etapa = ${resultSet.etapa}`;
        const resultSet2: any = this.connection.execute(query);
        while(resultSet2){
          aluno = a.getById(resultSet2.raAluno)
          alunos.push(aluno);
        }
        let etapa: any = new Etapa(resultSet.idEtapa, resultSet.nome, resultSet.descricao, alunos);

        etapas.push(etapa);
      }
      return etapas;
    }
    getById(id:bigint){
      let alunos: Aluno[] = [];
      let aluno : Aluno;
      let a = new repositoryAluno;
      const query = `select * from Etapa where idEtapa = ${id}`;
      const resultSet: any = this.connection.execute(query);
      const query2 = `select * from EtapaAluno where etapa = ${resultSet.etapa}`;
      const resultSet2: any = this.connection.execute(query);
      while(resultSet2){
        aluno = a.getById(resultSet2.raAluno)
        alunos.push(aluno);
      }

      const etapa: any = new Etapa(resultSet.idEtapa, resultSet.nome, resultSet.descricao,alunos);
      return etapa;
    }

    async insertAluno(aluno:Aluno, etapa : Etapa){
      let ps = new processoSeletivoService;
      if(await ps.checarAluno(aluno)){
        const query =  `insert into EtapaAluno (idEtapa, raAluno) values (${etapa.getNome()}, ${aluno.getRA()})`;
     }
    }
    delete(etapa: Etapa) {
      const id = etapa.getId();
      const query = `delete from Etapa where idEtapa = ${id}`;
    }
    update(etapa: Etapa){

    }
  }