import { Usuario } from "../classes/usuario";
import { Perfil } from "../classes/perfil";
import { repositoryUsuario } from "../repositorio/repositoryUsuario";
import { repositoryPerfil } from "../repositorio/repositoryPerfil";
export class usuarioService{
    private usuarioRepository = new repositoryUsuario();
    private perfilRepository = new repositoryPerfil();
    async adicionarUsuario(usuario: Usuario){
        if(this.usuarioRepository.getByCpf(usuario.getCpf())){
            throw new Error("Usuario já cadastrado!");            
        }
        if(!this.perfilRepository.getByName(usuario.getPerfil().getNome())){
            throw new Error("Perfil não encontrado!"); 
        }
        
        this.usuarioRepository.insert(usuario);
    }
}