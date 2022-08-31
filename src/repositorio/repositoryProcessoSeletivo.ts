import { Aluno } from '../classes/aluno';
import { ProcessoSeletivo } from '../classes/processoseletivo'

export class repositoryProcessoSeletivo {
    private connection = { execute(query: string) {} };

    insert(processo: ProcessoSeletivo){
      const query = `insert into ProcessoSeletivo (dataProcesso, nroInscritos, nroVagas, nroAprovados) values (${processo.getData()}, ${processo.getNroInscritos()}, ${processo.getNroVagas()}, ${processo.getNroAprovados()} )`;
    }
    insertAluno(aluno: Aluno){
    }
    getAll(){
      const query = 'SELECT * FROM ProcessoSeletivo';
    }
    getById(id: bigint){
      const query = `SELECT * FROM ProcessoSeletivo WHERE idProcesso = ${id}`;
    }
    delete(id: bigint) {
      const query = `DELETE FROM ProcessoSeletivo WHERE idProcesso = ${id}`;
    }
    update(ps: ProcessoSeletivo){

    }
  }