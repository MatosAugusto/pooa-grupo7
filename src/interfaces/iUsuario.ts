import { Perfil } from "../classes/perfil";
import { Usuario } from "../classes/usuario";
import { usuarioService } from "../services/usuarioService";

interface iUsuario{
    (nome: string, cpf: string, dataNascimento: Date, senha : string, perfil :Perfil): void;
}    
    
    const adiciona: iUsuario = (nome, cpf, dataNascimento, senha, perfil) =>{
        const user = new Usuario(nome,cpf,dataNascimento,senha,perfil);
        const s = new usuarioService();
        s.adicionarUsuario(user);
    }