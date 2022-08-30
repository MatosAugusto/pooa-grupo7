import Etapa from "./etapa";

type ProcessoSeletivo = {
    data: Date;
    nroInscritos: number;
    nroVagas: number;
    nroAprovados: number;
    etapas: Etapa[];
}
export default ProcessoSeletivo