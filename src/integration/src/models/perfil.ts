import Acoes from "./acoes";

type Perfil = {
    nome: string;
    criadoEm: Date;
    alteradoEm: Date;
    acoes: Array<Acoes>;
}
export default Perfil