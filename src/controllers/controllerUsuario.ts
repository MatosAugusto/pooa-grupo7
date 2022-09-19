import { Usuario } from "../classes/usuario";
import { serviceUsuario } from "../services/serviceUsuario"
class controllerUsuario{
    private serviceUsuario = new serviceUsuario();

    async adicionarUsuario(usuario: Usuario){
        await this.serviceUsuario.adicionarUsuario(usuario)
    }

    async buscarUsuarios(){
        return await this.serviceUsuario.buscarUsuarios();
    }

    async buscarUsuarioPorCPF(cpf: string){
        return await this.serviceUsuario.buscarUsuarioPorCPF(cpf);
    }

    async deletarUsuario(usuario: Usuario){
        await this.serviceUsuario.deletarUsuario(usuario);
    }

    async mudarUsuario(usuario: Usuario){
        await this.serviceUsuario.mudarUsuario(usuario);
    }

}
