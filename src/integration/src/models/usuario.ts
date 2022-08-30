import Perfil from "./perfil";

type Usuario = {
    nome: string;
    cpf: string;
    dataNascimento: Date;
    senha: string;
    perfil: Perfil;
}
export default Usuario