import { Usuario } from '../classes/usuario'

class repositoryUsuario {
    private connection = { execute(query: string) {} };
    /*
    insert(usuario: Usuario){
      const query = `insert into usuario (nome, cpf, dataNascimento, senha, perfil) values (${usuario.getNome()},${usuario.getCpf()},${usuario.getDataNascimento()},${usuario.getSenha()},${usuario.getPerfil()})`;
    }
    getAll(){
      let usuarios: Array<Usuario>;
      const query = `select * from usuario`;
      const resultSet: any = this.connection.execute(query);
      while(resultSet){
        let usuario: any = new Usuario();
        usuario.nome = resultSet.nome;
        usuario.cpf = resultSet.cpf;
        usuario.dataNascimento = resultSet.dataNascimento;
        usuario.senha = resultSet.senha;
        usuario.perfil = resultSet.perfil;

        usuarios.push(usuario);
      }
      return usuarios;
    }
    getByCpf(cpf: number): Usuario {
      const query = `select * from usuario where cpf = ${cpf}`;
      const resultSet: any = this.connection.execute(query);
       
      
      const usuario: any = new Usuario();
      usuario.setNome = resultSet.nome;
      usuario.setCpf = resultSet.cpf;
      usuario.setDataNascimento = resultSet.dataNascimento;
      usuario.setSenha = resultSet.senha;
      usuario.setPerfil = resultSet.perfil;
      return usuario;
    }
  
    delete(usuario: Usuario) {
      const cpf = usuario.getCpf();
      const query = `delete from usuario where cpf = ${cpf}`;
    }

    update(usuario: Usuario){

    }*/
  }