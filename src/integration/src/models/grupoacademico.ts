import Aluno from "./aluno";
import Departamento from "./departamento";
import Evento from "./evento";
import Usuario from "./usuario";

type GrupoAcademico = {
    id: string;
    nome: string;
    descricao: string;
    dataCriacao: Date;
    status: boolean;
    departamento: Departamento;
    responsavel: Usuario;
    representantes: Aluno[];
    limiteParticipantes: number;
    participantes: Aluno[];
    listaEventos: Evento[];
    eventosParticipados: Evento[];
}
export default GrupoAcademico