import { Professor } from '../classes/professor'

export class repositoryProfessor {
    private connection = { execute(query: string) {} };

    insert(professor: Professor){
      const query = `insert into professor (cpfUsuario, idDepartamento, nroUniversidade, statusBiblioteca) values (${professor.getCpf()},${professor.getDepartamento()},${professor.getUniversidade()}, ${professor.getstatusBiblioteca()} )`;
    }
    getAll(){
      const query = 'SELECT * FROM Professor';
    }
    getById(cpf: string){
      const query = `SELECT * FROM Professor WHERE cpfUsuario = ${cpf}`
    }
    delete(professor: Professor) {
      const cpf = professor.getCpf();
      const query = `delete from professor where cpfUsuario = ${cpf}`;
    }
    update(professor: Professor){

    }
  }