import { Perfil } from "../classes/perfil";
import { Usuario } from "../classes/usuario";
import { serviceUsuario } from "../services/serviceUsuario";

interface iUsuario{
    (nome: string, cpf: string, dataNascimento: Date, senha : string, perfil :Perfil): void;
}    
    
    const adiciona: iUsuario = (nome, cpf, dataNascimento, senha, perfil) =>{
        const user = new Usuario(nome,cpf,dataNascimento,senha,perfil);
        const s = new serviceUsuario();
        s.adicionarUsuario(user);
    }