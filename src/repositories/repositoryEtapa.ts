import { Aluno } from '../classes/aluno';
import { repositoryAluno } from './repositoryAluno';
import { Etapa } from '../classes/etapa';
import { serviceProcessoSeletivo } from '../services/serviceProcessoSeletivo';

export class repositoryEtapa {
    private connection = { execute(query: string) {} };

    insert(etapa: Etapa){
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
        const query2 = `select * from EtapaAluno where etapa = ${resultSet.idEtapa}`;
        const resultSet2: any = this.connection.execute(query2);
        while(resultSet2){
          aluno = a.getByID(resultSet2.raAluno)
          alunos.push(aluno);
        }
        let etapa: any = new Etapa(resultSet.idEtapa, resultSet.nome, resultSet.descricao, alunos);

        etapas.push(etapa);
      }
      return etapas;
    }
    
    getById(id: string){
      let alunos: Aluno[] = [];
      let aluno: Aluno;
      let a = new repositoryAluno;
      const query = `select * from Etapa where idEtapa = ${id}`;
      const resultSet: any = this.connection.execute(query);
      const query2 = `select * from EtapaAluno where etapa = ${resultSet.idEtapa}`;
      const resultSet2: any = this.connection.execute(query2);
      
      while(resultSet2){
        aluno = a.getByID(resultSet2.raAluno)
        alunos.push(aluno);
      }

      const etapa: any = new Etapa(resultSet.idEtapa, resultSet.nome, resultSet.descricao,alunos);
      return etapa;
    }

    async insertAluno(aluno: Aluno, etapa: Etapa){
      let ps = new serviceProcessoSeletivo;
      if(await ps.checarAluno(aluno)){
        const query =  `insert into EtapaAluno (idEtapa, raAluno) values (${etapa.getNome()}, ${aluno.getRA()})`;
     }
    }

    delete(etapa: Etapa) {
      const id = etapa.getID();
      const query = `delete from Etapa where idEtapa = ${id}`;
    }

    update(etapa: Etapa){
      const query = `update Etapa set nome = ${etapa.getNome()}, ${etapa.getDescricao} where idEtapa = ${etapa.getID()}`;
    }
  }