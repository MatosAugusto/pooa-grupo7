import { Aluno } from "../classes/aluno";
import { Evento } from "../classes/evento";
import { Usuario } from "../classes/usuario";
import { Local } from "../classes/local";
import { checkStatusAluno } from "../interfaces/iIntegracao";
import { repositoryEvento } from "../repositories/repositoryEvento";
import { repositoryUsuario } from "../repositories/repositoryUsuario";
import { repositoryAluno } from "../repositories/repositoryAluno";
import { repositoryLocal } from "../repositories/repositoryLocal";
import { GrupoAcademico } from "../classes/grupoacademico";

export class serviceEvento{
    private eventoRepository = new repositoryEvento();
    private usuarioRepository = new repositoryUsuario();
    private alunoRepository = new repositoryAluno();
    private localRepository = new repositoryLocal();
    
    async criarEvento(evento: Evento){
        await this.eventoRepository.insert(evento);
    }

    async deletarEvento(evento: Evento){
        await this.eventoRepository.delete(evento);
    }

    async buscarEventos(){
        return this.eventoRepository.getAll();
    }

    async buscarEventoPorNome(nome: string){
        return this.eventoRepository.getByNome(nome);
    }

    async adicionarPalestrante(usuario: Usuario, evento: Evento){
        if(!this.usuarioRepository.getByCpf(usuario.getCpf())){
            throw new Error("Usuário não encontrado!");
        }
        this.eventoRepository.insertPalestrante(usuario, evento);
        evento.insertPalestrante(usuario)
    }
    
    async adicionarOrganizador(aluno: Aluno, evento: Evento){
        if(!this.alunoRepository.getByID(aluno.getRA())){
            throw new Error("Aluno não encontrado!");
        }
        if(!checkStatusAluno(aluno)){
            throw new Error("Aluno não está cumprindo os requisitos!");
        }
        this.eventoRepository.insertOrganizador(aluno, evento);
        evento.insertOrganizador(aluno);
    }

    async adicionarGrupoOrganizador(grupo: GrupoAcademico, evento: Evento){
        if(!this.alunoRepository.getByID(grupo.getID())){
            throw new Error("Grupo não encontrado!");
        }
        evento.insertGrupoResponsavel(grupo);
        this.eventoRepository.update(evento);
    }

    async removerGrupoOrganizador(grupo: GrupoAcademico, evento: Evento){
        if(!this.alunoRepository.getByID(grupo.getID())){
            throw new Error("Grupo não encontrado!");
        }
        evento.removeGrupoResponsavel(grupo);
        this.eventoRepository.update(evento);
    }    
    
    async alterarLocal(local: Local, evento: Evento){
        if(!this.localRepository.getById(local.getCep())){
            throw new Error("Local não encontrado!");
        }
        this.alterarLocal(local, evento);
        evento.setLocal(local)
    }

    async alterarData(data: Date, evento: Evento){
        let dataAtual = new Date();

        if(await !(data<dataAtual)){
            throw new Error("Data anterior a atual!"); 
        }
        this.alterarData(data, evento);
        evento.setDate(data)
    }
    
    async alterarStatus(status: string, evento: Evento){
        let dataAtual = new Date();
        let status1 = "A_ACONTECER"
        let status2 = "ACONTECENDO"
        let status3 = "CANCELADO"
        //esse status não está no documento de requisitos
        let status4 = "FINALIZADO"

        //se a data do evento for antes da data atual, não será possivel atribuir "A_ACONTECER"
        if(status==status1){
            if(evento.getData()<dataAtual){
                throw new Error("Esse evento não pode receber esse status!"); 
            }
        }
        
        //se a data atual não for a mesma da data do evento, não será possivel atribuir "ACONTECENDO"
        if(status==status2){
            if(!(evento.getData()==dataAtual)){
                throw new Error("Esse evento não pode receber esse status!"); 
            }
        }

        //se a data do evento ainda não tiver passado, não será possivel atribuir "FINALIZADO"
        if(status==status4){
            if(evento.getData()>dataAtual){
                throw new Error("Esse evento não pode receber esse status!"); 
            }  
        }
    }
}
