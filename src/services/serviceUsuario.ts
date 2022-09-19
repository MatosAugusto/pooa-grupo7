import { Usuario } from "../classes/usuario";
import { Perfil } from "../classes/perfil";
import { repositoryUsuario } from "../repositories/repositoryUsuario";
import { repositoryPerfil } from "../repositories/repositoryPerfil";

export class serviceUsuario{
    private repositoryUsuario = new repositoryUsuario();
    private repositoryPerfil = new repositoryPerfil();
    
    async adicionarUsuario(usuario: Usuario){
        if(this.repositoryUsuario.getByCpf(usuario.getCpf())){
            throw new Error("Usuario já cadastrado!");            
        }
        if(!this.repositoryPerfil.getByName(usuario.getPerfil().getNome())){
            throw new Error("Perfil não encontrado!"); 
        }
        
        this.repositoryUsuario.insert(usuario);
    }

    async buscarUsuarios(){
        return this.repositoryUsuario.getAll();
    }

    async buscarUsuarioPorCPF(cpf: string){
        return this.repositoryUsuario.getByCpf(cpf);
    }

    async deletarUsuario(usuario: Usuario){
        if(!this.repositoryUsuario.getByCpf(usuario.getCpf())){
            throw new Error("Usuario não encontrado!");            
        }
        this.repositoryUsuario.delete(usuario);
    }

    async mudarUsuario(usuario: Usuario){
        if(!this.repositoryUsuario.getByCpf(usuario.getCpf())){
            throw new Error("Usuario não encontrado!");            
        }
        this.repositoryUsuario.update(usuario);
    }
}
