import { Usuario } from "../classes/usuario";
import { Perfil } from "../classes/perfil";
import { repositoryGrupoAcademico } from "../repositorio/repositoryGrupoAcademico";
export class grupoacademicoService{
    private grupoAcadRepository = new repositoryGrupoAcademico();
    async getById(idGrupo: string, user : Usuario){
        if (!user.getPerfil.podeExecutar(desativarGrupo)) {
            throw new Error("Você não pode acessar esse resource");
          }
    }
}