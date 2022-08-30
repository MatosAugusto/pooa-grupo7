import Aluno from "./aluno";
import GrupoAcademico from "./grupoacademico";
import Local from "./local";
import Usuario from "./usuario";

type Evento = {
    nome: string;
    data: Date;
    horaInicio: Date;
    horaFim: Date;
    organizadores: Aluno[];
    local: Local;
    palestrantes: Usuario[];
    grupoResponsavel: GrupoAcademico[];
}
export default Evento