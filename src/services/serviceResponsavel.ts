import { repositoryUsuario } from "../repositorio/repositoryUsuario";
import { repositoryPerfil } from "../repositorio/repositoryPerfil";
import { repositoryGrupoAcademico } from "../repositorio/repositoryGrupoAcademico";
import { Usuario } from "../classes/usuario";
import { GrupoAcademico } from "../classes/grupoacademico";
import { Aluno } from "../classes/aluno";


export class serviceResponsavel{
    private repositoryUsuario = new repositoryUsuario();
    private repositoryPerfil = new repositoryPerfil();
    private repositoryGrupoAcademico = new repositoryGrupoAcademico();
    private perfilProfessor = this.repositoryPerfil.getByName("PROFESSOR");
    private perfilAluno = this.repositoryPerfil.getByName("ALUNO");

    async adicionarResponsavel(grupo: GrupoAcademico,responsavel: Usuario){
        if(!this.repositoryUsuario.getByCpf(responsavel.getCpf())){
            throw new Error("Usuário não cadastrado!");            
        }
        if(!this.repositoryPerfil.getByName(responsavel.getPerfil().getNome())){
            throw new Error("Perfil não encontrado!"); 
        }
        //nesse caso o professor pode ser responsável por apenas um grupo acadêmico
        if(this.repositoryPerfil.getByName(responsavel.getPerfil().getNome()) != this.perfilProfessor){
            throw new Error("O usuário não pode ser Responsável!"); 
        }
        
        responsavel.setPerfil(this.repositoryPerfil.getByName("RESPONSAVEL"));
        grupo.setResponsavel(responsavel);

        this.repositoryUsuario.update(responsavel);
        this.repositoryGrupoAcademico.update(grupo);
    }
    
    async trocarResponsavel(grupo: GrupoAcademico,responsavel: Usuario){
        if(!this.repositoryUsuario.getByCpf(responsavel.getCpf())){
            throw new Error("Usuário não cadastrado!");            
        }
        if(!this.repositoryPerfil.getByName(responsavel.getPerfil().getNome())){
            throw new Error("Perfil não encontrado!"); 
        }
        if(this.repositoryPerfil.getByName(responsavel.getPerfil().getNome()) != this.perfilProfessor){
            throw new Error("O usuário não pode ser Responsável!"); 
        }
        grupo.getResponsavel().setPerfil(this.repositoryPerfil.getByName("PROFESSOR"));
        this.repositoryUsuario.update(grupo.getResponsavel());
        
        responsavel.setPerfil(this.repositoryPerfil.getByName("RESPONSAVEL"));
        grupo.setResponsavel(responsavel);
        
        this.repositoryUsuario.update(responsavel);
        this.repositoryGrupoAcademico.update(grupo);
    }

    async incluirParticipante(grupo: GrupoAcademico, aluno: Aluno){
        if(!this.repositoryUsuario.getByCpf(aluno.getCpf())){
            throw new Error("Usuário não cadastrado!");            
        }
        if(!this.repositoryPerfil.getByName(aluno.getPerfil().getNome())){
            throw new Error("Perfil não encontrado!"); 
        }
        if(this.repositoryPerfil.getByName(aluno.getPerfil().getNome()) != this.perfilAluno){
            throw new Error("O usuário não pode ser inserido no grupo acadêmico!"); 
        }

        grupo.insertParticipante(aluno);
        this.repositoryGrupoAcademico.update(grupo);
    }

    async removerParticipante(grupo: GrupoAcademico, aluno: Aluno){
        if(!this.repositoryUsuario.getByCpf(aluno.getCpf())){
            throw new Error("Usuário não cadastrado!");            
        }
        if(!this.repositoryPerfil.getByName(aluno.getPerfil().getNome())){
            throw new Error("Perfil não encontrado!"); 
        }

        grupo.removeParticipante(aluno);
        this.repositoryGrupoAcademico.update(grupo);
    }
}
