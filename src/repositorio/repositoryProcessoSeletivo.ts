import { Aluno } from '../classes/aluno';
import { ProcessoSeletivo } from '../classes/processoseletivo'

export class repositoryProcessoSeletivo {
    private connection = { execute(query: string) {} };

    insert(){
    }
    insertAluno(aluno: Aluno){

    }
    getAll(){
    }
    getById(){
    }
    delete(ps: ProcessoSeletivo) {
    }
    update(ps: ProcessoSeletivo){

    }
  }