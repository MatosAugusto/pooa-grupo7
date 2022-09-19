import { Usuario } from '../classes/usuario'

export class repositoryUsuario {
    private connection = { execute(query: string) {} };
    insert(usuario: Usuario){
      const query = `insert into usuario (nome, cpf, dataNascimento, senha, perfil) values (${usuario.getNome()},${usuario.getCpf()},${usuario.getDataNascimento()},${usuario.getSenha()},${usuario.getPerfil()})`;
    }
    
    getAll(){
      let usuarios: Array<Usuario> =[];
      const query = `select * from usuario`;
      const resultSet: any = this.connection.execute(query);
      
      while(resultSet){
        let usuario: any = new Usuario(resultSet.nome, resultSet.cpf,resultSet.dataNascimento, resultSet.senha,resultSet.perfil);

        usuarios.push(usuario);
      }
      return usuarios;
    }
    
    getByCpf(cpf: string): Usuario {
      const query = `select * from usuario where cpf = ${cpf}`;
      const resultSet: any = this.connection.execute(query);
      const usuario: any = new Usuario(resultSet.nome, resultSet.cpf,resultSet.dataNascimento, resultSet.senha,resultSet.perfil);

      return usuario;
    }
  
    delete(usuario: Usuario) {
      const cpf = usuario.getCpf();
      const query = `delete from usuario where cpf = ${cpf}`;

    }

    update(usuario: Usuario){
      const query = `update Usuario set nome = ${usuario.getNome()}, dataNascimento = ${usuario.getDataNascimento}, senha = ${usuario.getSenha}, perfil = ${usuario.getPerfil().getNome} where cpf = ${usuario.getCpf()}`;
    }
  }