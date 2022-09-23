import { Aluno } from '../classes/aluno';
import { Etapa } from '../classes/etapa';
import { ProcessoSeletivo } from '../classes/processoseletivo'
import { repositoryEtapa } from './repositoryEtapa';

export class repositoryProcessoSeletivo {
    private connection = { execute(query: string) {} };

    insert(processo: ProcessoSeletivo){
      const query = `insert into ProcessoSeletivo (dataProcesso, nroInscritos, nroVagas, nroAprovados) values (${processo.getData()}, ${processo.getNroInscritos()}, ${processo.getNroVagas()}, ${processo.getNroAprovados()} )`;
    }
    insertAluno(aluno: Aluno, ps : ProcessoSeletivo, nroEtapa: number){
      const query = `insert into EtapaAluno (etapa, raAluno) values (${ps.getEtapaAtual()}, ${aluno.getRA()})`;
    }
      
    getAll(){
      const query = 'SELECT * FROM ProcessoSeletivo';
      const resultSet: any = this.connection.execute(query);
      const processos : ProcessoSeletivo[] = [];
      
      while (resultSet){
        const query2 = `SELECT * FROM EtapaProcesso WHERE processo = ${resultSet.processo_id}`;
        const resultSet2: any = this.connection.execute(query2);
        let etapas : Etapa[] = [];
        let e = new repositoryEtapa;
        while(resultSet2){
          etapas.push(e.getById(resultSet2.etapa));
        }
        const ps = new ProcessoSeletivo(resultSet.id, resultSet.data, resultSet.nroInscritos, resultSet.nroVagas, resultSet.nroAprovados,etapas);
        processos.push(ps);
      }
      return processos;
    }

    getById(id: bigint){
      const query = `SELECT * FROM ProcessoSeletivo WHERE idProcesso = ${id}`;
      const resultSet: any = this.connection.execute(query);
      const query2 = `SELECT * FROM EtapaProcesso WHERE processo = ${id}`;
      const resultSet2: any = this.connection.execute(query2);
      let etapas : Etapa[] = [];
      let e = new repositoryEtapa;
      
      while(resultSet2){
        etapas.push(e.getById(resultSet2.etapa));
      }
      const ps = new ProcessoSeletivo(resultSet.id, resultSet.data, resultSet.nroInscritos, resultSet.nroVagas, resultSet.nroAprovados,etapas);
      return ps;
    }

    delete(id: bigint) {
      const query = `DELETE FROM ProcessoSeletivo WHERE idProcesso = ${id}`;
    }

    update(ps: ProcessoSeletivo){
      const query = `update ProcessoSeletivo set dataProcesso = ${ps.getData()}, nroInscritos = ${ps.getNroInscritos}, nroVagas = ${ps.getNroVagas}, nroAprovados = ${ps.getNroAprovados} where idProcesso = ${ps.getID()}`;
    }
  }