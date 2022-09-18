import { Usuario } from "../classes/usuario";
import { Perfil } from "../classes/perfil";
import { repositoryUsuario } from "../repositorio/repositoryUsuario";
import { repositoryPerfil } from "../repositorio/repositoryPerfil";
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
}
