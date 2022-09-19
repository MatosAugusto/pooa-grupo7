import { Usuario } from "../classes/usuario";
import { serviceUsuario } from "../services/serviceUsuario"
class controllerUsuario{
    private serviceUsuario = new serviceUsuario();

    async adicionarUsuario(usuario: Usuario){
        await this.serviceUsuario.adicionarUsuario(usuario)
    }
}
