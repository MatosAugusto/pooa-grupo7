import { Departamento } from '../classes/departamento';
import { Professor } from '../classes/professor'
import { Usuario } from '../classes/usuario';
import { repositoryDepartamento } from './repositoryDepartamento';
import { repositoryUsuario } from './repositoryUsuario';
import { repositoryPerfil } from './repositoryPerfil';

export class repositoryProfessor {
    private connection = { execute(query: string) {} };

    insert(professor: Professor){
      const query = `insert into professor (cpfUsuario, idDepartamento, nroUniversidade, statusBiblioteca) values (${professor.getCpf()},${professor.getDepartamento()},${professor.getNroUniversidade()}, ${professor.getStatusBiblioteca()} )`;
    }

    getAll(){
      const query = 'SELECT * FROM Professor';
      const resultSet: any = this.connection.execute(query);
      const d = new repositoryDepartamento;
      const u = new repositoryUsuario;
      const professores : Professor[] =[];
      
      while(resultSet){
        let usuario : Usuario = u.getByCpf(resultSet.cpf);
        let professor = new Professor(resultSet.nroUniversidade, d.getByID(resultSet.idDepartamento), resultSet.statusBiblioteca, usuario.getNome(), resultSet.cpf, usuario.getDataNascimento(), usuario.getSenha(), usuario.getPerfil());
        professores.push(professor);
      }
      return professores;
    }

    getById(cpf: string){
      const query = `SELECT * FROM Professor WHERE cpfUsuario = ${cpf}`
      const resultSet: any = this.connection.execute(query);
      const d = new repositoryDepartamento;
      const u = new repositoryUsuario;
      let usuario : Usuario = u.getByCpf(resultSet.cpf);
      const professor = new Professor(resultSet.nroUniversidade, d.getByID(resultSet.idDepartamento), resultSet.statusBiblioteca, usuario.getNome(), cpf, usuario.getDataNascimento(), usuario.getSenha(), usuario.getPerfil());
      return professor;
    }

    delete(professor: Professor) {
      const cpf = professor.getCpf();
      const query = `delete from professor where cpfUsuario = ${cpf}`;
    }
    
    update(professor: Professor){
      const query = `update Professor set idDepartamento = ${professor.getDepartamento().getID}, nroUniversidade = ${professor.getNroUniversidade}, statusBiblioteca = ${professor.getStatusBiblioteca} where cpfUsuario = ${professor.getCpf()}`;
    }
  }